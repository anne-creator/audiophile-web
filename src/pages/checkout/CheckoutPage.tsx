import React from 'react'
import styles from './CheckoutPage.module.scss'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from "react-redux";
import { MainLayout } from '../../layouts/mainLayout'
import { Button, Spin } from 'antd'

export const CheckoutPage: React.FC = () => {
    // const dispatch = useDispatch();
    const cartList = useSelector(s => s.cart.cartList);
    const cartTotalPrice = useSelector(s => s.cart.cartTotalPrice);
    console.log(cartList);
    console.log(cartTotalPrice);

    return (<>
        <MainLayout>
            <div className={styles['checkout']} >
                <h3 className={styles['checkout__title']} >CHECKOUT</h3>
                <div className={styles['checkout__content']}>
                    <div className={styles['checkout__left']}>
                        <div className={styles['checkout__billing']}>
                            {/* left 1:SHIPING address section */}
                            <div className={styles['checkout__billing__title']}>SHIPING ADDRESS</div>
                            <div className={styles['checkout__billing__content']}>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="First Name">First Name</label>
                                    <input className={styles['checkout__input']} type="text" id="First Name" name="First Name" placeholder="First Name" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="lname">Last Name</label>
                                    <input className={styles['checkout__input']} type="text" id="lname" name="lastname" placeholder="Your last name" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="Address">ADDRESS</label>
                                    <input className={styles['checkout__input']} type="text" id="Address" name="Address" placeholder="Your Address" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="ZIP Code">ZIP Code</label>
                                    <input className={styles['checkout__input']} type="text" id="ZIP Code" name="ZIP Code" placeholder="ZIP Code" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="city">city</label>
                                    <input className={styles['checkout__input']} type="text" id="city" name="city" placeholder="City" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="Country">Country</label>
                                    <input className={styles['checkout__input']} type="text" id="Country" name="Country" placeholder="Country" />
                                </div>
                            </div>
                            {/* left 2:billing address section */}
                            <div className={styles['checkout__billing__title']}>BILLING INFO</div>
                            <div className={styles['checkout__billing__content']}>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="fname">First Name</label>
                                    <input className={styles['checkout__input']} type="text" id="fname" name="firstname" placeholder="Your name" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="lname">Last Name</label>
                                    <input className={styles['checkout__input']} type="text" id="lname" name="lastname" placeholder="Your last name" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="Address">ADDRESS</label>
                                    <input className={styles['checkout__input']} type="text" id="Address" name="Address" placeholder="Your Address" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="ZIP Code">ZIP Code</label>
                                    <input className={styles['checkout__input']} type="text" id="ZIP Code" name="ZIP Code" placeholder="ZIP Code" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="city">city</label>
                                    <input className={styles['checkout__input']} type="text" id="city" name="city" placeholder="City" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="Country">Country</label>
                                    <input className={styles['checkout__input']} type="text" id="Country" name="Country" placeholder="Country" />
                                </div>
                            </div>
                            {/* left 3:CARD INFO section */}
                            <div className={styles['checkout__billing__title']}>PAYMNENT</div>
                            <div className={styles['checkout__billing__content']}>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="fname">Card Number (Credit or Debit)</label>
                                    <input className={styles['checkout__input']} type="text" id="fname" name="firstname" placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="expire">Expire Date</label>
                                    <input className={styles['checkout__input']} type="text" id="expire" name="expire" placeholder="MM/YY" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="cvc">CVC</label>
                                    <input className={styles['checkout__input']} type="text" id="cvc" name="cvc" placeholder="CVC" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['checkout__right']}>
                        right
                        <Button type='primary' className={styles['button-primary']}>Place Order</Button>
                    </div>
                </div>

            </div>
        </MainLayout>
    </>)
}
