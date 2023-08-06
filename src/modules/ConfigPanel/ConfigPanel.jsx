import style from "./ConfigPanel.module.less";
import Switch from "@mui/material/Switch";
import { transformIndexToPitch } from "../../utils/tools";
import { Button } from "@mui/material";
import SettingIcon from "@mui/icons-material/Settings";
import {
	setPitchModeList,
	setCurrentModeIndex,
	changeMode,
} from "./configSlice";
import { updatePitchList } from "../TuningPanel/tunerSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useMemo } from "react";
import classNames from "classnames";

const appName = "Tuner";

export default function ConfigPanel() {
	const pitchModeList = useSelector(setPitchModeList);
	const currentModeIndex = useSelector(setCurrentModeIndex);
	const dispatch = useDispatch();

	const dispatchChangeMode = (idx) => {
		console.log("dispatch changeMode", idx);
		if (idx !== currentModeIndex) {
			dispatch(changeMode({ modeIndex: idx }));
			dispatch(updatePitchList({ pitchList: pitchModeList[idx] }));
		}
	};

	const renderMode = (pitchMode, idx) => {
		const pitchList = transformIndexToPitch(pitchMode);
		return (
			<div
				className={classNames(
					style.pitchMode,
					currentModeIndex === idx && style.active,
				)}
				key={pitchMode.id}
				onClick={() => dispatchChangeMode(idx)}
			>
				<div className={style.modeName}>{pitchMode.modeName}</div>
				<div className={style.pitchNameList}>
					{pitchList.map((p) => (
						<span key={p.index} className={style.pitchName}>
							{p.pitch}
							<sub>{p.number}</sub>
						</span>
					))}
				</div>
			</div>
		);
	};

	const renderPitchModeGroup = useMemo(() => {
		console.log("render pitch mode group");
		return (
			<div className={style.pitchModeGroup}>
				{pitchModeList.map((p, idx) => renderMode(p, idx))}
			</div>
		);
	}, [pitchModeList, currentModeIndex]);

	return (
		<div className={style.configPanel}>
			<div className={style.appName}>{appName}</div>
			<div className={style.configList}>
				<div className={style.autoDetect}>
					<div>自动识别琴弦</div>
					<Switch />
				</div>
				{renderPitchModeGroup}
				<div className={style.btnWrapper}>
					<Button
						className={style.settingBtn}
						startIcon={<SettingIcon />}
						variant="outlined"
					>
						设置
					</Button>
				</div>
			</div>
		</div>
	);
}
