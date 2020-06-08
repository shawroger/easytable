import {
	ref,
	computed,
	reactive,
	toRefs,
	SetupContext,
	watch,
	onUnmounted,
} from "@vue/composition-api";
import { arrayToJson } from "rexine";
import { getData } from "../utils/fetch";
import { defaultState, Config } from "../utils/deal-config";
import { doSort } from "../utils/set-data";

export function useTable(ctx: SetupContext) {
	const v2table = ref(null);

	const state = reactive({
		data: [] as any[],
		custom: defaultState as Partial<Config>,
		allCustoms: [defaultState],
		customIndex: 0,
		currentPage: 1,
		loading: true,
		showModal: false,
		showModal2: false,
		sortParams: {
			isAscend: 1,
			prop: "",
		},
		dataCount: 0,
	});

	const tableData = computed(() => {
		let result: any[] = [];
		for (let data of state.data) {
			let flag = 0;

			for (let item of state.custom.config!) {
				if (!item.$$val || !item.mode) {
					continue;
				} else if (Array.isArray(item.mode) || item.mode === "[=]") {
					flag +=
						String(data[item.label!]).trim() === String(item.$$val).trim()
							? 0
							: 1;
				} else {
					flag +=
						typeof data[item.label!] !== "undefined"
							? data[item.label!].includes(item.$$val)
								? 0
								: 1
							: 0;
				}
			}

			if (flag === 0) {
				result.push(data);
			}
		}

		if (state.sortParams.prop) {
			result = result.sort(
				(a, b) =>
					state.sortParams.isAscend *
					doSort(a[state.sortParams.prop], b[state.sortParams.prop])
			);
		}

		if (typeof state.custom.onChangeSearch === "function") {
			state.custom.onChangeSearch(
				state.custom.config!.map((v) => v.$$val!),
				result
			);
		}

		/**
		 * mark the count of page
		 */
		state.dataCount = result.length;

		return result;
	});

	const showData = computed(() =>
		tableData.value
			.slice(10 * state.currentPage - 10, 10 * state.currentPage)
			.map((item, index) => ({ ...item, $$index: index }))
	);

	const columns = computed(() =>
		state.custom.config!.filter((item) => item.able)
	);

	const countWatcher = watch(
		() => state.dataCount,
		() => {
			//@ts-ignore
			state.currentPage = v2table.value.curPage = 1;
			(v2table.value as any).getRenderPages();
		},
		{
			lazy: true,
		}
	);

	onUnmounted(() => countWatcher());

	/**
	 * 获取当前配置
	 */
	function useConfig(index: number) {
		if (
			ctx.root.$easyTable &&
			ctx.root.$easyTable.custom &&
			Array.isArray(ctx.root.$easyTable.custom)
		) {
			state.allCustoms = ctx.root.$easyTable.custom;
			return state.allCustoms[index];
		} else {
			return {};
		}
	}

	/**
	 * 	获取data
	 */
	async function fetchData(dataUrl: string, label: string[]) {
		const { data, rawJson } = await getData(dataUrl);
		if (rawJson) {
			state.data = data;
		} else {
			state.data = arrayToJson(data, label);
		}

		if (typeof state.custom.onloadData === "function") {
			state.custom.onloadData(state.data);
		}
	}

	/**
	 * 初始化视图
	 */
	function domRender() {
		/**
		 * 恢复初始值
		 */
		state.data = [];
		state.custom = {
			config: [],
			footer: true,
			index: false,
			title: "",
		};

		/**
		 * 获取配置、初始化字段名
		 */
		state.custom = useConfig(state.customIndex);
		if (typeof state.custom.onChangeConfig === "function") {
			state.custom.onChangeConfig(state.custom);
		}

		/**
		 * 获取表格数据
		 */
		fetchData(
			state.custom.data as string,
			state.custom.config!.map((item) => item.label!)
		);

		state.loading = false;
	}

	/**
	 * 切换data事件
	 */
	function onChangeConfig(e: any) {
		state.loading = true;
		state.currentPage = 1;
		//@ts-ignore
		v2table.value.curPage = 1;
		state.sortParams.prop = "";
		state.customIndex = e.target.value;
		state.showModal2 = false;
		domRender();
	}
	/**
	 * 换页事件
	 */
	function onPageChange(page: number) {
		state.currentPage = page;
		if (typeof state.custom.onChangePage === "function") {
			state.custom.onChangePage(page);
		}
	}
	/**
	 * 排序事件
	 */
	function onSortChange(params: { order: string; prop: string }) {
		const { order, prop } = params;
		state.sortParams.isAscend = order === "ascending" ? 1 : -1;
		state.sortParams.prop = prop;
	}

	function toSourceData() {
		state.sortParams.prop = "";
		state.custom.config?.forEach((item) => {
			item.$$val = "";
		});
	}

	domRender();

	return {
		//@ts-ignore
		...toRefs(state),
		v2table,
		columns,
		showData,
		tableData,
		onPageChange,
		onSortChange,
		toSourceData,
		onChangeConfig,
	};
}
