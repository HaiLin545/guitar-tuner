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
	updateModeList,
} from "./configSlice";
import { updatePitchList } from "../TuningPanel/tunerSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import classNames from "classnames";
import { useRef } from "react";

const appName = "Tuner";

export default function ConfigPanel() {
	const pitchModeList = useSelector(setPitchModeList);
	const currentModeIndex = useSelector(setCurrentModeIndex);
	const editingModeIndex = useSelector(setEditingModeIndex);
	const isSetting = useSelector(setIsSetting);
	const isEditing = useSelector(setIsEditing);
	const dispatch = useDispatch();
	const groupRef = useRef(0);
	const [movingNode, setMovingNode] = useState(null);

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
		if (!isSetting) {
			if (idx !== currentModeIndex) {
				dispatch(changeMode({ modeIndex: idx }));
				dispatch(updatePitchList({ pitchList: pitchModeList[idx] }));
			}
		} else {
			if (!isEditing || idx !== editingModeIndex) {
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

	const handleDragStart = (e) => {
		const dragItem = e.target;
		setMovingNode(dragItem);
		setTimeout(() => {
			dragItem.classList.add(style.moving);
		}, 0);
	};

	const handleDragEnd = (e) => {
		e.preventDefault();
		e.target.classList.remove(style.moving);
	};

	const handleDragEnter = (e) => {
		e.preventDefault();
		if (e.target == movingNode || e.target.parentNode != groupRef.current) {
			return;
		}
		const listDOM = Array.from(groupRef.current.children);
		const movingIndex = listDOM.indexOf(movingNode);
		const targetIndex = listDOM.indexOf(e.target);
		const newPitchModeList = pitchModeList.slice(0);
		newPitchModeList.splice(movingIndex, 1);
		newPitchModeList.splice(targetIndex, 0, pitchModeList[movingIndex]);
		dispatch(updateModeList({ pitchModeList: newPitchModeList }));
		if (editingModeIndex == movingIndex) {
			dispatch(updateEditingModeIndex({ modeIndex: targetIndex }));
		}
		if (editingModeIndex == targetIndex) {
			dispatch(updateEditingModeIndex({ modeIndex: movingIndex }));
		}
	};

	const renderPitchModeGroup = () => {
		return (
			<div
				className={style.pitchModeGroup}
				onDragStart={handleDragStart}
				onDragEnter={handleDragEnter}
				onDragEnd={handleDragEnd}
				ref={groupRef}
			>
				{pitchModeList.map((p, idx) => {
					if (isSetting && idx == 0) return <div key={p.id}></div>;
					return (
						<div
							key={p.id}
							className={style.pitchModeItem}
							draggable={isSetting}
						>
							{isSetting && (
								<MenuIcon className={style.dragBtn} />
							)}
							{renderMode(p, idx)}
							{isSetting && (
								<IconButton
									className={style.settingBtn}
									onClick={() => handleClickEditIcon(idx)}
								>
									<EditIcon />
								</IconButton>
							)}
						</div>
					);
				})}
			</div>
		);
	};

	function handleAddMode() {
		dispatch(addMode());
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
				{/* <div className={style.autoDetect}>
					<div>自动识别琴弦</div>
					<Switch />
				</div> */}
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
