import React, { useState, useEffect } from "react";
import styles from './Header.module.scss'
import logo from "../../assets/logo.png";
import { Button } from "antd";
import { MenuOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from "../../redux/hooks";
import jwt_decode, { JwtPayload as DefaultJwtPayload } from "jwt-decode";
import { userSlice } from "../../redux/user/slice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";



interface JwtPayload extends DefaultJwtPayload {
  username: string
}

export const Header: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [username, setUsername] = useState("")

  const jwt = useSelector(s => s.user.token)
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (jwt) {
      const token = jwt_decode<JwtPayload>(jwt)
      setUsername(token.username)
    }
  }, [jwt])
  const onLogout = () => {
    dispatch(userSlice.actions.logOut())
    history.push("/")
  }

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
            {jwt ? (
              <Button.Group className={styles["button-group"]}>
                <span>
                  Welcome,
                  <h1>{username}</h1>
                </span>
                <Button onClick={onLogout}>Sign Out</Button>
              </Button.Group>
            )
              : (
                <Button.Group className={styles["button-group"]}>
                  <Link to={`signIn`}>
                    <Button type='primary' className={styles['button__login']} >Sign In</Button>
                  </Link>
                  <Link to={`register`}>
                    <Button className={styles['button__signup']} >Register</Button>
                  </Link>
                </Button.Group>
              )}

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





