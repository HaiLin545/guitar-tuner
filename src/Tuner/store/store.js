import { configureStore } from '@reduxjs/toolkit'
import tunerReducer from '../../modules/TuningPanel/slice'

export default configureStore({
    reducer: {
        tuner: tunerReducer,
    },
})
