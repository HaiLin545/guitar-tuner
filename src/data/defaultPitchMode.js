let defaultValue = [
	{
		id: 0,
		modeName: "标准调弦",
		active: true,
		pitchIndexList: [40, 45, 50, 55, 59, 64],
		remark: "",
	},
	{
		id: 1,
		modeName: "流行的云",
		active: false,
		pitchIndexList: [36, 43, 50, 55, 57, 62],
		remark: "",
	},
	{
		id: 2,
		modeName: "Open D",
		active: false,
		pitchIndexList: [38, 45, 50, 54, 57, 62],
		remark: "",
	},
];

const defaultPitchMode = (function getDefault() {
	const storage = localStorage.getItem("pitch_mode_list");
	const value = storage ? JSON.parse(storage) : defaultValue;
	console.log("load pitch list", value);
	return value;
})();

export default defaultPitchMode;
