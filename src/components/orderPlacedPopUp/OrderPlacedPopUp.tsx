
import React from 'react'
import styles from './OrderPlacedPopUp.module.scss'
import { useSelector } from '../../redux/hooks'
import { MainLayout } from '../../layouts/mainLayout'
import { Button } from 'antd'
import { useLocation } from 'react-router-dom';

export const OrderPlacedPopUp: React.FC = () => {
    return (<>
        <div className='popup'>
            <div className='popup_inner'>
                the pop up window
            </div>
        </div>
    </>)
}
