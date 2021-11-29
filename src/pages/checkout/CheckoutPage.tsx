import React, { useState, useEffect } from 'react'
import styles from './CheckoutPage.module.scss'
import { useSelector } from '../../redux/hooks'
import { MainLayout } from '../../layouts/mainLayout'
import { Button } from 'antd'
import { useLocation } from 'react-router-dom';
import { order } from '../order/OrderPage.module.scss'
interface stateType {
    cartList: any;
    cartTotalPrice: number;
}

export const CheckoutPage: React.FC = () => {
    const { state } = useLocation<stateType>();

    const cartList = state.cartList;
    const cartTotalPrice = state.cartTotalPrice;

    /**    billing and address value initiat and stored
     */

    //shipping info
    const [fNameS, setFNameS] = useState<string>("");
    const [lNameS, setLNameS] = useState<string>("");
    const [addressS, setAddressS] = useState<string>("");
    const [ZIPS, setZIPS] = useState<string>("");
    const [cityS, setCityS] = useState<string>("");
    const [countryS, setCountryS] = useState<string>("");


    //Billing info
    const [fNameC, setFNameC] = useState<string>("");
    const [lNameC, setLNameC] = useState<string>("");
    const [addressC, setAddressC] = useState<string>("");
    const [ZIPC, setZIPC] = useState<string>("");
    const [cityC, setCityC] = useState<string>("");
    const [countryC, setCountryC] = useState<string>("");

    //PAYMNENT
    const [fNameP, setFNameP] = useState<string>("");
    const [lNameP, setLNameP] = useState<string>("");
    const [ZIPP, setZIPP] = useState<string>("");
    const [cardNumberP, setCardNumberP] = useState<string>("");
    const [expireData, setExpireDataP] = useState<string>("");
    const [CVC, setCVCP] = useState<string>("");

    const [orderInfo, setOrderInfo] = useState<Object>({});


    //order info updating when clients enter infomation state
    useEffect(() => {
        setOrderInfo({
            fNameS, lNameS, addressS, ZIPS, cityS, countryS, fNameC, lNameC, addressC, ZIPC, cityC, countryC, fNameP, lNameP, ZIPP, cardNumberP, expireData, CVC, cartList, cartTotalPrice
        })
    }, [fNameS, lNameS, addressS, ZIPS, cityS, countryS, fNameC, lNameC, addressC, ZIPC, cityC, countryC, fNameP, lNameP, ZIPP, cardNumberP, expireData, CVC, cartList, cartTotalPrice])


    //when chicked button: place order 
    //=> show pop up window and dispatch to create a new order info in redux.       
    const [showPopUpWindow, setShowPopUpWindow] = useState<boolean>(false);
    const handleCheckOutButton = () => {
        setShowPopUpWindow(!showPopUpWindow);
        dispatch(createNewOrder(orderInfo))

    }




    return (<>
        <MainLayout>
            <div className={styles['checkout']} >
                <h3 className={styles['checkout__title']} >CHECKOUT</h3>
                <div className={styles['checkout__content']}>
                    {/* Left: address and billing */}
                    <div className={styles['checkout__left']}>
                        <div className={styles['checkout__billing']}>
                            {/* left 1:SHIPPING address section */}
                            <div className={styles['checkout__billing__title']}>SHIPING ADDRESS</div>
                            <div className={styles['checkout__billing__content']}>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="First Name">First Name</label>
                                    <input className={styles['checkout__input']} onChange={event => setFNameS(event.target.value)} type="text" id="First Name" name="First Name" placeholder="First Name" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="lname">Last Name</label>
                                    <input className={styles['checkout__input']} onChange={event => setLNameS(event.target.value)} type="text" id="lname" name="lastname" placeholder="Your last name" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="Address">ADDRESS</label>
                                    <input className={styles['checkout__input']} onChange={event => setAddressS(event.target.value)} type="text" id="Address" name="Address" placeholder="Your Address" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="ZIP Code">ZIP Code</label>
                                    <input className={styles['checkout__input']} onChange={event => setZIPS(event.target.value)} type="text" id="ZIP Code" name="ZIP Code" placeholder="ZIP Code" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="city">city</label>
                                    <input className={styles['checkout__input']} onChange={event => setCityS(event.target.value)} type="text" id="city" name="city" placeholder="City" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="Country">Country</label>
                                    <input className={styles['checkout__input']} onChange={event => setCountryS(event.target.value)} type="text" id="Country" name="Country" placeholder="Country" />
                                </div>
                            </div>
                            {/* left 2:billing address section */}
                            <div className={styles['checkout__billing__title']}>BILLING INFO</div>
                            <div className={styles['checkout__billing__content']}>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="fname">First Name</label>
                                    <input className={styles['checkout__input']} onChange={event => setFNameC(event.target.value)} type="text" id="fname" name="firstname" placeholder="Your name" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="lname">Last Name</label>
                                    <input className={styles['checkout__input']} onChange={event => setLNameC(event.target.value)} type="text" id="lname" name="lastname" placeholder="Your last name" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="Address">ADDRESS</label>
                                    <input className={styles['checkout__input']} onChange={event => setAddressC(event.target.value)} type="text" id="Address" name="Address" placeholder="Your Address" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="ZIP Code">ZIP Code</label>
                                    <input className={styles['checkout__input']} onChange={event => setZIPC(event.target.value)} type="text" id="ZIP Code" name="ZIP Code" placeholder="ZIP Code" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="city">city</label>
                                    <input className={styles['checkout__input']} onChange={event => setCityC(event.target.value)} type="text" id="city" name="city" placeholder="City" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="Country">Country</label>
                                    <input className={styles['checkout__input']} onChange={event => setCountryC(event.target.value)} type="text" id="Country" name="Country" placeholder="Country" />
                                </div>
                            </div>
                            {/* left 3:CARD INFO section */}
                            <div className={styles['checkout__billing__title']}>PAYMNENT</div>
                            <div className={styles['checkout__billing__content']}>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="First Name">First Name</label>
                                    <input className={styles['checkout__input']} onChange={event => setFNameP(event.target.value)} type="text" id="First Name" name="First Name" placeholder="First Name" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="lname">Last Name</label>
                                    <input className={styles['checkout__input']} onChange={event => setLNameP(event.target.value)} type="text" id="lname" name="lastname" placeholder="Your last name" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="ZIP Code">ZIP Code</label>
                                    <input className={styles['checkout__input']} onChange={event => setZIPP(event.target.value)} type="text" id="ZIP Code" name="ZIP Code" placeholder="ZIP Code" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="fname">Card Number (Credit or Debit)</label>
                                    <input className={styles['checkout__input']} onChange={event => setCardNumberP(event.target.value)} type="text" id="fname" name="firstname" placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="expire">Expire Date</label>
                                    <input className={styles['checkout__input']} onChange={event => setExpireDataP(event.target.value)} type="text" id="expire" name="expire" placeholder="MM/YY" />
                                </div>
                                <div className={styles['checkout__input-container']}>
                                    <label className={styles['checkout__input-label']} htmlFor="cvc">CVC</label>
                                    <input className={styles['checkout__input']} onChange={event => setCVCP(event.target.value)} type="text" id="cvc" name="cvc" placeholder="CVC" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right:order info */}
                    <div className={styles['checkout__right']}>
                        <div className={styles['checkout__summary']}>
                            <div className={styles['checkout__summary__title']}>SUMMARY</div>
                            {/* <div className={styles['checkout__summary__content']}> */}
                            {cartList.map((item) => {
                                return (
                                    <div key={item.id} className={styles['checkout__summary__content']}>
                                        <div className={styles['cartItem__info']}>
                                            <div className={styles['cartItem__info__img-container']}>
                                                <img src={item?.image} alt={item?.productName} />
                                            </div>
                                            <div className={styles['cartItem__info__detail']}>
                                                <h1 className={styles['cartItem__info__title']}>{item?.productName}</h1>
                                                <div className={styles['cartItem__info__price']}>{`$ ${item?.price}`}</div>
                                            </div>
                                        </div>
                                        <div className={styles['cartItem__quanlity']}>{`x ${item?.quantity}`}</div>
                                    </div>
                                )
                            })}
                            {/* </div> */}
                            <div className={styles['checkout__summary__price']} >
                                {/* <div className={styles['price__container']}> */}
                                {/* the Price: Tax: Total Price:  */}
                                <div className={styles['price__left']}>
                                    <div className={styles['price__before-tax']} >Price: </div>
                                    <div className={styles['price__tax']} >Tax: </div>
                                    <div className={styles['price__shipping']}>Shipping: </div>
                                    <div className={styles['price__after-tax']}>Total Price: </div>
                                </div>
                                {/* the actual price number */}
                                <div className={styles['price__right']}>
                                    <div className={styles['price__before-tax-num']}>{cartTotalPrice}</div>
                                    <div className={styles['price__tax-num']}>{cartTotalPrice * 0.13}</div>
                                    <div className={styles['price__shipping-num']}>Free</div>
                                    <div className={styles['price__after-tax-num']}>{cartTotalPrice + cartTotalPrice * 0.13}</div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className={styles['button__container']}>
                            <Button type='primary' onClick={() => handleCheckOutButton()} className={styles['button-primary']}>Place Order</Button>
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    </>)
}
