export const additem=[];
export const additems = (state=additem,action)=>{
    switch(action.type){
        case "ADDITEM": 
        return[
            ...state,
            action.payload
        ]
        break;
      case "DELETEITEM":
          return state = state.filter((x)=>{
              return x.id!==action.payload.id
          })
          break;
        default:
            return state;
            break;
    }
}