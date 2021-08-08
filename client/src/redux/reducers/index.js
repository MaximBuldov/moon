import {combineReducers} from "redux";
import priceList from './priceList';
import cart from "./cart";
import user from "./user";


const rootReducer = combineReducers({
    priceList,
    cart,
    user
})

export default rootReducer;