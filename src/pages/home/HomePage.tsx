import React from "react";
import styles from "./HomePage.module.scss";
import {
  Header,
  Footer
} from "../../components";
import { Button, Col, Row } from 'antd';
import { Card } from '../../components'


export const HomePage: React.FC = () => {
  return (<>
    <Header />
    {/* content */}
    <div className={styles['content']}>
      <section className={styles['shop']}>
        <Row gutter={[16, { xs: 32, sm: 64, md: 128, lg: 256 }]}>
          <Col className={styles['col']} xs={24} sm={24} md={8}>
            <Card />
          </Col>
          <Col className={styles['col']} xs={24} sm={24} md={8} >
            <Card />
          </Col>
          <Col className={styles['col']} xs={24} sm={24} md={8} >
            <Card />
          </Col>
        </Row>
      </section>
      <section className={styles['recommand']}>
        <div className={styles.speaker}>
          <img></img>
          <div className={styles['speaker__detail']}>
            <div className={styles['speaker__detail__title']}>ZX9
              SPEAKER</div>
            <div className={styles['speaker__detail__subtitle']}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</div>
            <Button type="primary">SEE PRODUCT</Button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>)
}