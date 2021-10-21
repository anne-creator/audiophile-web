import React from 'react';
import styles from './CategoryItem.module.scss'
import { Button } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons'

interface PropsType {
    title: string;
    imageSrc: string
}

export const CategoryItem: React.FC<PropsType> = ({ title, imageSrc }) => {

    return (<>
        <div className={styles.item}>
            <div className={styles['item__info']}>
                <div className={styles['item__title']}>{title}</div>
                <Button className={styles['item__button']} type="text" shape="round" size={'small'}>Shop <SwapRightOutlined /></Button>
            </div>
        </div>
        <img className={styles['item__img']} src={imageSrc} alt="headphone" />
    </>)
}