import { configureStore } from "@reduxjs/toolkit";
import { Productslice } from "./Productslice";



export const store=configureStore(
    {
        reducer:{
          Prod:Productslice.reducer
           
            
        }
    }
)