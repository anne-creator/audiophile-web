import styles from './Story.module.scss';
import React from 'react'
import storyImg from '../../assets/story.png'

export const Story: React.FC = () => {
    return (<>
        <div className={styles['story']}>
            <div className={styles['story__content']}>
                <div className={styles['story__title']}>Bringing you the best audio gear</div>
                <div className={styles['story__detail']}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</div>
            </div>
            <img className={styles['story__img']} src={storyImg}></img>
        </div>
    </>)
}