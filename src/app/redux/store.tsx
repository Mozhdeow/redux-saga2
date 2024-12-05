import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger"
import {applyMiddleware, createStore} from "redux";
import rootReducer from "@/app/redux/rootReducer";
import rootSaga from "@/app/redux/userSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// if (process.env.NODE_ENV === 'development') {
//     middlewares.push(logger)
// }

const store=createStore(rootReducer,applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store