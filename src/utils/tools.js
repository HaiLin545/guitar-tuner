import allPitch from "../data/allPitch";

export const getPitchListWithState = (pitchMode) => {
	return pitchMode.pitchIndexList.map((idx) => ({
		...allPitch[idx],
		frequency: fixed(allPitch[idx].frequency, 1),
		state: 0,
	}));
};
export const transformIndexToPitch = (mode) => {
	return mode.pitchIndexList.map((idx) => allPitch[idx]);
};

export const stablePitch = (function () {
	let invalidCount = 0;
	let lastPitch = 0;
	const maxRepeatTime = 3;
	return (pitch) => {
		if (pitch == 0) {
			invalidCount++;
			if (invalidCount > maxRepeatTime) {
				invalidCount = 0;
				lastPitch = pitch;
				return pitch;
			}
			return lastPitch;
		} else {
			invalidCount = 0;
			lastPitch = pitch;
			return pitch;
		}
	};
})();

export const fixed = (num, bit) => Number(num.toFixed(bit));

export const sigmoid = (t) => 1 / (1 + Math.exp(-t / 66));
