import { configureStore } from "@reduxjs/toolkit";
import tunerReducer from "../modules/TuningPanel/tunerSlice";
import configReducer from "../modules/ConfigPanel/configSlice";

export default configureStore({
	reducer: {
		tuner: tunerReducer,
		config: configReducer,
	},
});
