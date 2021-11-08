import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {    
    cart: [],
    subTotal:0,
    cartSelected:[]
  },
  reducers: {
    addCart: (state, action) => {
      let exist = false
      const newArr = state.cart.map((cart)=>{
        if(cart.id === action.payload.id){
          cart.order += action.payload.order
          if(cart.order>cart.data.stock){
            cart.order = cart.data.stock
          }
          exist = true
        }
        return cart
      })

      if(exist){
          state.cart = newArr
      }else{
          state.cart.push(action.payload);
      }

        
            
    },
    updateCart:(state,action) =>{
      
      const newArr = state.cart.map((cart)=>{
        if(cart.id === action.payload.id){
          cart.order = action.payload.order
        }
        return cart
      })

      state.cart = newArr
      
    },
    selectedById:(state,action) =>{

      const newArr = state.cart.map((cart)=>{
        if(cart.id === action.payload){          
          return cart
        }
        
      })

      
      
      state.cartSelected=newArr
    },
    removeById: (state,action) => {      
      
      state.cart = state.cart.filter((ele) => ele.id !== action.payload)
    },
    removeCart: (state) => {
      
        state.cart=[]
    },
    addSubTotal: (state, action) =>{
      state.subTotal+= action.payload
    },
    updateSubTotal: (state) =>{
      let subtotal=0
      state.cart.map((ele)=>{        
        subtotal+=ele.order*ele.data.price
      })
      state.subTotal=subtotal
    }
  }
});

//Actions
export const {
  addCart,
  removeById,
  removeCart,
  addSubTotal,
  updateCart,
  updateSubTotal,
  selectedById
} = slice.actions;


//Getters
export const selectCart = (state) => state.cart.cart;
export const selectSubTotal = (state) => state.cart.subTotal;
export const selectCartById = (state) => state.cart.cartSelected;

export default slice.reducer;
