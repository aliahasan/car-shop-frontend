import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCartItem = {
  car: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
};

interface CartState {
  items: TCartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const currentItem = state.items.find(
        (item) => item.car === action.payload.car
      );
      if (currentItem) {
        currentItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const currentItem = state.items.find((item) => item.car === itemId);
      if (currentItem) {
        state.totalQuantity -= currentItem.quantity;
        state.totalPrice -= currentItem.price * currentItem.quantity;
        state.items = state.items.filter((item) => item.car !== itemId);
      }
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const currentItem = state.items.find((item) => item.car === id);
      if (currentItem && currentItem.quantity > 0) {
        const quantityDifference = quantity - currentItem.quantity;
        currentItem.quantity = quantity;
        state.totalQuantity += quantityDifference;
        state.totalPrice += quantityDifference * currentItem.price;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
