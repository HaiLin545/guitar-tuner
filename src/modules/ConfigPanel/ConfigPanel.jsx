import style from "./ConfigPanel.module.less";
import Switch from "@mui/material/Switch";
import { transformIndexToPitch } from "../../utils/tools";
import { Button, Divider, IconButton } from "@mui/material";
import SettingIcon from "@mui/icons-material/Settings";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Add from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/ModeEdit";
import {
	setPitchModeList,
	setCurrentModeIndex,
	setIsSetting,
	changeMode,
	switchToSetting,
	switchToEditing,
	exitSetting,
	updateEditingModeIndex,
	setIsEditing,
	setEditingModeIndex,
	addMode,
} from "./configSlice";
import { updatePitchList } from "../TuningPanel/tunerSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useMemo } from "react";
import classNames from "classnames";

const appName = "Tuner";

export default function ConfigPanel() {
	const pitchModeList = useSelector(setPitchModeList);
	const currentModeIndex = useSelector(setCurrentModeIndex);
	const editingModeIndex = useSelector(setEditingModeIndex);
	const isSetting = useSelector(setIsSetting);
	const isEditing = useSelector(setIsEditing);
	const dispatch = useDispatch();

	const isActive = (index) => {
		if (!isSetting) {
			return currentModeIndex == index;
		} else if (!isEditing) {
			return false;
		} else {
			return editingModeIndex == index;
		}
	};

	const handleClickMode = (idx) => {
		console.log("handle click mode", idx);
		if (!isSetting) {
			if (idx !== currentModeIndex) {
				dispatch(changeMode({ modeIndex: idx }));
				dispatch(updatePitchList({ pitchList: pitchModeList[idx] }));
			}
		} else {
			if (idx !== editingModeIndex) {
				handleClickEditIcon(idx);
			}
		}
	};

	const renderMode = (pitchMode, idx) => {
		const pitchList = transformIndexToPitch(pitchMode);
		return (
			<div
				className={classNames(
					style.pitchMode,
					isActive(idx) && style.active,
				)}
				onClick={() => handleClickMode(idx)}
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

	const handleClickEditIcon = (index) => {
		!isEditing && dispatch(switchToEditing());
		dispatch(updateEditingModeIndex({ modeIndex: index }));
	};

	const renderPitchModeGroup = () => {
		console.log("render pitch mode group");
		return (
			<div className={style.pitchModeGroup}>
				{pitchModeList.map((p, idx) => {
					return (
						<div key={p.id} className={style.pitchModeItem}>
							{renderMode(p, idx)}
							{isSetting && (
								<div className={style.settingBtns}>
									<IconButton>
										<MenuIcon />
									</IconButton>
									<IconButton
										onClick={() => handleClickEditIcon(idx)}
									>
										<EditIcon />
									</IconButton>
								</div>
							)}
						</div>
					);
				})}
			</div>
		);
	};
	function handleClickSetting() {
		console.log("handle click setting");
	}

	function handleAddMode() {
		dispatch(switchToEditing());
	}

	return (
		<div className={style.configPanel}>
			{isSetting ? (
				<div className={style.settingHeader}>
					<IconButton
						size="large"
						className={style.backIcon}
						onClick={() => dispatch(exitSetting())}
					>
						<ArrowBack />
					</IconButton>
					<div className={style.settingName}>SETTING</div>
				</div>
			) : (
				<div className={style.appName}>{appName}</div>
			)}
			<Divider className={style.divider} />
			<div className={style.configList}>
				<div className={style.autoDetect}>
					<div>自动识别琴弦</div>
					<Switch />
				</div>
				{renderPitchModeGroup()}
				<div className={style.btnWrapper}>
					{isSetting ? (
						<Button
							className={style.addModeBtn}
							startIcon={<Add />}
							variant="outlined"
							onClick={handleAddMode}
						>
							添加调弦组
						</Button>
					) : (
						<Button
							className={style.settingBtn}
							startIcon={<SettingIcon />}
							variant="outlined"
							onClick={() => dispatch(switchToSetting())}
						>
							设置
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
