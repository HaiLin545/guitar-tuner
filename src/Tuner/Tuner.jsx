import ConfigPanel from "../compos/ConfigPanel/ConfigPanel";
import TuningPanel from "../compos/TuningPanel/TuningPanel";
import style from "./Tuner.module.less";

export default function Tuner() {
    return (
        <div className={style.tuner}>
            <ConfigPanel />
            <TuningPanel />
        </div>
    );
}
