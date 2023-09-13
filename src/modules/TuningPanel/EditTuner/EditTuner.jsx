import React, { useState, useMemo } from "react";
import style from "./EditTuner.module.less";
import Button from "@mui/material/Button";
import {
	exitEditing,
	setEditingPitchMode,
	updateMode,
} from "../../ConfigPanel/configSlice";
import { useDispatch, useSelector } from "react-redux";
import Guitar from "../../Guitar/Guitar";
import { ScrollView } from "../../../components/ScrollView/ScrollView";
import { useEffect } from "react";
import classnames from "classnames";
import { transformIndexToPitch } from "../../../utils/tools";

export default function EditTuner() {
	const dispatch = useDispatch();
	const mode = useSelector(setEditingPitchMode);
	const [editingMode, setEditingMode] = useState(mode);
	const [modeList, setModeList] = useState(transformIndexToPitch(mode));
	const [currentPitchIndex, setCurrentPitchIndex] = useState(0);

	useEffect(() => {
		setEditingMode(mode);
		setModeList(transformIndexToPitch(mode));
		console.log(mode, modeList);
	}, [mode]);

	function handleExitEditing() {
		console.log("handle exit editing");
		dispatch(exitEditing());
	}

	function onPitchChange(newPitch) {
		console.log("on pitch change", currentPitchIndex, newPitch);
		setModeList(
			modeList.map((m, idx) => {
				if (idx == currentPitchIndex) {
					return newPitch;
				}
				return m;
			}),
		);
	}

	function onClickPitch(idx) {
		console.log("on click pitch", currentPitchIndex, idx);
		setCurrentPitchIndex(idx);
	}

	function handleSave() {
		const newMode = {
			...editingMode,
			pitchIndexList: modeList.map((m) => m.index),
		};
		console.log("newMode", newMode);
		dispatch(updateMode({ newMode }));
	}

	function changeModeName(e) {
		setEditingMode({
			...editingMode,
			modeName: e.target.value,
		});
	}

	const renderSinglePitch = (p, stringIndex) => {
		return (
			<div
				className={classnames(
					style.singlePitch,
					currentPitchIndex === stringIndex && style.tuning,
				)}
				onClick={() => onClickPitch(stringIndex)}
			>
				<div className={style.pitchName}>
					{p.pitch}
					<sub>{p.number}</sub>
				</div>
			</div>
		);
	};

	const renderLeft = useMemo(() => {
		return (
			<div className={classnames(style.leftList, style.pitchList)}>
				{modeList.slice(0, 3).map((p, idx) => {
					return <div key={idx}>{renderSinglePitch(p, idx)}</div>;
				})}
			</div>
		);
	}, [modeList, currentPitchIndex]);

	const renderRight = useMemo(() => {
		return (
			<div className={classnames(style.rightList, style.pitchList)}>
				{modeList.slice(3).map((p, idx) => {
					return <div key={idx}>{renderSinglePitch(p, idx + 3)}</div>;
				})}
			</div>
		);
	}, [modeList, currentPitchIndex]);

	return (
		<div className={style.EditTuner}>
			<div className={style.btns}>
				<Button onClick={handleExitEditing}>取消</Button>
				<input
					placeholder="调弦组名称"
					className={style.modeName}
					value={editingMode.modeName}
					onChange={changeModeName}
				/>
				<Button onClick={handleSave}>保存</Button>
			</div>
			<ScrollView
				initIndex={modeList[currentPitchIndex].index}
				onChange={onPitchChange}
			></ScrollView>
			<div className={style.guitarWrapper}>
				<div className={style.left}>{renderLeft}</div>
				<Guitar />
				<div className={style.right}>{renderRight}</div>
			</div>
		</div>
	);
}
