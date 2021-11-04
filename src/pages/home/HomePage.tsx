import React from "react";
import {
  Categories,
  RecommandProducts
} from "../../components";
import { MainLayout } from '../../layouts/mainLayout';
import styles from './HomePage.module.scss'
import { Button, Row, Col } from 'antd'
import hero from '../../assets/hero.png'
import { Link } from 'react-router-dom'

export const HomePage: React.FC = () => {
  return (<>
    <div className={styles['homePage']} >
      <MainLayout>
        <Row className={styles['hero']} align="middle" justify="space-around">
          <Col xs={24} sm={24} md={24} lg={10} className={styles['hero__detail__container']} >
            <div className={styles['hero__detail']} >
              <div className={styles['hero__detail__new']}>NEW PRODUCT</div>
              <div className={styles['hero__detail__title']}>XX99 MARK II HEADPHONES</div>
              <div className={styles['hero__detail__des']}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</div>
              <Link to={`/productItem/1`}>
                <Button className={styles['button-primary']} type='primary'>SEE PRODUCT</Button>
              </Link>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={14}  >
            <div className={styles['hero__img-container']} >
              <img src={hero} alt="XX99" className={styles['hero__img']} />
            </div>
          </Col>
        </Row>
        <div className={styles['shop']}>
          <Categories />
          <RecommandProducts />
        </div>
      </MainLayout>
    </div >
  </>)
}