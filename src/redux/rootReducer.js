import {combineReducers} from "redux";
import userReducer from "./userReducer/reducer";
import dataReducer from './dataReducer/reducer';
import cartReducer from './cartReducer/reducer';
import historyReducer from "./orderHistoryReducer/reducer";


const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer,
    cart:cartReducer,
    history:historyReducer
});

export default rootReducer;