import React from "react";
import styles from "./UserLayout.module.scss";
import logo from "../../assets/logo.png";
import { Layout } from "antd";
import { Link } from 'react-router-dom'

export const UserLayout: React.FC = ({ children }) => {
  return (
    <Layout className={styles["user-layout-container"]}>
      <div className={styles["content__container"]}>
        <div className={styles["header"]}>
          <Link to="/">
            <img alt="logo" className={styles["logo"]} src={logo} />
            <div className={styles["content__des"]}>
              AudioPhile,fulfill your audio needs.
            </div>
          </Link>
        </div>
        <div className={styles['content']} >
          {children}
        </div>
      </div>
    </Layout>
  );
};
