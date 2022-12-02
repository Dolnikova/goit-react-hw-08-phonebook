const { createSlice } = require('@reduxjs/toolkit');
const { register, logIn, logOut } = require('./operations');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => state)
      .addCase(logOut.pending, (state, action) => state)
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(logOut.rejected, (state, action) => state),
});
export const authReducer = authSlice.reducer;
