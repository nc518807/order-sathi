import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import brandReducer from "./brandReducer";
import categoryReducer from "./CategoriesReducer";
import LoginReducer from "./LoginReducer";
import cartReducer from "./CartReducer";
import ContactReducer from "./ContactReducer";

const rootReducer = combineReducers({
    products: productReducer,
    brands: brandReducer,
    categories: categoryReducer,
    logins: LoginReducer,
    carts: cartReducer,
    contacts: ContactReducer
})

export default rootReducer;