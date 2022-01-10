import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import dropDownReducer from "./dropdown-menu/dropdown-menu.reducer";

export default combineReducers({
    user: userReducer,
    menu: dropDownReducer
})