import { createSlice } from '@reduxjs/toolkit'
import defaultPitchMode from '../data/defaultPitchMode'
import { getPitchListWithState } from '../utils/tools'

const initPitchList = getPitchListWithState(defaultPitchMode, 0)

export const counterSlice = createSlice({
    name: 'config',
    initialState: {
        pitchValue: 0,
        pitchModeList: defaultPitchMode,
        currentModeIndex: 0,
        pitchList: initPitchList,
    },
    reducers: {
        changeMode: (state, action) => {
            const newIdx = action.payload.newModeIndex
            state.currentModeIndex = newIdx
            state.pitchList = getPitchList(state.pitchModeList, newIdx)
        },
        deleteMode: (state, action) => { },
        updateMode: (state, action) => { },
        addMode: (state, action) => { },
        updatePitchValue: (state, action) => {
            console.log('update pitch value', action)
            state.pitchValue = action.payload;
        }
    },
})

export const setPitchValue = (state) => state.config.pitchValue
export const setPitchList = (state) => state.config.pitchList
export const setPitchModeList = (state) => state.config.pitchModeList

// 为每个 case reducer 函数生成 Action creators
export const { changeMode, addMode, updateMode, deleteMode, updatePitchValue } =
    counterSlice.actions
export default counterSlice.reducer
