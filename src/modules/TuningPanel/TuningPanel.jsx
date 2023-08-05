import { useMemo, useEffect } from "react";
import Dial from "../Dial/Dial";
import Guitar from "../Guitar/Guitar";
import style from "./TuningPanel.module.less";
import classnames from "classnames";
import {
	setPitchList,
	setPitchValue,
	setActiveStringIndex,
	updateActiveStringIndex,
	updateStringState,
} from "./tunerSlice";
import { useSelector, useDispatch } from "react-redux";
import { isFreqEqual } from "../../utils/tools";

export default function TuningPanel() {
	const pitchList = useSelector(setPitchList);
	const pitchValue = useSelector(setPitchValue);
	const activeStringIndex = useSelector(setActiveStringIndex);
	const dispatch = useDispatch();

	useEffect(() => {
		const targetFreq = pitchList[activeStringIndex].frequency;
		if (isFreqEqual(targetFreq, pitchValue)) {
			dispatch(updateStringState({ newState: 1 }));
		} else if (!isFreqEqual(targetFreq, 0)) {
			dispatch(updateStringState({ newState: 0 }));
		}
	}, [pitchValue]);

	const renderSinglePitch = (p, stringIndex) => {
		console.log("render single pitch");
		return (
			<div
				className={classnames(
					style.singlePitch,
					activeStringIndex == stringIndex ? style.tuning : "",
					p.state == 0 ? style.empty : style.finished
				)}
				onClick={() =>
					dispatch(
						updateActiveStringIndex({
							activeStringIndex: stringIndex,
						})
					)
				}
			>
				<div className={style.pitchName}>
					{p.pitch}
					<sub>{p.number}</sub>
				</div>
			</div>
		);
	};

	const renderLeft = useMemo(() => {
		console.log("render left");
		return (
			<div className={classnames(style.leftList, style.pitchList)}>
				{pitchList.slice(0, 3).map((p, idx) => {
					return <div key={p.index}>{renderSinglePitch(p, idx)}</div>;
				})}
			</div>
		);
	}, [pitchList, activeStringIndex]);

	const renderRight = useMemo(() => {
		console.log("render right");
		return (
			<div className={classnames(style.rightList, style.pitchList)}>
				{pitchList.slice(3).map((p, idx) => {
					return (
						<div key={p.index}>{renderSinglePitch(p, idx + 3)}</div>
					);
				})}
			</div>
		);
	}, [pitchList, activeStringIndex]);

	return (
		<div className={style.tuningPanel}>
			<Dial />
			<div className={style.dynamic}>
				<div className={style.pointer}>
					<div className={style.triangle}></div>
					<div className={style.tail}></div>
				</div>
			</div>
			<div className={style.mainbox}>
				<div className={style.left}>{renderLeft}</div>
				<Guitar />
				<div className={style.right}>{renderRight}</div>
				<div className={style.frequency}>{pitchValue}</div>
			</div>
		</div>
	);
}
