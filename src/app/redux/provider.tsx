'use client'

import {Provider} from "react-redux";
import React from "react";
import store from "@/app/redux/store";


interface props{
    children:React.ReactNode
}
export function Providers({children}:props){

    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

