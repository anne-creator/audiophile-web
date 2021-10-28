import React from 'react';
import styles from "./CategoryPage.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from '../../redux/hooks'
import { MainLayout } from '../../layouts/mainLayout'
import { Product, Categories, Story } from "../../components";
interface MatchParams {
    categoryId: string;
}

export const CategoryPage: React.FC<MatchParams> = (props) => {
    const categories = useSelector(s => s.categoreis.data);
    const productList = useSelector(s => s.productList.data);
    const { categoryId }: any = useParams();
    const item = categories[categoryId - 1];
    console.log(productList);

    const products = productList.filter(item => item.categoryId == categoryId)
    return (
        <>
            <MainLayout>
                <div className={styles['category']}>
                    <h1 className={styles['category__title']}>{item.title}</h1>
                    {products.map(item => {
                        return (
                            <Product productName={item.productName} ifNew={item.ifNew} description={item.description} productImg={item.productImg} />
                        )
                    })}
                    <Categories />
                    <Story />
                </div>
            </MainLayout>
        </>

    )
}