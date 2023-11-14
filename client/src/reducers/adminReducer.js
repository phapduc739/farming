const initialState = {
  admin: {},
  adminId: null,
  email: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        admin: action.admin,
        adminId: action.adminId,
        email: action.email,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isAuthenticated: true,
      };
    case "LOGOUT": {
      return {
        ...state,
        admin: null,
        adminId: null,
        email: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
