import React from "react";
import styles from './Header.module.scss'
import logo from "../../assets/logo.png";
import { Menu, Dropdown, Button, Layout, Typography, Input } from "antd";


import SubMenu from "antd/lib/menu/SubMenu";

export const Header: React.FC = () => {

  return (
    <div className={styles["app-header"]}>
      <div className={styles["header"]}>
        <img src={logo} alt="logo" />
        <Menu mode='horizontal' className={styles["header__middle"]}>
          <Menu.Item key="Home" title="Adopt" className={styles['item']}>
            HOME
          </Menu.Item>
          <Menu.Item key="HEADPHONES" title="Adopt" className={styles['item']}>
            HEADPHONES
          </Menu.Item>
          <Menu.Item key="SPEAKERS" title="Adopt" className={styles['item']}>
            SPEAKERS
          </Menu.Item>
          <Menu.Item key="EARPHONES" title="Adopt" className={styles['item']}>
            EARPHONES
          </Menu.Item>
        </Menu>
        <div className={styles['header__right']}>
          <Button type='primary' className={styles['button__login']} >Sign In</Button>
          <Button className={styles['button__signup']} >Register</Button>
        </div>
      </div>
    </div>
  );
}





