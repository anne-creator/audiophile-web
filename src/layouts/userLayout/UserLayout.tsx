import React from "react";
import styles from "./UserLayout.module.css";
import logo from "../../assets/logo.svg";
import { Layout } from "antd";
const { Content } = Layout;

export const UserLayout: React.FC = ({ children }) => {
  return (
    <Layout className={styles["user-layout-container"]}>
      <Content className={styles["content"]}>
        {children}
      </Content>
    </Layout>
  );
};
