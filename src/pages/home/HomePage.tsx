import React from "react";
import styles from "./HomePage.module.css";
import {
  Header,
  Footer
} from "../../components";
export const HomePage: React.FC = () => {
  return (<>
    <Header />
    <div className={styles['content']}>middle</div>
    <Footer />
  </>)
}