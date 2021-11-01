import React, { useEffect } from 'react'
import { Row, Col, Spin } from 'antd'
import styles from './Categories.module.scss'
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { CategoryItem } from './CategoryItem'
import { getCategories } from '../../redux/categories/slice';
import { Link } from 'react-router-dom';


export const Categories: React.FC = () => {

    /**fetch data from store */
    const categories = useSelector(s => s.categoreis.data);
    const error = useSelector(s => s.categoreis.error);
    const loading = useSelector(s => s.categoreis.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories(0))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (error) {
        return <div>{error}</div>
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

    return (<>
        <Row className={styles['category']} gutter={[16, { xs: 32, sm: 64, md: 128, lg: 256 }]}>
            {categories.map((item) => {
                return (
                    <Col key={item.categoryId} className={styles['col']} xs={24} sm={24} md={8} >
                        <Link to={`/categories/${item.categoryId}`}>
                            <CategoryItem categoryId={item.id} title={item.title} imageSrc={item.imageSrc} />
                        </Link>
                    </Col>)
            })}
        </Row>
    </>)
}