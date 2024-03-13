import { useContext } from 'react';
import useSwr, { Key, useSWRConfig } from 'swr';
import useSWRMutation from 'swr/mutation';
import { WixAPIContext } from './wix-api-context-provider';
import { products } from '@wix/stores';
import { findItemIdInCart } from './cart-helpers';

type ProductsMap = { [k: string]: products.Product };
const PRODUCTS_MAP_KEY = 'map';

export function useProducts() {
    const wixApi = useContext(WixAPIContext);
    const { mutate } = useSWRConfig();

    return useSwr('products', wixApi.getAllProducts, {
        //here we add a map of items to the cache so we can read a single item from it later
        onSuccess: (products) => {
            const productsMap: ProductsMap = Object.fromEntries(products.map((it) => [it._id, it]));
            mutate(PRODUCTS_MAP_KEY, productsMap).catch((e) => {
                console.error('mutate failed', e);
            });
        },
    });
}

export function useProduct(id?: string) {
    const wixApi = useContext(WixAPIContext);
    const { cache } = useSWRConfig();
    const productsMap = cache.get(PRODUCTS_MAP_KEY);
    const productFromCache = id ? (productsMap?.data as ProductsMap | undefined)?.[id] : undefined;

    //we fetch the item from the server only if we don't have it in the cached map
    const fetched = useSwr(!productFromCache ? `product/${id}` : null, () => wixApi.getProduct(id));

    return productFromCache
        ? { data: productFromCache, isLoading: false }
        : { isLoading: fetched.isLoading, data: fetched.data };
}

export const usePromotedProducts = () => {
    const wixApi = useContext(WixAPIContext);
    return useSwr('promoted-products', wixApi.getPromotedProducts);
};

export const useCart = () => {
    const wixApi = useContext(WixAPIContext);
    return useSwr('cart', wixApi.getCart);
};

export const useCartTotals = () => {
    const wixApi = useContext(WixAPIContext);
    return useSwr('cart-totals', wixApi.getCartTotals, {
        revalidateOnMount: true,
        revalidateIfStale: true,
    });
};

type Args = { id: string; quantity: number };

export const useAddToCart = () => {
    const wixApi = useContext(WixAPIContext);
    const { data: cart } = useCart();
    return useSWRMutation(
        'cart',
        (_key: Key, { arg }: { arg: Args & { options?: Record<string, string> } }) => {
            if (!cart) {
                return wixApi.addToCart(arg.id, arg.quantity, arg.options);
            }
            const itemInCart = findItemIdInCart(cart, arg.id, arg.options);
            return itemInCart
                ? wixApi.updateCartItemQuantity(
                      itemInCart._id,
                      (itemInCart.quantity || 0) + arg.quantity
                  )
                : wixApi.addToCart(arg.id, arg.quantity, arg.options);
        },
        {
            revalidate: false,
            populateCache: true,
        }
    );
};

export const useUpdateCartItemQuantity = () => {
    const wixApi = useContext(WixAPIContext);
    return useSWRMutation(
        'cart',
        (_key: Key, { arg }: { arg: Args }) => wixApi.updateCartItemQuantity(arg.id, arg.quantity),
        {
            revalidate: false,
            populateCache: true,
        }
    );
};

export const useRemoveItemFromCart = () => {
    const wixApi = useContext(WixAPIContext);
    return useSWRMutation(
        'cart',
        (_key: Key, { arg }: { arg: string }) => wixApi.removeItemFromCart(arg),
        {
            revalidate: false,
            populateCache: true,
        }
    );
};
