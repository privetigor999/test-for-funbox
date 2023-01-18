import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/product";
import { productsData } from "../../layout/data/productsData";

interface IProductsState {
  products: IProduct[];
}

const initialState: IProductsState = {
  products: productsData,
};

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleProduct: (state, action: PayloadAction<IProduct["id"]>) => {
      const findedProduct = state.products.find(
        (product) => product.id === action.payload
      );
      findedProduct!.isPicked = !findedProduct?.isPicked;
    },
  },
});

export const { toggleProduct } = productsReducer.actions;
export default productsReducer.reducer;
