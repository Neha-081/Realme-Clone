import { ADD_CART_DATA } from "./actionTypes";


let init = []
if (typeof window != undefined) {
    if (localStorage.getItem('cartData')) {
        init = JSON.parse(localStorage.getItem("cartData"))
    }
} else {
    init = [];
}

const cartReducer = (store = init, { type, payload }) => {
    switch (type) {
        case ADD_CART_DATA:
            return payload

        
        default:
            return store;
    }
};

export default cartReducer;