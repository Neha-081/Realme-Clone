import { GET_DATA, GET_DATA_SUCCESS, ADD_ITEM, DELETE_ITEM } from "./actionTypes"


export const getData=(payload)=>({
     type:GET_DATA,
     payload
})

export const getDataSuccess=(payload)=>({
     type:GET_DATA_SUCCESS,
     payload
})
export const addItem =(product)=>{
     return {
         type:ADD_ITEM,
         payload:product
     }
 }
 export const deleteItem =(product)=>{
     return {
         type:DELETE_ITEM,
         payload:product
     }
 }


 

