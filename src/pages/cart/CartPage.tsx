import React from 'react';
import styles from "./CartPage.module.scss";
import { useHistory } from 'react-router-dom';
import { useSelector } from '../../redux/hooks'
import { useDispatch } from "react-redux";
import { clearCart, changeProductQuantity, removeItem } from '../../redux/cartList/slice';
import { Button, Divider } from 'antd';
import { MainLayout } from '../../layouts/mainLayout'

export const CartPage: React.FC = () => {
  const cartList = useSelector(s => s.cart.cartList);
  const cartTotalPrice = useSelector(s => s.cart.cartTotalPrice);

  const dispatch = useDispatch();
  const history = useHistory();

  // when click clear the cart button
  const handleClearButton = () => {
    dispatch(clearCart());
  }

  // when click check out button
  const dataPassToCheckout = { cartList, cartTotalPrice }
  const handleCheckOutButton = () => {
    dispatch(clearCart());
    history.push({
      pathname: '/checkout',
      state: dataPassToCheckout // your data array of objects
    })
  }

  //when click any +  or  - button in the cart
  const handleProductQuantity = (num: number, productId: number, itemQuantity: number, price) => {
    if (itemQuantity <= 1 && num === -1) {
      alert('If you wish to remove the item, click "remove it"');
    } else {
      dispatch(changeProductQuantity({ num, productId, itemQuantity, price }))

    }
  }
  //remove specific item 
  const handleRemoveButton = (productId: number) => {
    dispatch(removeItem({ productId }))
  }

  return (<>
    <MainLayout>
      <div className={styles['cart']} >
        <h3 className={styles['cart__title']} >Cart</h3>
        <div className={styles['cart__seperator']} />
        {cartList.map((item, index) => {
          return (
            <div key={item.productId}>
              <div className={styles['cart__cartItem']} >
                <div className={styles['cart__cartItem__left']} >
                  <div className={styles['cart__cartItem__img-container']} >
                    <img src={item?.image} alt={item?.productName} />
                  </div>
                  <div className={styles['cart__cartItem__detail']} >
                    <div className={styles['cart__cartItem__name']} >{item?.productName}</div>
                    <div className={styles['cart__cartItem__price']} >$ {item?.price}</div>
                  </div>
                </div>
                <div className={styles['cart__cartItem__right']} >
                  <div className={styles['cart__cartItem__decrease-item']} onClick={() => handleProductQuantity(-1, item?.productId, item?.quantity, item?.price)}><span>-</span></div>
                  <div className={styles['cart__cartItem__quantity']} ><span>x{item?.quantity}</span></div>
                  <div className={styles['cart__cartItem__increase-item']} onClick={() => handleProductQuantity(1, item?.productId, item?.quantity, item?.price)} ><span>+</span></div>
                  {/* remove button */}
                  <Button type='primary' onClick={() => handleRemoveButton(item?.productId)} >remove</Button>
                </div>
              </div>
              <Divider className={styles['cart__cartItem__divider']} />
            </div>

          )
        })}
        <Button type='primary' className={styles['button-secondary']} onClick={() => handleClearButton()}>Clear cart</Button>
        <div className={styles['cart__price']} >
          <div className={styles['cart__price__container']}>
            {/* the Price: Tax: Total Price:  */}
            <div className={styles['cart__price__left']}>
              <div className={styles['cart__before-tax']} >Price: </div>
              <div className={styles['cart__tax']} >Tax: </div>
              <div className={styles['cart__shipping']}>Shipping: </div>
              <div className={styles['cart__after-tax']}>Total Price: </div>
            </div>
            {/* the actual price number */}
            <div className={styles['cart__price__right']}>
              <div className={styles['cart__before-tax-num']}>{cartTotalPrice}</div>
              <div className={styles['cart__tax-num']}>{cartTotalPrice * 0.13}</div>
              <div className={styles['cart__shipping-num']}>Free</div>
              <div className={styles['cart__after-tax-num']}>{cartTotalPrice * 1.13}</div>
            </div>

          </div>
          <Button type='primary' onClick={() => handleCheckOutButton()} className={styles['button-primary']} > Check Out</Button>
        </div>
      </div>
    </MainLayout>
  </>)
}