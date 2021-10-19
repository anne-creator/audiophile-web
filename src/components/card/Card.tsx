import React from 'react';
import styles from './Card.module.scss'
import { Button, Col, Row } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons'
import headphone from '../../assets/shared/image-category-thumbnail-headphones.png';

interface PropsType {
    // id: number;
    title: string;
    imageSrc: string
}

export const Card: React.FC<PropsType> = ({ title, imageSrc }) => {
    // console.log(title);
    // console.log(ImageSrc);
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