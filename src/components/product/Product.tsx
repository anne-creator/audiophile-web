import React, { useEffect } from 'react';
import styles from './Product.module.scss'
import { Button } from 'antd'


interface PropsType {
    productName: string;
    ifNew: boolean;
    description: string;
    productImg: string;
}

export const Product: React.FC<PropsType> = ({ productName, ifNew, description, productImg }) => {

    console.log(productImg);
    return (
        <>
            <div className={styles['product']}>
                <div className={styles['product__img-container']}>
                    <img src={productImg} alt={productName} />
                </div>
                <div className={styles['product__detail']}>
                    {ifNew ? (
                        <div className={styles['product__new']}>NEW PRODUCT</div>
                    ) : (null)}
                    <h1 className={styles['product__title']}>{productName}</h1>
                    <div className={styles['product__description']}>{description}</div>
                    <Button className={styles['button-primary']} type='primary'>SEE PRODUCT</Button>
                </div>
            </div>
        </>
    );
}