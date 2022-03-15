import {HISTORY_CART_DATA} from "./actionsTypes"

let init = []


const historyReducer = (store = init, { type, payload }) => {
    switch (type) {

        case HISTORY_CART_DATA:
            return payload
        
        default:
            return store;
    }
};

export default historyReducer;