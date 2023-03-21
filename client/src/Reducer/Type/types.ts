import {action} from 'typesafe-actions'
import {ActionType} from 'typesafe-actions'
import *as action from "../Actions/action"

export type ProduvtAction = ActionType<typeof action>;
export type Product = {
    product: Array<string>
}