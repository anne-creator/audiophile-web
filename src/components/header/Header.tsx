import React, { useState, useEffect } from "react";
import styles from './Header.module.scss'
import logo from "../../assets/logo.png";
import { Button } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from "../../redux/hooks";
import jwt_decode, { JwtPayload as DefaultJwtPayload } from "jwt-decode";
import { userSlice } from "../../redux/user/slice";
import { useDispatch } from "react-redux";

interface JwtPayload extends DefaultJwtPayload {
  username: string
}

export const Header: React.FC = () => {
  // see if the folded nav nees opened
  const [showLinks, setShowLinks] = useState(false);

  // get jwt token to see if user has logged in
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

  /** Show cart quantity on the header */
  const cartQuantity = useSelector(s => s.cart.cartQuantity)

  return (
    <div className={styles["app-header"]}>
      <div className={styles["header"]}>
        {/* 1.logo */}
        <Link to={'/'} >
          <div className={styles['logo-container']}><img src={logo} alt="logo" /></div>
        </Link>
        {/* 2.nav */}
        <div className={styles['nav']}>
          {/* nav button : for smaller screen size */}
          <div className={styles['nav__category']}>
            <MenuOutlined
              className={styles['nav__button']}
              style={{ fontSize: '16px', color: '#fff' }}
              onClick={() => setShowLinks(!showLinks)}
            />
          </div>
          {/* nav bar:: for large screen size */}
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
            {/* (jwt) ? when signed in : not signed in */}
            {jwt ? (
              <div className={styles["header__right__signin-status"]}>
                <div className={styles['header__right__user-name']}>{`Welcome,  ${username}`}</div>
                <Link to={`/cart`} className={styles['header__right__link']} >
                  <div className={styles['header__right__cart-container']}>
                    <ShoppingCartOutlined className={styles['header__right__cart']} />
                    <div className={styles['header__right__cart-item-container']} >
                      <div className={styles['header__right__cart-item']} >{cartQuantity}</div>
                    </div>
                  </div>
                </Link>
                <Button className={styles['button__sign-out']} type='primary' onClick={onLogout}>Sign Out</Button>
              </div>
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
      {/* nav bar: only interacted in smaller screen size */}
      {
        showLinks ?
          <div className={styles[showLinks ? 'hidden' : '']}>
            <ul  >
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
            </ul>
            {/* (jwt) ? when signed in : not signed in */}
            {(jwt) ? (
              <div className={styles["once-signed-in"]}>
                <div className={styles['user-info']} >
                  <div className={styles['header__right__user-name']}>{`Welcome,  ${username}`}</div>
                  <Link to={`/cart`} className={styles['header__right__link']} >
                    <div className={styles['header__right__cart-container']}>
                      <ShoppingCartOutlined className={styles['header__right__cart']} />
                      <div className={styles['header__right__cart-item-container']} >
                        <div className={styles['header__right__cart-item']} >{cartQuantity}</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <Button className={styles['button__sign-out']} type='primary' onClick={onLogout}>Sign Out</Button>
              </div>
            )
              :
              (
                <div className={styles['once-signed-out']} >
                  <Link to={`signIn`} >
                    <Button type='primary' className={styles['button__login']} >Sign In</Button></Link>
                  <Link to={`register`}>
                    <Button className={styles['button__signup']} >Register</Button></Link>
                </div>
              )
            }
          </div>
          : null
      }
    </div >
  );
}





