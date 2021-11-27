/** Show Singer product detail in this page. 
 *  @param productId
 *  dispatch cart item information to redux store cartList slice 
*/

import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from '../../redux/hooks'
import { useDispatch } from "react-redux";
import { getProductItem } from '../../redux/productItem/slice';
import { Categories, Story, MayLikeProducts } from '../../components'
import { MainLayout } from '../../layouts/mainLayout'
import { Button, Spin } from 'antd'
import { addToCart } from '../../redux/cartList/slice'
import { userSlice } from '../../redux/user/slice'

interface PropsType {
    productId: string;
}

export const ProductPage: React.FC<PropsType> = () => {
    const { productId } = useParams<PropsType>();
    console.log(`productId is ${productId}`);
    const dispatch = useDispatch();
    const jwt = useSelector(s => s.user.token);
    const history = useHistory();


    /** Get product by its productId */
    useEffect(() => {
        dispatch(getProductItem(`${productId}`))
    }, [productId]);
    const data = useSelector(s => s.productItem.data)
    const error = useSelector((s) => s.productItem.error);
    const loading = useSelector((s) => s.productItem.loading);
    const productItem = data?.function

    let [productQuantity, setProductQuantity] = useState<number>(1);
    let [cartItem, setCartItem] = useState<{}>();
    // let str = JSON.stringify(cartItem, null, 4);
    // console.log(`the new defualt cartItem is ${str}`);

    //handle product quantity
    const handleProductQuantity = (num: number) => {
        if (num === 1 && productQuantity <= 99 || num === -1 && productQuantity >= 1) {
            setProductQuantity(productQuantity + num);
        }
    }

    /** update cartItem whenever productQuantity or productId changes */
    useEffect(() => {
        setCartItem({
            productId: productItem?.productId,
            productName: productItem?.productName,
            quantity: productQuantity,
            ifChecked: true,
            price: productItem?.price,
            singleItemTotalPrice: productItem?.price * productQuantity,
            image: productItem?.imageSrcList?.categoryImg,
        })
        let str1 = JSON.stringify(cartItem, null, 4);
        console.log(`cartItem is been updated ${str1}`);
    }, [productQuantity, productId, productItem])
    /** dispatch cartItem to store when clicked add to cart */
    const handleAddtoCart = () => {
        if (!jwt) {
            history.push(`/signIn`);
        } else {
            let str2 = JSON.stringify(cartItem, null, 4);
            console.log(`cartItem being add is ${str2}`);
            dispatch(addToCart(cartItem));
            setProductQuantity(0);
        }

    }

    if (loading) {
        return (
            <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        );
    }
    if (error) {
        return <div>网站出错：{error}</div>;
    }
    return (<>
        <MainLayout>
            <div className={styles['product-page']} >
                {/* Item detail section */}
                <div className={styles['product']}>
                    {/* product main section */}
                    <div className={styles['product__main']}>
                        <div className={styles['product__img-container']}>
                            <img src={productItem?.imageSrcList?.productImg} alt={productItem?.productName} />
                        </div>
                        <div className={styles['product__detail']}>
                            {productItem?.ifNew ? (
                                <div className={styles['product__new']}>NEW PRODUCT</div>
                            ) : (null)}
                            <h1 className={styles['product__title']}>{productItem?.productName}</h1>
                            <div className={styles['product__description']}>{productItem?.description}</div>
                            <div className={styles['product__price']}>{`$ ${productItem?.price}`}</div>
                            <div className={styles['product__cart']} >
                                <div className={styles['product__cal']} >
                                    <div className={styles['product__cal__item']} onClick={() => handleProductQuantity(-1)}>-</div>
                                    <div className={styles['product__cal__item']}>{productQuantity}</div>
                                    <div className={styles['product__cal__item']} onClick={() => handleProductQuantity(1)}>+</div>
                                </div>
                                <Button onClick={() => handleAddtoCart()} className={styles['button-primary']} type='primary'>ADD TO CART</Button>
                            </div>
                        </div>
                    </div>

                    {/* prodcut feature and in the box section */}
                    <div className={styles['product__feature-and-inbox']} >
                        <div className={styles['product__features']} >
                            <h1 className={styles['product__features__title']} >Features</h1>
                            {productItem?.features.map(item => {
                                return (
                                    <p>{item}</p>
                                )
                            })}
                        </div>
                        <div className={styles['product__in-the-box']} >
                            <h1 className={styles['product__in-the-box__title']} >In The Box</h1>
                            {productItem?.inTheBox?.map(item => {
                                return (
                                    <div className={styles['product__in-the-box__content']} key={item.productId}>
                                        <span style={{ color: '#D87D4A', marginRight: '10px' }}>{`${item[1]}x`}</span>
                                        <span>{item[0]}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles['product__gallery']} >
                        <div className={styles['product__gallery__left']}>
                            <div className={styles['product__gallery1']}>
                                <img src={productItem?.imageSrcList?.gallery1Img} alt={productItem?.productName} />
                            </div>
                            <div className={styles['product__gallery2']}>
                                <img src={productItem?.imageSrcList?.gallery2Img} alt={productItem?.productName} />
                            </div>
                        </div>
                        <div className={styles['product__gallery3']}>
                            <img src={productItem?.imageSrcList?.gallery3Img} alt={productItem?.productName} />
                        </div>
                    </div>
                </div>
                <MayLikeProducts />
                <Categories />
                <Story />
            </div>
        </MainLayout>

    </>)
}

