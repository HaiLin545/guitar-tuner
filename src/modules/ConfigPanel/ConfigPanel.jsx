import style from "./ConfigPanel.module.less";
import Switch from "@mui/material/Switch";

const appName = "Tuner";

export default function ConfigPanel() {
    return (
        <div className={style.configPanel}>
            <div className={style.appName}>{appName}</div>
            <div>
                <div className={style.autoDetect}>
                    <div>自动识别琴弦</div>
                    <Switch />
                </div>
            </div>
        </div>
    );
}
