import { useEffect, useRef, useState } from "react";
import { drawBackground } from "../../utils/draw";
import { getClosestPitch } from "../../utils/getPitch";
import PitchMap from "../../assets/pitch.json";
import "./style.less";

const pannelHeight = 160;
const pannelWidth = 600;
const noPitchTip = "请拨动琴弦";

function PitchLabel({ pitch }) {
    if (!pitch) {
        return <p>None</p>;
    }
    return (
        <p>
            <span>{pitch.pitch[0]}</span>
            {pitch.half && <span>#</span>}
            <span>{pitch.number}</span>
        </p>
    );
}

export default function Pitcher({ pitch, targetPitchIdx, target, pointerLeft }) {
    const canvasRef = useRef();
    const [tip, setTip] = useState(noPitchTip);
    useEffect(() => {
        drawBackground(canvasRef.current);
    }, []);

    return (
        <div className="pitcher">
            <div className="pannel">
                <canvas ref={canvasRef} className="pitch-background" width={pannelWidth} height={pannelHeight}></canvas>
                <div className="pointer" style={{ height: pannelHeight, left: `${pointerLeft}%` }}></div>
            </div>
            <div>{pitch}</div>
            <PitchLabel pitch={PitchMap[target]} />
        </div>
    );
}
