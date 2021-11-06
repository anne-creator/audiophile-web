import React, { useEffect } from 'react';
import styles from "./CategoryPage.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from '../../redux/hooks'
import { MainLayout } from '../../layouts/mainLayout'
import { Product, Categories, Story } from "../../components";
import { useDispatch } from "react-redux";
import { getProductPromote } from '../../redux/productPromote/slice'
interface MatchParams {
    categoryId: string;
}
export const CategoryPage: React.FC<MatchParams> = (props) => {
    const categories = useSelector(s => s.categoreis.data);
    const productList = useSelector(s => s.productPromote.data);
    const { categoryId }: any = useParams();
    const item = categories[categoryId - 1];
    const dispatch = useDispatch();

    /** Get all product and filted it with categoryID */
    useEffect(() => {
        dispatch(getProductPromote({}));
    }, []);
    const products = productList.filter(item => item.categoryId == categoryId)
    return (
        <>
            <MainLayout>
                <h1 className={styles['title']}>{item.title}</h1>
                <div className={styles['category']}>
                    {products.map(item => {
                        return (
                            <Product productId={item?.productId} productName={item?.productName} ifNew={item?.ifNew} description={item?.description} productImg={item?.imageSrcList?.productImg} />
                        )
                    })}
                    <Categories />
                    <Story />
                </div>
            </MainLayout>
        </>

    )
}