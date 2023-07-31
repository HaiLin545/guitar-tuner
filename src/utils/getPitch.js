import * as Pitchfinder from 'pitchfinder'
import PitchMap from '../assets/pitch.json'

const constraint = {
    audio: true,
}
let audioCtx = null

export async function getUserMedia() {
    const stream = await navigator.mediaDevices.getUserMedia(constraint)
    if (!audioCtx) {
        audioCtx = new AudioContext()
    }
    const source = audioCtx.createMediaStreamSource(stream)
    const analyser = audioCtx.createAnalyser()
    const buffer = new Float32Array(analyser.fftSize)
    const detectPitch = Pitchfinder.AMDF({
        sampleRate: audioCtx.sampleRate,
    })
    source.connect(analyser)

    const getPitch = () => {
        analyser.getFloatTimeDomainData(buffer)
        console.log('getPitch')
        const start = Date.now()
        const pitch = detectPitch(buffer) ?? -1
        const end = Date.now()
        console.log('pitch = ', pitch, 'get pitch time: ', end - start, 'ms')
        return pitch
    }
    return getPitch
}

// export function getClosestPitch(pitch, targetPitchIdx) {
//     let pitchMap;
//     let target = 0;
//     if (targetPitchIdx != undefined) {
//         pitchMap = PitchMap.filter((p) => targetPitchIdx.includes(p["index"]));
//         let minGap = Infinity;
//         for (let i = 0; i < pitchMap.length; i++) {
//             let gap = Math.abs(PitchMap[targetPitchIdx[i]]["frequency"] - pitch);
//             if (gap < minGap) {
//                 minGap = gap;
//                 target = targetPitchIdx[i];
//             }
//         }
//     } else {
//         pitchMap = PitchMap;
//         while (target < pitchMap.length && pitchMap[target].frequency < pitch) {
//             target++;
//         }
//         if (target == pitchMap.length) {
//             return pitchMap[target - 1];
//         }
//         if (target > 0 && pitchMap[target].frequency - pitch > pitch - pitchMap[target - 1].frequency) {
//             target--;
//         }
//     }
//     return target;
// }

export function getPointerLeft(pitch, target) {
    const targetPitch = PitchMap[target]['frequency']
    const leftPitch = targetPitch - 10
    const rightPitch = targetPitch + 10
    let left
    if (pitch < targetPitch) {
        const s = targetPitch - leftPitch
        left = Math.min((targetPitch - pitch) / s, 1) * 50
    } else {
        const s = rightPitch - targetPitch
        left = 50 + Math.min((pitch - targetPitch) / s, 1) * 50
    }
    return left
}

// export function getNearPitch(target){
//     return
// }
