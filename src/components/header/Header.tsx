import React, { useState } from "react";
import styles from './Header.module.scss'
import logo from "../../assets/logo.png";
import { Button } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import { useSelector } from '../../redux/hooks'
import { useDispatch } from "react-redux";
import { getProductPromote } from '../../redux/productPromote/slice'
import { Link } from 'react-router-dom';


export const Header: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const productPromote = useSelector(s => s.productPromote.data);
  return (
    <div className={styles["app-header"]}>
      <div className={styles["header"]}>
        {/* 1.logo */}
        <Link to={'/'} >
          <div className={styles['logo-container']}><img src={logo} alt="logo" /></div>
        </Link>
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
            <Link to={'/'} >
              <li className={styles['item']}>
                HOME
              </li>
            </Link>
            <Link to={'/categories/1'}>
              <li className={styles['item']}>
                HEADPHONES
              </li>
            </Link>
            <Link to={'/categories/2'}>
              <li className={styles['item']}>
                SPEAKERS
              </li>
            </Link>
            <Link to={'/categories/3'}>
              <li className={styles['item']}>
                EARPHONES
              </li>
            </Link>
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
            <ul className={styles[showLinks ? 'hidden' : '']} >
              <Link to={'/'} >
                <li className={styles['item']}>
                  HOME
                </li>
              </Link>
              <Link to={'/categories/1'}>
                <li className={styles['item']}>
                  HEADPHONES
                </li>
              </Link>
              <Link to={'/categories/1'}>
                <li className={styles['item']}>
                  SPEAKERS
                </li>
              </Link>
              <Link to={'/categories/1'}>
                <li className={styles['item']}>
                  EARPHONES
                </li>
              </Link>
              <li >
                <Link to={`signIn`} >
                  <Button type='primary' className={styles['button__login']} >Sign In</Button></Link>
              </li>
              <li >
                <Link to={`register`}>
                  <Button className={styles['button__signup']} >Register</Button></Link>
              </li>
            </ul>
          </div>
          : null
      }
    </div >
  );
}





