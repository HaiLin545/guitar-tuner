import GuitarSVG from "./GuitarSVG/GuitarSVG";
import React from "react";
import style from "./Guitar.module.less";
export default function Guitar() {
	return (
		<div className={style.guitar}>
			<GuitarSVG />
		</div>
	);
}
