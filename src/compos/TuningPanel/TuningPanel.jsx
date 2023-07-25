import Degree from "./Degree/Degree";
import Guitar from "../GuitarWrapper/Guitar";
import style from "./TuningPanel.module.less";

export default function TuningPanel() {
    return (
        <div className={style.tuningPanel}>
            <Degree />
            <div className={style.tracker}>tracker</div>
            <div className={style.mainbox}>
                <div className="left">left button</div>
                <Guitar />
                <div className="right">right button</div>
            </div>
        </div>
    );
}
