import React from 'react'
import styles from './CheckoutPage.module.scss'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from "react-redux";
import { MainLayout } from '../../layouts/mainLayout'
import { Button, Spin } from 'antd'

export const CheckoutPage: React.FC = () => {
    return (<>
        <MainLayout>
            <div className={styles['checkout']} >
                <h3 className={styles['checkout__title']} >CHECKOUT</h3>
                {/* <div className={styles['checkout__seperator']} /> */}
                <div className={styles['checkout__content']}>
                    <div className={styles['checkout__left']}>
                        left
                    </div>
                    <div className={styles['checkout__right']}>
                        right
                    </div>
                </div>

                <Button type='primary' className={styles['button-primary']}>Place Order</Button>
            </div>
        </MainLayout>
    </>)
}
