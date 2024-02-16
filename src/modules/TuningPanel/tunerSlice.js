import { createSlice } from "@reduxjs/toolkit";
import defaultPitchMode from "../../data/defaultPitchMode";
import { getPitchListWithState } from "../../utils/tools";

const defaultPitchList = getPitchListWithState(defaultPitchMode[0]);

export const counterSlice = createSlice({
	name: "tuner",
	initialState: {
		pitchValue: 0,
		activeStringIndex: 0,
		pitchList: defaultPitchList,
	},
	reducers: {
		updatePitchList: (state, action) => {
			state.pitchList = getPitchListWithState(action.payload.pitchList);
		},
		updatePitchValue: (state, action) => {
			state.pitchValue = action.payload.pitchValue;
		},
		updateStringState: (state, action) => {
			console.log("update string state", action);
			const { stringIdx, newState } = action.payload;
			state.pitchList[
				stringIdx ? stringIdx : state.activeStringIndex
			].state = newState;
		},
		updateActiveStringIndex: (state, action) => {
			console.log("update active string index", action);
			state.activeStringIndex = action.payload.activeStringIndex;
		},
	},
});

export const setPitchValue = (state) => state.tuner.pitchValue;
export const setPitchList = (state) => state.tuner.pitchList;
export const setPitchModeList = (state) => state.tuner.pitchModeList;
export const setActiveStringIndex = (state) => state.tuner.activeStringIndex;

// 为每个 case reducer 函数生成 Action creators
export const {
	updatePitchValue,
	updateActiveStringIndex,
	updatePitchList,
	updateStringState,
} = counterSlice.actions;
export default counterSlice.reducer;
