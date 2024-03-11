import { Cart } from './WixAPIContextProvider';

//this function should check for similarity in options as well
export function findItemIdInCart(cart: Cart, catalogItemId: string) {
    return cart.lineItems.find((it) => it.catalogReference?.catalogItemId === catalogItemId);
}
