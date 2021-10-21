import React from "react";
import styles from "./MainLayout.module.css";
import { Header, Footer } from "../../components";

// NOTE: children 是每一个组件自带属性
export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {/* 页面内容 content, 通过children传递页面参数*/}
      <div className={styles["content"]}>{children}</div>
      <Footer />
    </>
  );
};
