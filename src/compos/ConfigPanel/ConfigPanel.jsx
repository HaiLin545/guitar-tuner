import style from "./ConfigPanel.module.less";

const appName = "Tuner";

export default function ConfigPanel() {
    return (
        <div className={style.configPanel}>
            <div className={style.appName}>{appName}</div>
        </div>
    );
}
