import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		services: null,
		token: null,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
		serviceTaken: (state, action) => {
			state.services = action.payload;
		},
		setUserToken: (state, action) => {
			state.token = action.payload;
		},
		deleteUserToken: (state) => {
			state.token = null;
		},
	},
});

export const {
	login,
	logout,
	serviceTaken,
	setUserToken,
	deleteUserToken,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectServices = (state) => state.user.services;
export const selectUserToken = (state) => state.user.token;

export default userSlice.reducer;
