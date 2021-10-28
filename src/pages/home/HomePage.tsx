import React from "react";
import {
  Categories,
  RecommandProducts
} from "../../components";
import { MainLayout } from '../../layouts/mainLayout';

export const HomePage: React.FC = () => {
  return (<>
    <div >
      <MainLayout>
        <Categories />
        <RecommandProducts />
      </MainLayout>
    </div >

  </>)
}