import GuitarSVG from "./GuitarSVG/GuitarSVG";
import style from "./Guitar.module.less";
export default function Guitar() {
	return (
		<div className={style.guitar}>
			<GuitarSVG />
		</div>
	);
}
