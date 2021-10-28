import React from "react";
import {
  Categories,
  RecommandProducts
} from "../../components";
import { MainLayout } from '../../layouts/mainLayout';
import styles from './HomePage.module.scss'

export const HomePage: React.FC = () => {
  return (<>
    <div >
      <MainLayout>
        <div className={styles['shop']}>
          <Categories />
          <RecommandProducts />
        </div>
      </MainLayout>
    </div >

  </>)
}