import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'pitch',
    initialState: {
        pitchValue: 0,
    },
    reducers: {
        // updatePitch: (state, action) => {
        //     state.pitchValue = action.payload;
        // }
    },
});

// 为每个 case reducer 函数生成 Action creators
export const { update } = counterSlice.actions;

export default counterSlice.reducer;