
/** ShoppingList redux stores product items in the cart within the shoppingList object
 *  ShoppingList structure:
 *      const shoppingList = { 
         ProductId: 1,
         ProductName: 'ZZxx 99'
         quantity:
         price:
         singleItemTotalPrice:
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
                state.cartList[itemIndex].singleItemTotalPrice += action.payload?.singleItemTotalPrice;

            } else{
                state.cartList.push(action.payload);
            }
            // update cartQuantity and cart price;
            state.cartQuantity += action.payload?.quantity;
            state.cartTotalPrice += action.payload?.singleItemTotalPrice;
        },
        clearCart(state) {
            state.cartList = [];
            state.cartQuantity=0;
            state.cartTotalPrice = 0;
        },
        changeProductQuantity(state,action){
            const productId = action.payload?.productId;
            const itemIndex  = state.cartList.findIndex(item => item?.productId === productId);//find the item in the state
            state.cartList[itemIndex].quantity += action.payload?.num;
            // mind the changing order below.
            state.cartList[itemIndex].singleItemtotalPrice += action.payload?.num * action.payload?.price;
            state.cartQuantity += action.payload?.num; 
            state.cartTotalPrice += action.payload?.num * action.payload?.price;
        },
        removeItem(state,action){
            const productId = action.payload?.productId;
            const itemIndex  = state.cartList.findIndex(item => item?.productId === productId);//find the item in the state

            state.cartQuantity -= state.cartList[itemIndex].quantity
            state.cartTotalPrice -= state.cartList[itemIndex].singleItemTotalPrice;
            state.cartList.splice(itemIndex,1);

        }
    }
})
export const { addToCart,clearCart,changeProductQuantity,removeItem } = cartListSlice.actions