import { ADD_CART_DATA} from "./actionTypes";


const init = []

const cartReducer = (store = init, { type, payload }) => {
    switch (type) {
      case ADD_CART_DATA:
        return payload
          
      
      default:
        return store;
    }
  };

  export default cartReducer;