import React from "react";
import styles from "./HomePage.module.scss";
import {
  Header,
  Footer
} from "../../components";
import { Button, Col, Row } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons';
import headphone from '../../assets/shared/image-category-thumbnail-headphones.png';

export const HomePage: React.FC = () => {
  return (<>
    <Header />
    {/* content */}
    <div className={styles['content']}>
      {/* <section className={styles['shop']}>
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col className={styles['col']} xs={24} sm={24} md={8} >
            <div className={styles.item}>
              <div className={styles['item__info']}>
                <div className={styles['item__title']}>HEADPHONES</div>
                <Button className={styles['item__button']} type="text" shape="round" size={'small'}>Shop <SwapRightOutlined /></Button>
              </div>
              <img className={styles['item__img']} src={headphone} alt="headphone" />
            </div>
          </Col>
          <Col className={styles['col']} xs={24} sm={24} md={8} >a</Col>
          <Col className={styles['col']} xs={24} sm={24} md={8} >a</Col>
        </Row>
      </section>
      <section className={styles['recommand']}>b</section> */}
    </div>
    <Footer />
  </>)
}