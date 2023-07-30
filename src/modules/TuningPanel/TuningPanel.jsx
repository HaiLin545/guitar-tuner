import Degree from "./Degree/Degree";
import Guitar from "../Guitar/Guitar";
import style from "./TuningPanel.module.less";

export default function TuningPanel({ pitch }) {
    return (
        <div className={style.tuningPanel}>
            <Degree />
            <div className={style.tracker}>tracker{pitch}</div>
            <div className={style.mainbox}>
                <div className="left">left button</div>
                <Guitar />
                <div className="right">right button</div>
            </div>
        </div>
    );
}
