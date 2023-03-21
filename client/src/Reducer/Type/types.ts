import { action } from "typesafe-actions";
import { ActionType } from "typesafe-actions";
import * as actions from "../Actions/action";

export type TodoAction = ActionType<typeof actions>;
export type Todo = {
  todo: Array<string>;
};