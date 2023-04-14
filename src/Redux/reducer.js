import { actionTypes } from "./action";
const intialState = {
  users: [],
  editornot: false,
  userindex: null,
};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER: {
      return {
        ...state,
        users: [...state?.users, payload],
      };
    }
    case actionTypes.EDIT: {
      let users = state?.users;

      users[payload?.index] = payload?.data;

      return {
        users: users,
        editornot: false,
        userindex: null,
      };
    }
    case actionTypes.DELETE: {
      let filteredUser = state?.users?.filter(
        (user, index) => index !== payload
      );
      return {
        users: filteredUser,
      };
    }
    case actionTypes.EDITORNOT: {
      return {
        ...state,
        editornot: true,
        userindex: payload,
      };
    }

    default: {
      return state;
    }
  }
};
