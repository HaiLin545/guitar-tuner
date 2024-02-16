import Pitchfinder from "pitchfinder";
import { fixed } from "./tools";

const constraint = {
	audio: true,
};
let audioCtx = null;

export async function getUserMedia() {
	const stream = await navigator.mediaDevices.getUserMedia(constraint);
	if (!audioCtx) {
		audioCtx = new AudioContext();
	}
	const source = audioCtx.createMediaStreamSource(stream);
	const analyser = audioCtx.createAnalyser();
	const buffer = new Float32Array(analyser.fftSize);
	const detectPitch = Pitchfinder.AMDF({
		sampleRate: audioCtx.sampleRate,
	});
	source.connect(analyser);

	const getPitch = () => {
		analyser.getFloatTimeDomainData(buffer);
		let pitch = detectPitch(buffer) ?? 0;
		pitch = fixed(pitch, 1);
		return pitch;
	};
	return getPitch;
}
