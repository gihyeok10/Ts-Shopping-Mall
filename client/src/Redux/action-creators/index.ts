import { Dispatch } from "redux"
import { ActionTypes } from "../action-types/types"
import { Actions } from "../action-types"
import { ProductType } from "../action-types"
 const product = (product:ProductType,productState:boolean):any => {
    console.log("상품은:",product)
    return async (dispatch:Dispatch<Actions>) => {

        if(productState === true){
            dispatch({
                type:ActionTypes.PRODUCT_ADD,
                payload:product
            })
        }
        else{
            dispatch({
                type:ActionTypes.PRODUCT_DELETE,
                payload:product
            })
        }
      

     
    }



}

export const ProductInfo ={
    product,
}