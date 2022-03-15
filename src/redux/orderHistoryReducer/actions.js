import { HISTORY_CART_DATA } from "./actionsTypes"

export const historyCartData =(payload)=>{
    return {
        type:HISTORY_CART_DATA,
        payload
    }
}

