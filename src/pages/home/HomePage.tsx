import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import {
  Header,
  Footer
} from "../../components";
import { Spin, Col, Row } from 'antd';
import { Categories } from '../../components';
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

  return (<>
    <Header />
    {/* content */}
    <div className={styles['content']}>
      <section className={styles['shop']}>
        <Categories />
      </section>
      <section className={styles['recommand']}>b</section>
    </div>
    <Footer />
  </>)
}