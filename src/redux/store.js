import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import {reducerEmployees} from './reducers/reducerEmployees'

const composeEnhancers = (typeof window !== 'undefined' 
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;




const reducers = combineReducers({
  registro: reducerEmployees,

})



export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
        )
    )