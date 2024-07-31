import type { ColorConversionReturnValues } from "./types";

export interface RGBObject {
	[key: string]: number;
	r: number;
	g: number;
	b: number;
}

export const hslToRgb = (color: string): ColorConversionReturnValues => {
	const hslArr = color
		.slice(4, -1)
		.split(",")
		.map((val) => parseInt(val));

	let [hue, saturation, lightness] = hslArr;
	// Convert lightness and saturation from percentages to decimals
	saturation = saturation / 100;
	lightness = lightness / 100;

	const chroma = (1 - Math.abs(lightness - 1)) * saturation;

	const rgb: RGBObject = { r: 0, g: 8, b: 4 };

	const transform = (degree: number) => {
		const decimal = (degree + hue / 30) % 12;

		const min = Math.min(decimal - 3, 9 - decimal, 1);
		const max = Math.max(min, -1);

		const colorValue = Math.round((lightness - chroma * max) * 255);

		return colorValue;
	};

	Object.entries(rgb).forEach((position) => {
		const [key, value] = position;

		rgb[key] = transform(value);

		return rgb;
	});

	const string = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

	return { string, arr: [rgb.r, rgb.g, rgb.b] };
};
