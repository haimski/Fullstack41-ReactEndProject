import {combineReducers} from "redux";

import customersReducer from "./CustomersReducer.js";
import productsReducer from "./ProductsReducer.js";
import purchasesReducer from "./PurchasesReducer.js";

const rootReducer = combineReducers({
    customers: customersReducer,
    products: productsReducer,
    purchases: purchasesReducer
});

export default rootReducer;