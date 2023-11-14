export const login = (user, userId, email, accessToken, refreshToken) => {
  return {
    type: "LOGIN",
    user,
    userId,
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
