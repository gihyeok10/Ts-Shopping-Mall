import { ActionTypes } from "./types";

export interface ProductType{
    name:string,
    price:number
}

interface ProductAddAction {
    type: ActionTypes.PRODUCT_ADD
    payload: ProductType
}

interface productDeleteAction{
    type:ActionTypes.PRODUCT_DELETE
    payload: ProductType
}

export type Actions = 
ProductAddAction | productDeleteAction


export{}