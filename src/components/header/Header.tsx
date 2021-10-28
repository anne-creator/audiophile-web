import React, { useState } from "react";
import styles from './Header.module.scss'
import logo from "../../assets/logo.png";
import { Button } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export const Header: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  // const history = useHistory();
  return (
    <div className={styles["app-header"]}>
      <div className={styles["header"]}>
        {/* 1.logo */}
        <div className={styles['logo-container']}><img src={logo} alt="logo" /></div>
        {/* 2.nav */}
        <div className={styles['nav']}>
          {/* nav button */}
          <div className={styles['nav__category']}>
            <MenuOutlined
              className={styles['nav__button']}
              style={{ fontSize: '16px', color: '#fff' }}
              onClick={() => setShowLinks(!showLinks)}
            />
          </div>
          {/* nav bar */}
          <ul className={styles["nav__items"]}>
            <li className={styles['item']}>
              HOME
            </li>
            <li className={styles['item']}>
              HEADPHONES
            </li>
            <li className={styles['item']}>
              SPEAKERS
            </li>
            <li className={styles['item']}>
              EARPHONES
            </li>
          </ul>
        </div>
        {/* 3.right */}
        <div>
          <div className={styles['header__right']}>
            <Link to={`signIn`}>
              <Button type='primary' className={styles['button__login']} >Sign In</Button>
            </Link>
            <Link to={`register`}>
              <Button className={styles['button__signup']} >Register</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* nav bar */}
      {
        showLinks ?
          <div>
            <div className={styles[showLinks ? 'hidden' : '']} >
              <div className={styles['item']}>
                HOME
              </div>
              <div className={styles['item']}>
                HEADPHONES
              </div>
              <div className={styles['item']}>
                SPEAKERS
              </div>
              <div className={styles['item']}>
                EARPHONES
              </div>
              <div className={styles['item']}>
                <Link to={`signIn`} >
                  <Button type='primary' className={styles['button__login']} >Sign In</Button></Link>
              </div>
              <div className={styles['item']}>
                <Link to={`register`}>
                  <Button className={styles['button__signup']} >Register</Button></Link>
              </div>
            </div>
          </div>
          : null
      }
    </div >
  );
}





