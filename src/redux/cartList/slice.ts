
/** ShoppingList redux stores product items in the cart within the shoppingList object
 *  ShoppingList structure:
 *      const shoppingList = { 
         ProductId: 1,
         ProductName: 'ZZxx 99'
         quantity:
         price:
         singleItemtotalPrice:
       }
    ]
*/
import { createSlice } from '@reduxjs/toolkit'

interface cartList {
    cartList:any[];
}
const initialState: cartList ={
    cartList:[]
}     

export const cartListSlice = createSlice({
    name:'cartList',
    initialState,
    reducers:{
        addToCart(state,action){
            const productId = action.payload?.productId;
            const itemIndex  = state.cartList.findIndex(item => item?.productId === productId);//return the first product index in the array
            if(itemIndex >= 0){// states/cartlist alreayd has that product 
                console.log(itemIndex);
                console.log(state.cartList[itemIndex].quantity);
                console.log(action.payload?.quantity);
                state.cartList[itemIndex].quantity += action.payload?.quantity; //increase the quantity of that product
            } else{
                state.cartList.push(action.payload);
            }


        }
    }
})

export const { addToCart } = cartListSlice.actions