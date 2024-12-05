import { createStore } from 'redux'
import reducerProduct from "@/app/stateManagement/reducers/reducer";
import reducer from "@/app/stateManagement/reducers/reducer";

export const store = createStore(reducer)
