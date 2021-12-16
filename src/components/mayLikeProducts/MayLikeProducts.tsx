import React, { useEffect } from 'react'
import styles from './MayLikeProducts.module.scss'
import { MayLikeProductItem } from './MayLikeProductItem'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from "react-redux";
import { getProductPromote } from '../../redux/productPromote/slice'

export const MayLikeProducts: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductPromote({}));
        // eslint-disable-next-line
    }, []);
    const productList = useSelector(s => s.productPromote.data);

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //max excluded
    }

    /** get 4 randome unreplicated index */
    let randomItemIndex: number[] = [];
    const randomeIndexList = (num: number) => {
        const productListLength = productList.length;
        const indexArray = Array.from(Array(productListLength).keys())//create an array from 0 to productListLength (productListLength not included)

        /** if the length of productList is less than 4, return an array from 0 to productListLength,
         *  else: return an array with 4 random unreplicated number chose from a array from 0 to productListLength 
         *  to genferate frou random unreplicated items from productList.
        */
        if (productListLength <= num) {
            return Array.from(Array(productListLength).keys())
        } else {
            let end = productListLength - 1
            for (let i = 0; i < num; i++) {
                const random: number = getRandomInt(0, end + 1)//choose a random int from [0,end] (inclusive)
                randomItemIndex[i] = indexArray[random];
                indexArray[random] = indexArray[end] //include the end number in the array and exclued the end number to choose from
                end--
            }
        }
    }
    randomeIndexList(4);
    // console.log(productList);
    // console.log(randomItemIndex[0]);
    // console.log(randomItemIndex);

    return (
        <div className={styles['may-like-products']}>
            <h1 className={styles['may-like-products__title']} >You May Also Like</h1>
            <div className={styles['may-like-products__grid']}>
                {randomItemIndex.map(item => {
                    return (
                        <MayLikeProductItem productImgSrc={productList[item]?.imageSrcList?.productImg} productName={productList[item]?.productName} />
                    )
                })}
            </div>
        </div>
    )
}