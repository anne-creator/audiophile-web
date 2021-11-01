import React, { useEffect } from 'react';
import styles from './ProductPage.module.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../redux/hooks'
import { useDispatch } from "react-redux";
import { getProductItem } from '../../redux/productItem/slice';
import { getProductPromote } from '../../redux/productPromote/slice';
import { Categories, Story, MayLikeProducts } from '../../components'
import { MainLayout } from '../../layouts/mainLayout'
import { Button, Spin } from 'antd'
interface PropsType {
    productId: string;
}

export const ProductPage: React.FC<PropsType> = (props) => {
    const { productId } = useParams<PropsType>();
    const dispatch = useDispatch();
    /** Get product by its productid */
    useEffect(() => {
        dispatch(getProductItem(`${productId}`))
        // dispatch(getProductPromote({}))
    }, []);
    const data = useSelector(s => s.productItem.data)
    const error = useSelector((s) => s.productItem.error);
    const loading = useSelector((s) => s.productItem.loading);

    // const productPromote = (s => s.productPromote.data)
    const productItem = data?.function


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
                                    <div className={styles['product__cal__item']}>-</div>
                                    <div className={styles['product__cal__item']}>1</div>
                                    <div className={styles['product__cal__item']}>+</div>
                                </div>
                                <Button className={styles['button-primary']} type='primary'>ADD To CART</Button>
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
                                    <div className={styles['product__in-the-box__content']} >
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

