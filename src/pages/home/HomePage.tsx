import React from "react";
import styles from "./HomePage.module.scss";
import {
  Header,
  Footer
} from "../../components";
import { Categories } from '../../components';

export const HomePage: React.FC = () => {
  return (<>
    <Header />
    {/* content */}
    <div className={styles['content']}>
      <section className={styles['shop']}>
        <Categories />
      </section>
    </div>
    <Footer />
  </>)
}