import React, { useEffect } from 'react';
import { Col, Row, Button } from 'antd'
import styles from './RecommandProducts.module.scss'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from "react-redux";
import { getProductPromote } from '../../redux/productPromote/slice'
import { Link } from 'react-router-dom'

export const RecommandProducts: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductPromote({}));
        // eslint-disable-next-line
    }, []);
    const productPromote = useSelector(s => s.productPromote.data);
    return (<>
        <div>
            <div className={styles['ZX9']} >
                <div>
                    <div className={styles['ZX9__left']}>
                        <img className={styles['ZX9__img']} src={productPromote[3]?.imageSrcList?.recommand} alt="ZX9 product" />
                    </div>
                </div>
                <div>
                    <div className={styles['ZX9__right']}>
                        <div className={styles['ZX9__detail']}>
                            {productPromote[3]?.ifNew ? (
                                <div className={styles['ZX9__detail__new']}>NEW PRODUCT</div>
                            ) : (null)}
                            <h1 className={styles['ZX9__detail__title']}>ZX9<br />SPEAKER</h1>
                            <div className={styles['ZX9__detail__description']}>{productPromote[3]?.description}</div>
                            <Link to={'/productItem/4'}>
                                <Button className={styles['button-primary']} type='primary'>SEE PRODUCT</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Row className={styles['ZX7']}>
                <Col className={styles['ZX7__left']}>
                    <div className={styles['ZX7__detail']}>
                        {productPromote[4]?.ifNew ? (
                            <div className={styles['ZX9__detail__new']}>NEW PRODUCT</div>
                        ) : (null)}
                        <h1>ZX7 SPEAKER</h1>
                        <Link to={'/productItem/5'}>
                            <Button className={styles['button__secondary']}>SEE PRODUCT</Button>
                        </Link>
                    </div>
                </Col>
                <img className={styles['ZX7__img']} src={productPromote[4]?.imageSrcList?.recommand} alt="ZX9 product" />
            </Row>
            <div className={styles['YX1']}>
                <div className={styles['YX1__left']} >
                    <img className={styles['YX1__img']} src={productPromote[5]?.imageSrcList?.recommand} alt="ZX9 product" />
                </div>
                <div className={styles['YX1__right']}>
                    <div className={styles['YX1__detail']}>
                        {productPromote[5]?.ifNew ? (
                            <div className={styles['ZX9__detail__new']}>NEW PRODUCT</div>
                        ) : (null)}
                        <h1>ZX7 SPEAKER</h1>
                        <Link to={'/productItem/6'}>
                            <Button className={styles['button__secondary']}>SEE PRODUCT</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}