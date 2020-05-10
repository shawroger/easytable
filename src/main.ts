import Vue from "vue";
import App from "./App.vue";
import "./plugin/vendor-table";
import "./plugin/composition-api";

import { Config, mergeOptions } from "./utils/deal-config";

Vue.config.productionTip = false;

class EasyTable {
	vue = Vue;

	options: Config[] = [];
 
	constructor() {}

	/**
	 *
	 * @param config 用户的配置
	 */
	add(config: Config | Config[]) {
		if (!Array.isArray(config)) {
			this.options.push(mergeOptions(config));
		} else {
			config.forEach((item) => this.options.push(mergeOptions(item)));
		}
		return this;
	}

	/**
	 * 在vue的prototype中混入配置数据
	 */
	private mixin() {
		this.vue.prototype.$easyTable = {
			custom: this.options,
		};
		return this;
	}

	/**
	 *
	 * @param target 待渲染节点
	 */
	render(target: string) {
		this.mixin();
		new this.vue({
			render: (h) => h(App),
		}).$mount(target);

		return this;
	}
}

export const init = () => new EasyTable();

if (process.env.NODE_ENV === "development") {
	(window as any).EasyTable = { init };
}
