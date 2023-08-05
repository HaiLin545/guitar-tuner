import allPitch from "../data/allPitch";

const eps = 1.5;

export const isFreqEqual = (a, b) => {
	console.log("diff", Math.abs(a - b));
	return Math.abs(a - b) <= eps;
};

export const getPitchListWithState = (modeList, index) => {
	return modeList[index].pitchIndexList.map((idx) => ({
		...allPitch[idx],
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
