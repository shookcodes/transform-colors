import type { ColorConversionReturnValues } from "./types";
import { _scrubHex } from "./_scrubHex";

export const hexToRgb = (hex: string): ColorConversionReturnValues | Error => {
	if (!hex) return new Error("No string provided.");

	// Scrub and normalize the hex input
	hex = _scrubHex(hex);
	if (hex.length !== 6 && hex.length !== 3)
		return new Error("Invalid hex color format.");

	// Handle shorthand (3 characters) hex format
	if (hex.length === 3) {
		hex = hex
			.split("")
			.map((char) => char + char)
			.join("");
	}

	// Convert hex to a number
	const bigint = parseInt(hex, 16);

	// Extract RGB components
	const r = (bigint >> 16) & 0xff;
	const g = (bigint >> 8) & 0xff;
	const b = bigint & 0xff;
	// Create the RGB string
	const string = `rgb(${r}, ${g}, ${b})`;

	// Return the RGB string and the array of values
	return { string, arr: [r, g, b] };
};
