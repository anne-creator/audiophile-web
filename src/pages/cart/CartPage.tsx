import React from 'react';
import styles from "./CartPage.module.scss";
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from '../../redux/hooks'
import { useDispatch } from "react-redux";
import { clearCart } from '../../redux/cartList/slice';
import { Button } from 'antd';

export const CartPage: React.FC = () => {
    const cartList = useSelector(s => s.cart.cartList);
    const cartTotalPrice = useSelector(s => s.cart.cartTotalPrice);
    const cartQuantity = useSelector(s => s.cart.cartQuantity);

    const dispatch = useDispatch();
    const handleClearButton = () => {
        dispatch(clearCart());
    }
    return (<>
        <div className={styles['cart']} >
            <div>{cartTotalPrice}</div>
            <div>{cartQuantity}</div>
            <Button onClick={() => handleClearButton()}> Clear Cart</Button>
        </div>
    </>)
}