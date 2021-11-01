import React from 'react'
import styles from './MayLikeProductItem.module.scss'
import { Button } from 'antd'
interface PropsType {
    productImgSrc: string;
    productName: string;
}
export const MayLikeProductItem: React.FC<PropsType> = ({ productImgSrc, productName }) => {
    return (
        <div className={styles['item']}>
            <img className={styles['item__img']} src={productImgSrc} alt={productName} />
            <h2 className={styles['item__title']}>{productName}</h2>
            <Button type="primary" className={styles['item__button']}>SEE PRODUCT</Button>
        </div>
    )
}