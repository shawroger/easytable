import { check } from "./check-types";


export interface Config {
	data: string | { [key: string]: string | number }[];
	title: string;
	index: boolean;
	footer: boolean;

	config: {
		mode: string | null | { key: string; val: string }[];
		able: boolean;
		label: string | null;
		$$val?: string;
		sort: boolean;
	}[];

	onloadData: (data: any[]) => void;
	onPageChange: (page: number) => void;
	onChangeSearch: (input: string[], data: any[]) => void;
	onChangeConfig: (config: Config) => void;
}

export const defaultState: Config = {
	config: [],
	footer: true,
	index: false,
	data: "./data.csv",
	title: document.title,
	onloadData: () => {},
	onPageChange: () => {},
	onChangeSearch: () => {},
	onChangeConfig: () => {},
};

export function mergeConfigItem(config: Config["config"][0]) {
	/**
	 * 判断是否设置了able(可见性)，默认为{true}
	 */
	if (check.isNull(config.able)) {
		config.able = true;
	}

	/**
	 * 判断是否设置了sort(是否可排序)，默认为{true}
	 */
	if (check.isNull(config.sort)) {
		config.sort = false;
	} 

	/**
	 * $$val是内置配置，为检索内容
	 */
	if (check.isNull(config.$$val)) {
		config.$$val = "";
	} 

	/**
	 * 判断是否设置了label，默认为{null}
	 */
	if (check.isNull(config.label)) {
		config.label = null;
	} else {
		config.label = String(config.label);
	}

	/**
	 * 判断是否设置了mode，默认为{null}
	 */
	if (check.isNull(config.mode)) {
		config.mode = null;
	} else if (check.isNumOrStr(config.mode)) {
		if (config.mode !== "[=]") {
			config.mode = "[?]";
		}
	}

	/**
	 * mode属性规范化
	 */
	if (Array.isArray(config.mode) && check.isNumOrStr(config.mode[0])) {
		config.mode = config.mode.map((item) => ({
			key: String(item),
			val: String(item),
		}));
	}

	return config;
}


export function mergeOptions(
	config?: Partial<Config> | Partial<Config>[]
): Config {
	const options = { ...defaultState, ...config };
	options.config.forEach((config) => (config = mergeConfigItem(config)));
	return options;
}
