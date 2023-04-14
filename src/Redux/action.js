export const actionTypes = {
  USER: "USER",
  EDIT: "EDIT",
  DELETE: "DELETE",
  EDITORNOT: "EDITORNOT",
};

// ACTIONS
export const addUser = (data) => {
  return {
    type: actionTypes.USER,
    payload: data,
  };
};
export const editUser = (data) => {
  return {
    type: actionTypes.EDIT,
    payload: data,
  };
};
export const deleteUser = (data) => {
  return {
    type: actionTypes.DELETE,
    payload: data,
  };
};
export const edit = (data) => {
  return {
    type: actionTypes.EDITORNOT,
    payload: data,
  };
};
