import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'antd'
import styles from './Categories.module.scss'

import { CategoryItem } from './CategoryItem'
export const Categories: React.FC = () => {
    const [list, setList] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>()

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const { data }: any = await axios.get(
                    'https://www.fastmock.site/mock/456923cc3f54559b181a0f418788fccc/api/categories'
                )
                setList(data.data);
            } catch (e: any) {
                setError(e.message)
            }
        }
        getData();
    }, [])
    return (<>
        <Row className={styles['category']} gutter={[16, { xs: 32, sm: 64, md: 128, lg: 256 }]}>
            {list.map((item) => {
                return (
                    <Col className={styles['col']} xs={24} sm={24} md={8} >
                        <CategoryItem title={item.title} imageSrc={item.imageSrc} />
                    </Col>)
            })}
        </Row>
    </>)
}