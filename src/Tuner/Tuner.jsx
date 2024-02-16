import React from "react";
import ConfigPanel from "../modules/ConfigPanel/ConfigPanel";
import TuningPanel from "../modules/TuningPanel/TuningPanel";
import style from "./Tuner.module.less";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserMedia } from "../utils/getPitch";
import { updatePitchValue } from "../modules/TuningPanel/tunerSlice";

export default function Tuner() {
	const dispatch = useDispatch();

	useEffect(() => {
		let interval = 0;
		async function initGetPitch() {
			const getPitch = await getUserMedia();
			let newPitch = 0;
			interval = setInterval(() => {
				newPitch = getPitch();
				console.log("new pitch = ", newPitch);
				if (newPitch > 0) {
					dispatch(updatePitchValue({ pitchValue: newPitch }));
				}
			}, 100);
		}
		initGetPitch();
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={style.tuner}>
			<ConfigPanel />
			<TuningPanel />
		</div>
	);
}
