
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
    cartList:any[],
    cartQuantity:number,
    cartTotalPrice:number,
}
const initialState: cartList ={
    cartList:[],
    cartQuantity:0, 
    cartTotalPrice:0,
}     

export const cartListSlice = createSlice({
    name:'cartList',
    initialState,
    reducers:{
        addToCart(state,action){
            const productId = action.payload?.productId;
            const itemIndex  = state.cartList.findIndex(item => item?.productId === productId);//return the first product index in the array
            if(itemIndex >= 0){// states/cartlist alreayd has that product 
                state.cartList[itemIndex].quantity += action.payload?.quantity; //increase the quantity of that product
            } else{
                state.cartList.push(action.payload);
            }
            // update cartQuantity and cart price;
            state.cartQuantity += action.payload?.quantity;
            state.cartTotalPrice += action.payload.price;
        },
        clearCart(state) {
            state.cartList = [];
            state.cartQuantity=0;
            state.cartTotalPrice = 0;
        }
    }
})
export const { addToCart,clearCart } = cartListSlice.actions