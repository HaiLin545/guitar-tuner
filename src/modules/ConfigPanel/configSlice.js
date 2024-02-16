import { createSlice } from "@reduxjs/toolkit";
import defaultPitchMode from "../../data/defaultPitchMode";
import { transformIndexToPitch } from "../../utils/tools";

function updateLocalStorage(key, value) {
	localStorage.setItem(key, value);
}

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
		deleteMode: (state, action) => {
			const index = state.editingModeIndex;
			state.pitchModeList = state.pitchModeList.filter((mode, idx) => {
				return idx != state.editingModeIndex;
			});
			state.editingModeIndex = Math.max(0, index - 1);
			updateLocalStorage(
				"pitch_mode_list",
				JSON.stringify(state.pitchModeList),
			);
		},
		updateMode: (state, action) => {
			state.pitchModeList[state.editingModeIndex] =
				action.payload.newMode;
			updateLocalStorage(
				"pitch_mode_list",
				JSON.stringify(state.pitchModeList),
			);
		},
		updateModeList: (state, action) => {
			state.pitchModeList = action.payload.pitchModeList;
			updateLocalStorage(
				"pitch_mode_list",
				JSON.stringify(state.pitchModeList),
			);
		},
		addMode: (state, action) => {
			state.pitchModeList.push({
				...defaultPitchMode[0],
				id: state.pitchModeList.length,
				modeName: "未命名调弦组",
			});
			state.isEditing = true;
			state.editingModeIndex = state.pitchModeList.length - 1;
			updateLocalStorage(
				"pitch_mode_list",
				JSON.stringify(state.pitchModeList),
			);
		},
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
	updateModeList,
} = counterSlice.actions;

export default counterSlice.reducer;
