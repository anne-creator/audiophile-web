import styles from './Product.module.scss'
import * as React from 'react';

interface PropsType {
    productName: string;
    ifNew: boolean;
    description: string;
    productImg: string;
}

export const Product: React.FC<PropsType> = ({ productName, ifNew, description, productImg }) => {
    return (
        <>
            <div>this is one product Item {productName}</div>
        </>
    );
}