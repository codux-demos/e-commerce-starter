import classNames from 'classnames';
import styles from './products.module.scss';
import commonStyles from '@styles/common-styles.module.scss';
import { ProductCard } from '../product-card/product-card';
import CommonStyles_module from '../../styles/common-styles.module.scss';

export interface ProductsProps {
    className?: string;
}

/**
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Products = ({ className }: ProductsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <ProductCard
                    name="PUFFY STITCH TOTE BAG"
                    price={{ formatted: { price: '$22' } }}
                    style={{}}
                    imageUrl="https://static.wixstatic.com/media/84770f_90b9691ed97e44caa48535a62f1ddd12~mv2.jpg/v1/fill/w_860,h_1288,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_90b9691ed97e44caa48535a62f1ddd12~mv2.jpg"
                    className={CommonStyles_module.border}
                />
            </div>
            <div>
                <ProductCard
                    name="PUFFY STITCH TOTE BAG"
                    price={{ formatted: { price: '$22' } }}
                    style={{}}
                    imageUrl="https://static.wixstatic.com/media/84770f_90b9691ed97e44caa48535a62f1ddd12~mv2.jpg/v1/fill/w_860,h_1288,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_90b9691ed97e44caa48535a62f1ddd12~mv2.jpg"
                    className={CommonStyles_module.border}
                />
            </div>
            <div>
                <ProductCard
                    name="PUFFY STITCH TOTE BAG"
                    price={{ formatted: { price: '$22' } }}
                    style={{}}
                    imageUrl="https://static.wixstatic.com/media/84770f_90b9691ed97e44caa48535a62f1ddd12~mv2.jpg/v1/fill/w_860,h_1288,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_90b9691ed97e44caa48535a62f1ddd12~mv2.jpg"
                    className={CommonStyles_module.border}
                />
            </div>
            <div>
                <ProductCard
                    name="PUFFY STITCH TOTE BAG"
                    price={{ formatted: { price: '$22' } }}
                    style={{}}
                    imageUrl="https://static.wixstatic.com/media/84770f_90b9691ed97e44caa48535a62f1ddd12~mv2.jpg/v1/fill/w_860,h_1288,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_90b9691ed97e44caa48535a62f1ddd12~mv2.jpg"
                    className={CommonStyles_module.border}
                />
            </div>
        </div>
    );
};
