export const check = {
	isNull(val: any): val is undefined | null {
		return typeof val === "undefined" || val === null;
	},

	isNumOrStr(val: any): val is string | number {
		return typeof val === "string" || typeof val === "number";
	},

	isJSON(val: any) {
		return val.map && val.filter;
	},
};
