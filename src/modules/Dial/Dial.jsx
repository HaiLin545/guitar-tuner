import React, { memo, useEffect, useState } from "react";
import style from "./Dial.module.less";
import { updateStringState } from "../TuningPanel/tunerSlice";
import { useDispatch } from "react-redux";
import { sigmoid } from "../../utils/tools";
import classNames from "classnames";

const eps = 1.5;
const defaultPointerPos = 0.5;
const needleArr = Array.from({ length: 3 }, (_, i) => i);
const getNewPointerPosition = (dis) => {
	let newPos = sigmoid(dis);
	return newPos;
};

export default function Dial(props) {
	const { pitchValue, pitchList, activeStringIndex } = props;
	const [isAccuracy, setIsAccuracy] = useState(false);
	const [targetPitch, setTargetPitch] = useState(
		pitchList[activeStringIndex],
	);
	const [pointerPos, setPointerPos] = useState(defaultPointerPos);
	const dispatch = useDispatch();

	useEffect(() => {
		setTargetPitch(pitchList[activeStringIndex]);
	}, [pitchList, activeStringIndex]);

	useEffect(() => {
		const targetFreq = pitchList[activeStringIndex].frequency;
		const dis = pitchValue - targetFreq;
		if (Math.abs(dis) < eps) {
			dispatch(updateStringState({ newState: 1 }));
			setPointerPos(defaultPointerPos);
			setIsAccuracy(true);
		} else if (pitchValue > eps) {
			dispatch(updateStringState({ newState: 0 }));
			setPointerPos(getNewPointerPosition(dis, targetFreq));
			setIsAccuracy(false);
		}
	}, [pitchValue]);

	return (
		<div className={style.dial}>
			<div className={style.container}>
				<div className={style.lowSymbol}>
					<i>b</i>
				</div>
				<div className={style.main}>
					<span
						className={classNames(
							style.targetPitch,
							isAccuracy ? style.accuracy : "",
						)}
					>
						<div className={style.frequency}>
							{targetPitch.frequency} Hz
						</div>
						<div>
							{targetPitch.pitch}
							<sub>{targetPitch.number}</sub>
						</div>
					</span>
					<Needles />
				</div>
				<div className={style.highSymbol}>#</div>
			</div>
			<div className={style.dynamic}>
				<div
					className={style.pointer}
					style={{ left: `${pointerPos * 100}%` }}
				>
					<div className={style.triangle}></div>
					<div className={style.tail}></div>
				</div>
			</div>
		</div>
	);
}

const Needles = memo(function RenderNeedles() {
	return (
		<div className={style.bg}>
			{needleArr.map((idx) => (
				<div className={style.s} key={idx}></div>
			))}
			<div className={style.l}></div>
			{needleArr.map((idx) => (
				<div className={style.s} key={idx}></div>
			))}
		</div>
	);
});
