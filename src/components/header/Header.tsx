// import React from "react";
// import styles from "./Header.module.scss";
// import logo from "../../assets/logo.png";
// import { Menu, Button, Layout } from "antd";
// // import { GlobalOutlined } from "@ant-design/icons";


// export const Header: React.FC = () => {
//   return (<>
//     {/* left logo */}
//     <Layout.Header className={styles.header} >
//       <img src={logo} alt="logo" className={styles.logo} />
//       {/* middle nav*/}
//       <Menu className={styles.nav} mode="horizontal">
//         <Menu.Item key="mail" className={styles['nav__item']} >
//           <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//             mail
//           </a>
//         </Menu.Item>
//         <Menu.Item key="app" className={styles['nav__item']} >
//           <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//             app
//           </a>
//         </Menu.Item >
//         <Menu.Item key="alipay" className={styles['nav__item']}>
//           <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//             alipay
//           </a>
//         </Menu.Item>
//       </Menu>
//       {/* right */}
//       <div className={styles['header__right']}>
//         <Button type='primary' className={styles['button__login']} >Sign In</Button>
//         <Button className={styles['button__signup']} >Register</Button>
//       </div>
//     </Layout.Header>
//   </>)
// }
// // class component and fully explain
// import React from 'react';
// import styles from './Header.module.scss'
// import logo from '../../assets/logo.svg';
// import { GlobalOutlined } from "@ant-design/icons";
// import { Menu, Dropdown, Button } from "antd";
// import { withRouter, RouteComponentProps } from 'react-router-dom'
// import { RootState } from '../../redux/store'
// // import { LanuageState } from '../../redux/language/languageReducer'
// import SubMenu from 'antd/lib/menu/SubMenu';
// import { connect } from 'react-redux'
// import { Dispatch } from "redux";// redex中引入Dispatch类型定义。大写的都是类型定义
// import { withTranslation, WithTranslation } from 'react-i18next';
// import {
//   addLanguageActionCreator,
//   changeLanguageActionCreator,
// } from "../../redux/language/languageActions";

// // for init state interface， noneede:  interface state extends LanuageState { }

// // 数据流入 // mapStateToProps: 接受从store传递的state
// // return 需要从state中取得的数据 
// // 给state增加类型，增加联想功能
// // withTranslation i18n的props类型：语言切换用的，暂时用不上。
// const mapStateToProps = (state: RootState) => {
//   return {
//     language: state.language.language,
//     languageList: state.language.languageList,
//   }
// }
// // 数据流出：mapDispatchToProps: // 参数：store 中的 dispatch 函数方法
// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     changeLanguage: (code: "zh" | "en") => {
//       const action = changeLanguageActionCreator(code);
//       dispatch(action);
//     },
//     addLanguage: (name: string, code: string) => {
//       const action = addLanguageActionCreator(name, code);
//       dispatch(action);
//     },
//   }
// }//路由props类型 & hooks 类型定义 & redux-store的类型
// type PropsType = RouteComponentProps & WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
// class HeaderComponent extends React.Component<PropsType> {
//   // 删除store的订阅处理函数
//   // handleStoreChange = () => {
//   //   const storeState = store.getState();
//   //   this.setState({
//   //     language: storeState.language,
//   //     languageList: storeState.languageList,
//   //   })
//   // }

