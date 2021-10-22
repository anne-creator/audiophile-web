import React, { useEffect } from 'react'
import { Row, Col, Spin } from 'antd'
import styles from './Categories.module.scss'
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { CategoryItem } from './CategoryItem'
import { getCategories } from '../../redux/categories/slice'
export const Categories: React.FC = () => {

    /**fetch data from store */
    const categories = useSelector(s => s.categoreis.data);
    const error = useSelector(s => s.categoreis.error);
    const loading = useSelector(s => s.categoreis.loading);
    // console.log(categories);
    // console.log(error);
    // console.log(loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories({}))
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
                    <Col key={item.id} className={styles['col']} xs={24} sm={24} md={8} >
                        <CategoryItem title={item.title} imageSrc={item.imageSrc} />
                    </Col>)
            })}
        </Row>
    </>)
}