import { ADD_CART_DATA ,CART_DATA_SUCCESS} from "./actionTypes";

export const addCartData =(payload)=>{
    return {
        type:ADD_CART_DATA,
        payload
    }
}

// export const cartDataSuccess=(payload)=>{
//     console.log(payload,'paylaod')
//    return {type:CART_DATA_SUCCESS,
//     payload}
// }