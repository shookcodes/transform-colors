import { _scrubHex } from "./_scrubHex";
import type { ColorConversionReturnValues, StringArr } from "./types";

export const rgbToHex = (
	color: string
): ColorConversionReturnValues | Error => {
	if (!color) return new Error("No string provided.");

	const rgbArr = color
		.slice(4, -1)
		.split(",")
		.map((val) => parseInt(val));

	const arr = [] as any;
	rgbArr.forEach((value) => {
		const hex = value.toString(16);
		return arr.push(hex.length === 1 ? "0" + hex : hex);
	});

	const string = `#${arr[0]}${arr[1]}${arr[2]}`;

	return { string, arr };
};
