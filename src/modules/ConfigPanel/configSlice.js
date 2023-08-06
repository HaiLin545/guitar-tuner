import { createSlice } from "@reduxjs/toolkit";
import defaultPitchMode from "../../data/defaultPitchMode";

export const counterSlice = createSlice({
	name: "config",
	initialState: {
		pitchModeList: defaultPitchMode,
		currentModeIndex: 0,
	},
	reducers: {
		changeMode: (state, action) => {
			console.log(action);
			state.currentModeIndex = action.payload.modeIndex;
		},
		deleteMode: (state, action) => {},
		updateMode: (state, action) => {},
		addMode: (state, action) => {},
	},
});

export const setPitchModeList = (state) => state.config.pitchModeList;
export const setCurrentModeIndex = (state) => state.config.currentModeIndex;

// 为每个 case reducer 函数生成 Action creators
export const { changeMode, addMode, updateMode, deleteMode } =
	counterSlice.actions;
export default counterSlice.reducer;
