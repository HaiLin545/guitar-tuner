let a = 440;

let dict = [];

let pitch = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const getFreq = (midi) => {
    return Math.pow(2, (midi - 69) / 12) * 440;
};

for (let i = -1; i < 8; i++) {
    for (let j = 0; j < pitch.length; j++) {
        let tmp = {
            index: dict.length,
            pitch: pitch[j],
            half: pitch[j].length == 2,
            number: i,
            frequency: getFreq(dict.length),
        };
        dict.push(tmp);
    }
}

for (let i = 0; i < dict.length; i++) {
    console.log(i, dict[i]);
}

import fs from "fs";

fs.writeFileSync("pitch.json", JSON.stringify(dict));
