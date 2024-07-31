import { hslToRgb } from "./hslToRgb";

interface textTransformOptions {
	light?: string;
	dark?: string;
	invert?: boolean;
}

export const transformTextColor = (
	color: string,
	options?: textTransformOptions
) => {
	const light = options?.light ? options.light : "#f7f7f7";
	const dark = options?.dark ? options.dark : "#212121";

	if (color.includes("hsl")) {
	}

	let arr: any[] = [];

	if (color.slice(0, 3) === "hsl") {
		color = hslToRgb(color).string;
	} else if (color.slice(0, 3) === "rgb") {
	}

	arr = color
		.slice(4, -1)
		.split(",")
		.map((val) => parseInt(val));

	const [r, g, b] = arr;
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

	return luminance > 0.5 ? dark : light;
};
