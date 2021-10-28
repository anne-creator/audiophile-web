import React, { useEffect } from 'react';
import { Col, Row, Button } from 'antd'
import styles from './RecommandProducts.module.scss'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from "react-redux";
import { getProductList } from '../../redux/productList/slice'

export const RecommandProducts: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductList({}));
    }, []);
    const productList = useSelector(s => s.productList.data);
    return (<>
        <div>
            <Row className={styles['ZX9']} >
                <Col xs={24} sm={24} md={24} lg={12}>
                    <div className={styles['ZX9__left']}>
                        <img className={styles['ZX9__img']} src={productList[3]?.imageSrcList?.recommand} alt="ZX9 product" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <div className={styles['ZX9__right']}>
                        <div className={styles['ZX9__detail']}>
                            {productList[3]?.ifNew ? (
                                <div className={styles['ZX9__detail__new']}>NEW PRODUCT</div>
                            ) : (null)}
                            <h1 className={styles['ZX9__detail__title']}>ZX9<br />SPEAKER</h1>
                            <div className={styles['ZX9__detail__description']}>{productList[3]?.description}</div>
                            <Button className={styles['button-primary']} type='primary'>SEE PRODUCT</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={styles['ZX7']}>
                <Col className={styles['ZX7__left']}>
                    <div className={styles['ZX7__detail']}>
                        {productList[4]?.ifNew ? (
                            <div className={styles['ZX9__detail__new']}>NEW PRODUCT</div>
                        ) : (null)}
                        <h1>ZX7 SPEAKER</h1>
                        <Button className={styles['button__secondary']}>SEE PRODUCT</Button>
                    </div>
                </Col>
                <img className={styles['ZX7__img']} src={productList[4]?.imageSrcList?.recommand} alt="ZX9 product" />
            </Row>
            <div className={styles['YX1']}>
                <div className={styles['YX1__left']} >
                    <img className={styles['YX1__img']} src={productList[5]?.imageSrcList?.recommand} alt="ZX9 product" />
                </div>
                <div className={styles['YX1__right']}>
                    <div className={styles['YX1__detail']}>
                        {productList[5]?.ifNew ? (
                            <div className={styles['ZX9__detail__new']}>NEW PRODUCT</div>
                        ) : (null)}
                        <h1>ZX7 SPEAKER</h1>
                        <Button className={styles['button__secondary']}>SEE PRODUCT</Button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}