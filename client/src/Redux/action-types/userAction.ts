import { UserActionTypes } from "./types";

export interface UserInformationType {
  [key: string]: string;
}

export interface UserinformaionAction {
  type: UserActionTypes.GETUserInformation;
  payload: UserInformationType;
}
