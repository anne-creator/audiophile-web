import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import styles from './Categories.module.scss'
import { RootState } from "../../redux/store";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { CategoryItem } from './CategoryItem'
import { giveMeDataActionCreator } from '../../redux/categories/categoriesActions';

export const Categories: React.FC = () => {

    /**fetch data from store */
    const itemList = useSelector(s => s.categoreis.itemList);
    const error = useSelector(s => s.categoreis.error);
    const loading = useSelector(s => s.categoreis.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = () => { dispatch(giveMeDataActionCreator()) }
        fetchData();
    }, [])
    return (<>
        <Row className={styles['category']} gutter={[16, { xs: 32, sm: 64, md: 128, lg: 256 }]}>
            {itemList.map((item) => {
                return (
                    <Col className={styles['col']} xs={24} sm={24} md={8} >
                        <CategoryItem title={item.title} imageSrc={item.imageSrc} />
                    </Col>)
            })}
        </Row>
    </>)
}