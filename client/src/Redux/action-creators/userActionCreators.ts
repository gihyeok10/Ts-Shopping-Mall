import { Dispatch } from "redux";
import { UserActionTypes } from "../action-types/types";
import { UserinformaionAction } from "../action-types/userAction";
import { UserInformationType } from "../action-types/userAction";
const userInformation = (userInfo: UserInformationType): any => {
  return async (dispatch: Dispatch<UserinformaionAction>) => {
    dispatch({
      type: UserActionTypes.GETUserInformation,
      payload: userInfo,
    });
  };
};

export const UserInfo = {
  userInformation,
};

export {};
