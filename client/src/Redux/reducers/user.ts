import { UserActionTypes } from "../action-types/types";
import { UserInformationType } from "../action-types/userAction";

interface initialStateType {
  userInformaion: {};
}

const initialState = {
  userInformaion: {},
};

const userReducer = (
  state: initialStateType = initialState,
  action: UserInformationType
) => {
  switch (action.type) {
    case UserActionTypes.GETUserInformation:
      return {
        ...state,
        userInformaion: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
