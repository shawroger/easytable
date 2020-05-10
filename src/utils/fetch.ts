import axios from "axios";
import { check } from "./check-types";
import { csvToArray } from "rexine";

export async function getData(data: string | object) {
	if (check.isJSON(data)) {
		return { data, rawJson: true };
	} else {
		data = String(data);
	}
	const res = await axios.get(data).catch((err) => {
		throw err;
	});

	if (check.isJSON(res.data)) {
		return { data: res.data, rawJson: true };
	} else {
		return { data: csvToArray(res.data), rawJson: false };
	}
}
