import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import {
  Header,
  Footer
} from "../../components";
import { Spin, Col, Row } from 'antd';
import { Card } from '../../components';
import axios from 'axios'
// import { useDispatch } from "react-redux";
// import { getCategories } from '../../redux/categories/slice';
// import { useSelector } from "../../redux/hooks";

interface Props { }
interface State {
  name: string,
  ImageSrc: string,
}

export const HomePage: React.FC = (Props) => {
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
  // const loading = useSelector((state) => state.categories.loading);
  // const error = useSelector((state) => state.categories.error);
  // const categoriesLists = useSelector(s => s.categories.data)
  // const dispatch = useDispatch();
  /** Get category API from store*/
  // useEffect(() => {
  //   dispatch(getCategories())
  // }, [])
  // if (loading) {
  //   return (
  //     <Spin
  //       size="large"
  //       style={{
  //         marginTop: 200,
  //         marginBottom: 200,
  //         marginLeft: "auto",
  //         marginRight: "auto",
  //         width: "100%",
  //       }}
  //     />
  //   );
  // }
  // if (error) {
  //   return <div>网站出错：{error}</div>;
  // }
  return (<>
    <Header />
    {/* content */}
    <div className={styles['content']}>
      <section className={styles['shop']}>
        <Row gutter={[16, { xs: 32, sm: 64, md: 128, lg: 256 }]}>
          {list.map((item) => {
            return (
              <Col className={styles['col']} xs={24} sm={24} md={8} >
                <Card title={item.title} imageSrc={item.imageSrc} />
              </Col>)
          })}
        </Row>
      </section>
      <section className={styles['recommand']}>b</section>
    </div>
    <Footer />
  </>)
}