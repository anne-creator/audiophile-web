import React from 'react';
import styles from './Card.module.scss'
import { Button } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons'
import headphone from '../../assets/shared/image-category-thumbnail-headphones.png';

export const Card: React.FC = () => {
    return (<>
        <div className={styles.item}>
            <div className={styles['item__info']}>
                <div className={styles['item__title']}>HEADPHONES</div>
                <Button className={styles['item__button']} type="text" shape="round" size={'small'}>Shop <SwapRightOutlined /></Button>
            </div>
        </div>
        <img className={styles['item__img']} src={headphone} alt="headphone" />
    </>)
}