import React, { memo } from "react";
import style from "./TunerIntro.module.less";
import MenuIcon from "@mui/icons-material/Menu";
import ModeEdit from "@mui/icons-material/ModeEdit";

const TunerIntro = memo(function renderTunerIntro() {
	return (
		<div className={style.tunerIntro}>
			<div className={style.title}>Tuner</div>
			<div className={style.discription}>
				这是一个专为指弹玩家设计的吉他调音器。
			</div>
			<ul className={style.options}>
				<li>
					拖动
					<MenuIcon />
					对调弦组进行排序
				</li>
				<li>
					点击
					<ModeEdit />
					编辑调弦组
				</li>
			</ul>
		</div>
	);
});

export default TunerIntro;
