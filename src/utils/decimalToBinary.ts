export const decimalToBinary = (decimal: number) => {
	// Convert decimal to binary and pad with leading zeros to make it 8 bits
	return decimal.toString(2).padStart(8, "0");
};
