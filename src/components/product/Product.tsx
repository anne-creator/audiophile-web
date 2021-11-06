import React, { useEffect } from 'react';
import styles from './Product.module.scss'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

interface PropsType {
    productId: string;
    productName: string;
    ifNew: boolean;
    description: string;
    productImg: string;
}

export const Product: React.FC<PropsType> = ({ productName, ifNew, description, productImg, productId }) => {
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
                    <Link to={`/productItem/${productId}`}>
                        <Button className={styles['button-primary']} type='primary'>SEE PRODUCT</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}