import { Config } from "./utils/deal-config";

declare module "*.vue" {
	import Vue from "vue";
	export default Vue;
}

declare module "vue/types/vue" {
	interface Vue {
		$easyTable: {
			custom: Config[];
		};
	}
}
