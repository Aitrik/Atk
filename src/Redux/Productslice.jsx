import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";

const initialState = {
    category: [{}],
    homeproducts: [{}],
    homeelec: [{}],
    singlecat: [{}],
    detail: [{}],
    cartData: JSON.parse(localStorage.getItem("cartData")) || []
}

export const categories = createAsyncThunk(
    "categories",

    async () => {
        const response = await axiosInstance.get(`/categories`)
        return response?.data
    }
)

export const products = createAsyncThunk(
    "products",

    async () => {
        const response = await axiosInstance.get(`/products`)
        return response?.data
    }
)

export const single = createAsyncThunk(
    "single",

    async (id) => {
        const response = await axiosInstance.get(`/products/?categoryId=${id}`)
        return response?.data
    }
)

export const product_detail = createAsyncThunk(
    "detail",

    async (id) => {
        const response = await axiosInstance.get(`products/${id}`)
        return response?.data
    }
)



export const Productslice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity } = action.payload
            state.cartData.push({ product, quantity })
            localStorage.setItem("cartData", JSON.stringify(state.cartData))
        },
        removeCart: (state, action) => {
            const removeIndex = action.payload
            state.cartData.splice(removeIndex, 1)
            localStorage.setItem("cartData", JSON.stringify(state.cartData))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(categories.pending, (state, action) => {
                state.status = "loading"

            })
            .addCase(categories.fulfilled, (state, action) => {
                state.status = "success"
                state.category = action.payload

            })
            .addCase(categories.rejected, (state, action) => {
                state.status = "failed"

            })
            .addCase(products.pending, (state, action) => {
                state.status = "loading"

            })
            .addCase(products.fulfilled, (state, action) => {
                state.status = "success"
                state.homeproducts = action.payload

            })
            .addCase(products.rejected, (state, action) => {
                state.status = "failed"

            })
            .addCase(single.pending, (state, action) => {
                state.status = "loading"

            })
            .addCase(single.fulfilled, (state, action) => {
                state.status = "success"
                state.singlecat = action.payload

            })
            .addCase(single.rejected, (state, action) => {
                state.status = "failed"

            })
            .addCase(product_detail.pending, (state, action) => {
                state.status = "loading"

            })
            .addCase(product_detail.fulfilled, (state, action) => {
                state.status = "success"
                state.detail = action.payload

            })
            .addCase(product_detail.rejected, (state, action) => {
                state.status = "failed"

            })

    }
})
export const { addToCart,removeCart } = Productslice.actions