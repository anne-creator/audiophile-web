import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png"
import fb from "../../assets/fb.png"
import twitter from "../../assets/twitter.png"
import ins from "../../assets/ins.png"
import { useSelector } from '../../redux/hooks'
import { useDispatch } from "react-redux";
import { getProductPromote } from '../../redux/productPromote/slice'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {

   return (<>
      <div className={styles.footer}>
         <div className={styles.content}>
            <div className={styles['content__left']}>
               <div className={styles['content__left__img']}>
                  <img className={styles['content__left__']} src={logo} alt="logo" />
               </div>
               <p className={styles['content__left__description']}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
               <p className={styles['content__left__copyright']}>Copyright 2021. All Rights Reserved</p>
            </div>
            <div className={styles['content__right']}>
               <div className={styles['content__right__nav']}>
                  <Link to={'/'} className={styles['item']} >
                     <span>HOME</span>
                  </Link>
                  <Link to={'/categories/1'} className={styles['item']}>
                     <span>HEADPHONES</span>
                  </Link>
                  <Link to={'/categories/2'} className={styles['item']}>
                     <span>SPEAKERS</span>
                  </Link>
                  <Link to={'/categories/3'} className={styles['item']}>
                     <span>EARPHONES</span>
                  </Link>
               </div>
               <div className={styles['content__right__social']}>
                  <img className={styles['social-icon']} src={fb} alt="fb" />
                  <img className={styles['social-icon']} src={ins} alt="ins" />
                  <img className={styles['social-icon']} src={twitter} alt="twitter" />
               </div>
            </div>
         </div>
      </div>
   </>)
}