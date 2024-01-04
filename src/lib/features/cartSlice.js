const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cart:[],
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find((item) => item.id === newItem.id)
            if(existingItem){
                existingItem.quantity += 1;
            } else {
                state.cart.push({...newItem, quantity:1})
            }
        },

        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.cart = state.cart.filter((item) => item.id !== itemId)
        },

        incrementQuantity: (state, action) => {
            const itemId = action.payload;
            const selectedProduct = state.cart.find((item) => item.id === itemId)
            if(selectedProduct) {
                selectedProduct.quantity += 1;
            }
        },

        decrementQuantity: (state, action) => {
            const itemId = action.payload;
            const selectedProduct = state.cart.find((item) => item.id === itemId)
            if(selectedProduct && selectedProduct.quantity > 1){
                selectedProduct.quantity -= 1;
            }
        }

    }
})

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;