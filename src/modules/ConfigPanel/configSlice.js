import { createSlice } from '@reduxjs/toolkit'
import defaultPitchMode from '../../data/defaultPitchMode'


export const counterSlice = createSlice({
    name: 'config',
    initialState: {
        pitchModeList: defaultPitchMode,
        currentModeIndex: 0,
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
    },
})

export const setPitchModeList = (state) => state.config.pitchModeList

// 为每个 case reducer 函数生成 Action creators
export const { changeMode, addMode, updateMode, deleteMode,  } =
    counterSlice.actions
export default counterSlice.reducer
