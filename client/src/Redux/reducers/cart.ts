import { ActionTypes } from "../action-types/types";
import { Actions } from "../action-types";


interface initialStateType{
    cart:{name:string,price:number}[]
}

const initialState = {
    cart:[]
}


const cartReducer = (state:initialStateType=initialState,action:Actions) => {
    switch(action.type){
        case ActionTypes.PRODUCT_ADD:
            state.cart.push(action.payload)
            return{
                ...state
            }
        
            case ActionTypes.PRODUCT_DELETE:
                console.log("delete가 들어왔습니다.")
                state.cart.map((item,index)=> {
                    if(item.name === action.payload.name){
                       delete state.cart[index]
                        return;
                    }
                })                
                return {
                    ...state
                }
                default: return state;
    }
}

export default cartReducer;