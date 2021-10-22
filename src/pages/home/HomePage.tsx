import React from "react";
import styles from "./HomePage.module.scss";
import {
  Categories,
  RecommandProducts
} from "../../components";
import { MainLayout } from '../../layouts/mainLayout';

export const HomePage: React.FC = () => {
  return (<>
    <MainLayout>
      <Categories />
      <RecommandProducts />
    </MainLayout>

  </>)
}