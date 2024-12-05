'use client'
// import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from "react-redux";
// import reducer from "@/app/store/reducer";
import React from "react";

// import {DispatchType, ProductAction, ProductState} from "@/app/stateManagement/actions/actionTypes";
// import reducerProduct from "@/app/stateManagement/reducers/reducer";
// import {createStore, Store} from "redux";
import { store} from "@/app/stateManagement/store";


interface props{
    children:React.ReactNode
}
export function Providers({children}:props){

    // const store: Store<ProductState, ProductAction> & {
    //     dispatch: DispatchType
    // } = createStore(reducerProduct)

    return(
        <Provider store={store}>
            {/*<PersistGate loading={null} persistor={persistor}>*/}
            {children}
            {/*</PersistGate>*/}
        </Provider>
    )
}

