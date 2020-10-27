import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
	name: "admin",
	initialState: {
		admin: null,
	},
	reducers: {
		login: (state, action) => {
			state.admin = action.payload;
		},
		logout: (state) => {
			state.admin = null;
		},
	},
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.admin.admin;

export default adminSlice.reducer;