//   render() {
//     // NOTE: t is from withTranslation from i18n
//     const { history, t } = this.props;
//     return (
//       <div className={styles["app-header"]}>
//         {/* top-header */}
//         <div className={styles.header} >
//           <div className={styles["header__left"]}>
//             <span onClick={() => history.push('/')} className={styles["header__logo"]}>
//               <img src={logo} alt="logo" className={styles["header__logo__img"]} />
//               <h1 className={styles["header__logo__title"]}>Paws Up</h1>
//             </span>
//             <h4 className={styles["header__how"]}>How it works</h4>
//           </div>
//           <Menu mode='horizontal' className={styles["header__middle"]}>
//             {/* FIXME: Menu & SubMenu增加路由跳转 */}
//             <Menu.Item key="Adopt" title="Adopt" className={styles['item']} onClick={() => history.push("/adopt")}>
//               Adopt
//               {/* <Menu.Item key="Cat" className={styles['nav']}   >
//                 Cat
//               </Menu.Item>
//               <Menu.Item key="Dog" className={styles['item']}>
//                 Dog
//               </Menu.Item > */}
//             </Menu.Item>
//             <SubMenu key="Donate" title="Donate" className={styles['nav']}>
//               <Menu.Item key="Food" className={styles['item']}>
//                 Food
//               </Menu.Item>
//               <Menu.Item key="Toys" className={styles['item']}>
//                 Toys
//               </Menu.Item >
//               <Menu.Item key="Supplies" className={styles['item']}>
//                 Supplies
//               </Menu.Item >
//             </SubMenu>
//             <SubMenu key="Health-Care" title="Health Care" className={styles['nav']}>
//               <Menu.Item key="Check" className={styles['item']}>
//                 Regular Check
//               </Menu.Item>
//               <Menu.Item key="Neurtered" className={styles['item']}>
//                 Neurtered/Chips
//               </Menu.Item >
//               <Menu.Item key="Grooming" className={styles['item']}>
//                 Grooming
//               </Menu.Item >
//               <Menu.Item key="Medical" className={styles['item']}>
//                 Sick Pets Medical
//               </Menu.Item >
//             </SubMenu>
//           </Menu>
//           <div className={styles['header__right']}>

//             {/* 非项目 */}
// <Dropdown.Button
//   style={{ marginLeft: 15 }}
//   overlay={
//     <Menu onClick={this.menuClickHandler}>
//       {this.props.languageList.map((l: any) => {
//         return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
//       })}
//     </Menu>
//   }
//   icon={<GlobalOutlined />}
// >
//   {/* change from this.state to this.props as we no longer init the state but inject the state with connect using mapStateToProps */}
//   {this.props.language === "zh" ? "中文" : "English"}
// </Dropdown.Button>

//             <Button type='primary' className={styles['button__login']} onClick={() => history.push("register")}>Sign In</Button>
//             <Button className={styles['button__signup']} onClick={() => history.push("signIn")}>Register</Button>
//           </div>
//         </div>
//         <Menu mode={"horizontal"} className={styles["main-menu"]}>
//           <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
//           <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
//           <Menu.Item key="3"> {t("header.group")} </Menu.Item>
//           <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
//           <Menu.Item key="5"> {t("header.private")} </Menu.Item>
//           <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
//           <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
//           <Menu.Item key="8"> {t("header.local")} </Menu.Item>
//           <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
//           <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
//           <Menu.Item key="11"> {t("header.study")} </Menu.Item>
//           <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
//           <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
//           <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
//           <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
//           <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
//         </Menu>
//       </div >
//     );
//   }
//   menuClickHandler = (e: any) => {
//     if (e.key === 'new') {
//       // const action = addLanguageActionCreator('新语言', 'new_lang')
//       // store.dispatch(action);
//       this.props.addLanguage('新语言', 'new_lang')
//     } else {
//       this.props.changeLanguage(e.key)
//     }
//   };



// }
// // NOTE: connect function: connet(mapStateToProps,mapDispatchToProps)(componentItself),连接对象

// // inject state into the componnet using connect
// export const HeaderClass = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(HeaderComponent)))//两个括号叠加在一起：

//NOTE: function component.
import React from "react";
import styles from './Header.module.scss'
import logo from "../../assets/logo.png";
import { Menu, Dropdown, Button, Layout, Typography, Input } from "antd";


import SubMenu from "antd/lib/menu/SubMenu";

export const Header: React.FC = () => {

  return (
    <div className={styles["app-header"]}>
      <div className={styles["header"]}>
        {/* top-header */}
        <img src={logo} alt="logo" />
        <Menu mode='horizontal' className={styles["header__middle"]}>
          {/* FIXME: Menu & SubMenu增加路由跳转 */}
          <Menu.Item key="Home" title="Adopt" className={styles['item']}>
            Home
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





