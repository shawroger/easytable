import Vue from "vue";

import "beautify-scrollbar/dist/index.css";
import "v2-table/dist/index.css";
import "vodal/common.css";

//@ts-ignore
import V2Table from "v2-table";
//@ts-ignore
import Vodal from "vodal";

Vue.component(Vodal.name, Vodal);

Vue.use(V2Table);
