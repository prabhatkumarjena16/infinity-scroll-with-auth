import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/UserConstants";

const initialStateUserList = {
  loading: true,
  users: [],
  error: null,
  userInfo: null,
};

const initialStateUserLogin = {
  loading: true,
  error: null,
  userInfo: null,
};

export const userListReducer = (state = initialStateUserList, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, loading: true };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, ...action.payload],
      };
    case USER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state = initialStateUserLogin, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGOUT:
      return { ...state, userInfo: null };
    default:
      return state;
  }
};
