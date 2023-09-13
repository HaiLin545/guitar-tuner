import { createSlice } from "@reduxjs/toolkit";
import defaultPitchMode from "../../data/defaultPitchMode";
import { transformIndexToPitch } from "../../utils/tools";

export const counterSlice = createSlice({
	name: "config",
	initialState: {
		isSetting: false,
		isEditing: false,
		pitchModeList: defaultPitchMode,
		currentModeIndex: 0,
		editingModeIndex: 0,
	},
	reducers: {
		changeMode: (state, action) => {
			console.log(action);
			state.currentModeIndex = action.payload.modeIndex;
		},
		deleteMode: (state, action) => {},
		updateMode: (state, action) => {
			state.pitchModeList[state.editingModeIndex] =
				action.payload.newMode;
		},
		addMode: (state, action) => {},
		switchToSetting: (state, action) => {
			console.log("switch to setting");
			state.isSetting = true;
		},
		exitSetting: (state, action) => {
			console.log("exit setting");
			state.isSetting = false;
			state.isEditing = false;
		},
		switchToEditing: (state, action) => {
			console.log("switch to editing");
			state.isEditing = true;
		},
		exitEditing: (state, action) => {
			console.log("exit editing");
			state.isEditing = false;
		},
		updateEditingModeIndex: (state, action) => {
			state.editingModeIndex = action.payload.modeIndex;
		},
	},
});

export const setPitchModeList = (state) => state.config.pitchModeList;
export const setEditingPitchMode = (state) =>
	state.config.pitchModeList[state.config.editingModeIndex];
export const setCurrentModeIndex = (state) => state.config.currentModeIndex;
export const setIsSetting = (state) => state.config.isSetting;
export const setIsEditing = (state) => state.config.isEditing;
export const setEditingModeIndex = (state) => state.config.editingModeIndex;

// 为每个 case reducer 函数生成 Action creators
export const {
	changeMode,
	addMode,
	updateMode,
	deleteMode,
	switchToSetting,
	switchToEditing,
	exitSetting,
	exitEditing,
	updateEditingModeIndex,
} = counterSlice.actions;

export default counterSlice.reducer;
