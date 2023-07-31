import { configureStore } from '@reduxjs/toolkit'
import tunerReducer from '../modules/TuningPanel/slice'
import configReducer from './slice'

export default configureStore({
    reducer: {
        tuner: tunerReducer,
        config: configReducer,
    },
})
