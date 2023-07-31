import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'tuner',
    initialState: {
        patchList: [
            { name: 'E', pitch: '1', state: 2 },
            { name: 'A', pitch: '2', state: 1 },
            { name: 'D', pitch: '3', state: 0 },
            { name: 'G', pitch: '4', state: 0 },
            { name: 'B', pitch: '5', state: 0 },
            { name: 'E', pitch: '6', state: 0 },
        ],
    },
    reducers: {
        updatePitchList: (state, action) => {
            state.stringList = action.payload
        },
    },
})

// 为每个 case reducer 函数生成 Action creators
export const patchList = (state) => state.tuner.patchList
export const { updatePitchList } = counterSlice.actions
export default counterSlice.reducer
