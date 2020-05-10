export function doSort(a: string | number, b: string | number): number {
	const isNumberForm = (value: string | number): value is number =>
		typeof value === "number"
			? true
			: /^[0-9]+.?[0-9]*$/.test(String(value).trim());
	const A = isNumberForm(a) ? Number(a) : a.length;
	const B = isNumberForm(b) ? Number(b) : b.length;
	return A - B;
}

export function copyArr<T>(arr: T[]): T[] {
	const result: T[] = [];

	for (let item of arr) {
		result.push(JSON.parse(JSON.stringify(item)));
	}

	return result;
}
