export const login = (admin, adminId, email, accessToken, refreshToken) => {
  return {
    type: "LOGIN",
    admin,
    adminId,
    accessToken,
    refreshToken,
    email,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
