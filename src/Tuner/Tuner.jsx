import ConfigPanel from "../compos/ConfigPanel/ConfigPanel";
import TuningPanel from "../compos/TuningPanel/TuningPanel";
import style from "./Tuner.module.less";
import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updatePitch } from "./slice/slice";
import { getUserMedia } from "../utils/getPitch";
import { useState } from "react";

export default function Tuner() {
    const [pitch, setPitch] = useState(0);
    useEffect(() => {
        let interval = 0;
        async function initGetPitch() {
            const getPitch = await getUserMedia();
            console.log("init get pitch");
            interval = setInterval(() => {
                setPitch(getPitch());
            }, 50);
        }
        initGetPitch();
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div className={style.tuner}>
            <ConfigPanel />
            <TuningPanel pitch={pitch} />
        </div>
    );
}
