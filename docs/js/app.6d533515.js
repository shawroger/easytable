(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],h=0,u=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4ffd":function(e,t,n){e.exports=n.p+"img/logo.7bc9c321.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header",{attrs:{nav:e.links,title:e.title,logo:!1},scopedSlots:e._u([{key:"info",fn:function(){return[n("p",[e._v("A easy and cool tool to transform a csv file into webpage")])]},proxy:!0}])}),n("app-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("app-section",{attrs:{id:"introduction"}},[n("header",{staticClass:"major"},[n("h2",[e._v("EasyTable")])]),n("h2",[e._v("基本介绍")]),n("p",[e._v(" EasyTable 是一个高效便利的 CSV文件转网页 的开源工具。"),n("br"),e._v(" 支持自定义配置，支持各种检索模式，使用简单方便。"),n("br"),n("br"),e._v(" EasyTable 是一个开源的项目，其使用了如下的开源项目 ")]),n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org/"}},[e._v("Vue")])]),n("li",[n("a",{attrs:{href:"https://github.com/axios/axios"}},[e._v("Axios")])]),n("li",[n("a",{attrs:{href:"https://github.com/chenjiahan/vodal"}},[e._v("Vodal")])]),n("li",[n("a",{attrs:{href:"https://github.com/shawroger/Rexine"}},[e._v("Rexine")])]),n("li",[n("a",{attrs:{href:"https://github.com/dwqs/v2-table"}},[e._v("v2-table")])])])]),n("app-section",{attrs:{id:"quick-start"}},[n("h2",[e._v("快速开始")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-bash"},[e._v("git clone https://github.com/shawroger/easytable.git")])]),n("p",[e._v(" 或者直接在一个目录准备一个 data.csv 和 index.html 文件，并在 index.html 中加入如下内容 ")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"html"},[e._v('<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8" />\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta name="viewport" content="width=device-width,initial-scale=1.0" />\n        <link\n            href="https://unpkg.com/@shawroger/easytable/dist/easytable.css"\n            rel="stylesheet"\n        />\n        <title>EasyTable Demo</title>\n    </head>\n    <body>\n        <div id="root"></div>\n        <script src="https://unpkg.com/@shawroger/easytable/dist/easytable.js"><\/script>\n        <script>\n            EasyTable.init()\n                .add({\n                    index: true, // 使用序号\n                    footer: true, //显示页脚\n                    target: "#root", //渲染的 div\n                    data: "./data.csv", // 读取的文件路径\n                    title: "EasyTable Demo", // 标题\n                    config: [\n                        {\n                            able: true,\n                            mode: null,\n                            label: "列的标题",\n                        },\n                        // .. more columns\n                    ],\n                })\n                .render("#root");\n        <\/script>\n    </body>\n</html>')])]),n("h3",{attrs:{id:"修改文件"}},[e._v("修改文件")]),n("p",[e._v("默认的读取的"),n("code",[e._v("CSV")]),e._v("文件路径")]),n("ul",[n("li",[n("p",[e._v("开发模式 "),n("code",[e._v("/public/data.csv")])])]),n("li",[n("p",[e._v("部署模式 "),n("code",[e._v("/data.csv")])])])]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-bash"},[e._v("张三,20,北京\n李四,25,上海")])]),n("h3",{attrs:{id:"本地运行"}},[e._v("本地运行")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-bash"},[e._v("npm start")])]),n("h3",{attrs:{id:"打包部署"}},[e._v("打包部署")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-bash"},[e._v("npm run build")])]),n("h3",{attrs:{id:"最新特性"}},[e._v("最新特性")]),n("p",[n("code",[e._v("EasyTable")]),e._v(" 已经支持传入数组类型配置，此时将启用数据源切换功能。 ")])]),n("app-section",{attrs:{id:"instance"}},[n("h2",{attrs:{id:"实例方法"}},[e._v("实例方法")]),n("p",[e._v("所有的实例方法都支持链式操作")]),n("h3",{attrs:{id:"init"}},[e._v("init")]),n("p",[e._v("创建一个"),n("code",[e._v("EasyTable")]),e._v("实例")]),n("h3",{attrs:{id:"add"}},[e._v("add")]),n("p",[e._v("添加一个一个"),n("code",[e._v("EasyTable")]),e._v("的数据")]),n("h3",{attrs:{id:"render"}},[e._v("render")]),n("p",[e._v("渲染到指定的节点")])]),n("app-section",{attrs:{id:"data-config"}},[n("h2",{attrs:{id:"数据配置"}},[e._v("数据配置")]),n("h3",{attrs:{id:"data"}},[e._v("data")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-ts"},[e._v("csv: string;")])]),n("p",[e._v(" 配置项"),n("code",[e._v("data")]),e._v("为"),n("code",[e._v("EasyTable")]),e._v("读取的"),n("code",[e._v("CSV")]),e._v("文件的路径，默认为"),n("code",[e._v("./data.csv")]),e._v("(相对于"),n("code",[e._v("index.html")]),e._v("的路径)，可以为远程跨越资源。 ")]),n("p",[e._v(" 如果传入的数据本身就是"),n("code",[e._v("json")]),e._v("格式，"),n("code",[e._v("EasyTable")]),e._v("将直接渲染出来。 ")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-html"},[e._v('<script>\n    EasyTable.init()\n        .add({\n            index: true, // 使用序号\n            footer: true, //显示页脚\n            target: "#root", //渲染的 div\n            data: "./data.csv", // 读取的文件路径\n            title: "EasyTable Demo", // 标题\n            config: [\n                {\n                    able: true,\n                    mode: null,\n                    label: "列的标题",\n                    sort: true,\n                },\n            ],\n        })\n        .render("#root");\n<\/script>')])]),n("h3",{attrs:{id:"title"}},[e._v("title")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-ts"},[e._v("title: string;")])]),n("p",[n("code",[e._v("title")]),e._v(" 是数据表的标题，如果不设置的话，默认为网页的标题 "),n("code",[e._v("document.title")])]),n("h3",{attrs:{id:"index"}},[e._v("index")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-ts"},[e._v("index: boolean;")])]),n("p",[e._v(" 如果想要额外渲染一行序号，可以在配置"),n("code",[e._v("index")]),e._v("为"),n("code",[e._v("true")]),e._v("，默认为不显示序号 ")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-html"},[e._v('<script>\n    EasyTable.init().add({\n        // ...more configs\n        index: true\n    }.render("#root");\n<\/script>')])]),n("h3",{attrs:{id:"target"}},[e._v("target")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-ts"},[e._v("target: string;")])]),n("p",[e._v("选择要渲染的 DIV，默认为"),n("code",[e._v("#root")]),e._v("标记。")]),n("h3",{attrs:{id:"target"}},[e._v("footer")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-ts"},[e._v("footer: boolean;")])]),n("p",[e._v("控制是否显示默认页脚，默认为"),n("code",[e._v("true")]),e._v("，即显示页脚。")])]),n("app-section",{attrs:{id:"table-config"}},[n("h2",{attrs:{id:"列表配置"}},[e._v("列表配置")]),n("p",[n("code",[e._v("EasyTable")]),e._v("还可以对每一列进行配置，关于每列的配置项在"),n("code",[e._v("config")]),e._v("数组中修改，切记"),n("code",[e._v("config")]),e._v("数组长度要与列的总数相等，除非是空数组选择默认配置，不然会报错。 ")]),n("h3",{attrs:{id:"able"}},[e._v("able")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-ts"},[e._v("able: boolean;")])]),n("p",[e._v(" 如果想忽略某一列的渲染，可以在配置"),n("code",[e._v("able")]),e._v("项为"),n("code",[e._v("false")]),e._v("，如果不设置或设置为空数组，将渲染所有列。 ")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-html"},[e._v('<script>\n    EasyTable.init()\n        .add({\n            // ...more configs\n            config: [\n                {\n                    able: true,\n                    label: "我会渲染出来",\n                },\n                {\n                    able: false,\n                    label: "我不会被渲染",\n                },\n            ],\n        })\n        .render("#root");\n<\/script>')])]),n("h3",{attrs:{id:"sort"}},[e._v("sort")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-ts"},[e._v("sort: boolean;")])]),n("p",[e._v(" 如果想开启某一列的排序功能，可以在配置"),n("code",[e._v("sort")]),e._v("项为"),n("code",[e._v("true")]),e._v("。 ")]),n("h3",{attrs:{id:"label"}},[e._v("label")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-ts"},[e._v("label: string;")])]),n("p",[n("code",[e._v("label")]),e._v(" 是数据表每一列的标题，如果不配置的话，默认读取 "),n("code",[e._v("CSV")]),e._v(" 文件的第 1 行。 ")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-html"},[e._v('<script>\n    EasyTable.init()\n        .add({\n            // ...more configs\n            config: [\n                {\n                    label: "第1列的标题",\n                },\n                {\n                    label: "第2列的标题",\n                },\n            ],\n        })\n        .render("#root");\n<\/script>')])]),n("h3",{attrs:{id:"mode"}},[e._v("mode")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-ts"},[e._v("mode:\n    null |  // 不检索\n    string |  // 字符匹配模式 | 字符全等模式\n    Array<string> | // 列表匹配模式\n    Array<{ key: string; val: string }> //同上")])]),n("p",[n("code",[e._v("mode")]),e._v(" 规定了数据表每一列的检索方式，如果不设置的话，默认不开启检索模式。 ")]),n("p",[n("code",[e._v("mode")]),e._v("的配置项看似复杂，不过每种检索方式只对应一种描述，所以操作起来并不困难。 ")]),n("h4",{attrs:{id:"不检索模式"}},[e._v("不检索模式")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-html"},[e._v('<script>\n    EasyTable.init()\n        .add({\n            // ...more configs\n            config: [\n                {\n                    able: true,\n                    label: "不检索",\n                    mode: null,\n                },\n                {\n                    able: false,\n                    label: "依然不检索",\n                    mode: null,\n                },\n            ],\n        })\n        .render("#root");\n<\/script>')])]),n("p",[e._v("将某一列设置为"),n("code",[e._v("null")]),e._v("，该列就不会开启检索功能。")]),n("h4",{attrs:{id:"字符匹配模式"}},[e._v("字符匹配模式")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-html"},[e._v('<script>\n    EasyTable.init()\n        .add({\n            // ...more configs\n            config: [\n                {\n                    able: true,\n                    label: "不检索",\n                    mode: null,\n                },\n                {\n                    able: true,\n                    label: "字符匹配",\n                    mode: "",\n                },\n            ],\n        })\n        .render("#root");\n<\/script>')])]),n("p",[e._v(" 将某一列设置为"),n("code",[e._v("字符串")]),e._v("格式，该列就会开启字符匹配检索模式，即该列元素包含检索内容为符合条件，这也是默认配置。 ")]),n("h4",{attrs:{id:"字符全等模式"}},[e._v("字符全等模式")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-html"},[e._v('<script>\n    EasyTable.init().add({\n        // ...more configs\n        config: [{\n            able: true,\n            label: "不检索",\n            mode: null\n        },{\n            able: true\n            label: "字符匹配",\n            mode: ""\n        }，{\n            able: true,\n            label: "字符全等",\n            mode: "[=]"\n        }]\n    }).render("#root");\n<\/script>')])]),n("p",[e._v(" 将某一列设置为"),n("code",[e._v("字符串")]),e._v("格式且值为"),n("code",[e._v("[=]")]),e._v("，该列就会开启字符全等检索模式，即该列元素全等于检索内容为符合条件。 ")]),n("h4",{attrs:{id:"列表匹配模式"}},[e._v("列表匹配模式")]),n("p",[e._v(" 将某一列设置为"),n("code",[e._v("Array<string>")]),e._v("或者"),n("code",[e._v("Array<{ key: string; val: string }>")]),e._v("类型，该列就会列表匹配模式，"),n("code",[e._v("EasyTable")]),e._v("会渲染出一个下拉列表进行检索。 ")]),n("blockquote",[n("p",[e._v("如何配置下拉列表")])]),n("p",[e._v(" 如果您的列表显示内容和检索内容相同 ，直接在该列配置一项字符串数组即可。 ")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-html"},[e._v('<script>\n    EasyTable.init().add({\n        // ...more configs\n        config: [{\n            able: true,\n            label: "姓名",\n            mode: ""\n        },{\n            able: true,\n            label: "年龄",\n            mode: true\n        }，{\n            able: true,\n            label: "住址"\n            mode: ["北京", "上海", "广州"]\n        }]\n    }).render("#root");\n<\/script>')])]),n("p",[e._v(" 如果您的列表显示内容和检索内容不相同，则该列配置"),n("code",[e._v("包含对象key和val的数组")]),e._v("即可。 ")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"language-html"},[e._v('<script>\n    EasyTable.init().add({\n        // ...more configs\n        config: [{\n            able: true,\n            label: "姓名",\n            mode: ""\n        },{\n            able: true,\n            label: "年龄",\n            mode: true\n        }，{\n            able: true,\n            label: "住址"\n            mode: [\n                { val: "BJ", key:"北京" },\n                { val: "SH", key:"上海" },\n                { val: "GZ", key: "广州" }\n            ]\n        }]\n    }).render("#root");\n<\/script>')])])]),n("app-section",{attrs:{id:"hooks"}},[n("h2",{attrs:{id:"钩子函数"}},[e._v("钩子函数")]),n("h3",{attrs:{id:"onloaddata"}},[e._v("onloadData")]),n("p",[n("code",[e._v("onloadData")]),e._v("函数钩子在数据初次加载时调用，暴露当前检索模式的数据。 ")]),n("h3",{attrs:{id:"onchangesearch"}},[e._v("onChangeSearch")]),n("p",[n("code",[e._v("onChangeSearch")]),e._v("函数钩子在检索变动时(如切换检索、输入改变)调用，暴露当前检索模式的信息和符合检索内容的数据。 ")]),n("h3",{attrs:{id:"onchangepage"}},[e._v("onChangePage")]),n("p",[n("code",[e._v("onChangePage")]),e._v("函数钩子在换页翻页调用，暴露当前切换到的页数。 ")]),n("h3",{attrs:{id:"onchangeconfig"}},[e._v("onChangeConfig")]),n("p",[n("code",[e._v("onChangeConfig")]),e._v("页面表格数据变化时调用，暴露此时页面数据数组。 ")])]),n("app-section",{attrs:{id:"thanks"}},[n("h2",{attrs:{id:"鸣谢"}},[e._v("鸣谢")]),n("h3",{attrs:{id:"open-source"}},[e._v("Open Source")]),n("p",[e._v(" 再次感谢以下的开源项目，没有这些优秀的开源项目，也不可能有"),n("code",[e._v("EasyTable")]),e._v("的诞生 ")]),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://vuejs.org/"}},[e._v("vue")])])]),n("li",[n("p",[n("a",{attrs:{href:"https://github.com/axios/axios"}},[e._v("axios")])])]),n("li",[n("p",[n("a",{attrs:{href:"https://github.com/chenjiahan/vodal"}},[e._v("vodal")])])]),n("li",[n("p",[n("a",{attrs:{href:"https://github.com/shawroger/Rexine"}},[e._v("rexine")])])]),n("li",[n("p",[n("a",{attrs:{href:"https://github.com/dwqs/v2-table"}},[e._v("v2-table")])])])]),n("h3",{attrs:{id:"打赏"}},[e._v("打赏")]),n("p",[e._v("如果您对这个项目感兴趣的话，可以打赏来支持我，反正随缘。")]),n("img",{attrs:{alt:"支付宝收款",src:"https://pic.downk.cc/item/5ea67bf8c2a9a83be5133d51.jpg",width:"200"}}),n("br"),n("img",{attrs:{alt:"微信收款",src:"https://pic.downk.cc/item/5ea67b7fc2a9a83be512b52d.png",width:"200"}})])]},proxy:!0},{key:"footer",fn:function(){return[e._v(" Roger © "+e._s((new Date).getFullYear())+" ")]},proxy:!0}])})],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"header"}},[a("header",[e.logo?a("span",{staticClass:"image avatar"},[a("img",{attrs:{src:n("4ffd"),alt:"logo"}})]):e._e(),a("h1",{attrs:{id:"logo"}},[a("a",{attrs:{href:"#"}},[e._v(e._s(e.title))])]),a("p",[e._t("info")],2)]),a("nav",{attrs:{id:"nav"}},[a("ul",e._l(e.nav,(function(t,n){return a("li",{key:t.name,on:{click:function(t){e.activeIndex=n}}},[a("a",{class:[n===e.activeIndex?"active":""],attrs:{href:"#"+t.href}},[e._v(e._s(t.name))])])})),0)]),a("footer",[e._t("footer")],2)])},s=[],l={name:"app-header",props:{nav:{type:Array,default:function(){return[]}},title:{type:String,default:""},logo:{type:Boolean,default:!0}},data:function(){return{activeIndex:0}}},c=l,d=n("2877"),h=Object(d["a"])(c,o,s,!1,null,null,null),u=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wrapper"}},[n("div",{attrs:{id:"main"}},[e._t("default")],2),n("section",{attrs:{id:"footer"}},[n("div",{staticClass:"container"},[e._t("footer")],2)])])},p=[],f={name:"app-container"},g=f,m=Object(d["a"])(g,v,p,!1,null,null,null),b=m.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:e.id}},[n("div",{staticClass:"container"},[e._t("default")],2)])},y=[],w={name:"app-section",props:{id:{type:String,required:!0}}},j=w,x=Object(d["a"])(j,_,y,!1,null,null,null),k=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("\t"),n("code",{class:e.lang},[e._v("\n\t\t"),e._t("default"),e._v("\n\t")],2),e._v("\n")])},E=[],O={name:"app-code",props:{lang:{type:String,default:""}}},S=O,T=Object(d["a"])(S,C,E,!1,null,null,null),A=T.exports,M={name:"app",components:{appHeader:u,appContainer:b,appSection:k,appCode:A},data:function(){return{links:[{href:"introduction",name:"基本介绍"},{href:"quick-start",name:"快速开始"},{href:"instance",name:"实例方法"},{href:"data-config",name:"数据配置"},{href:"table-config",name:"列表配置"},{href:"hooks",name:"钩子函数"},{href:"thanks",name:"鸣谢"}],title:"EasyTable"}}},N=M,I=Object(d["a"])(N,i,r,!1,null,null,null),P=I.exports,D=(n("5aea"),n("a675"),n("c322")),V=n.n(D);a["a"].config.productionTip=!1,a["a"].use(V.a),new a["a"]({render:function(e){return e(P)}}).$mount("#app")},"5aea":function(e,t,n){},a675:function(e,t,n){"use strict";(function(e){n("7db0"),n("c975"),n("a15b"),n("fb6a"),n("b0c0"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),n("18a5"),n("9911");var t=n("53ca"),a=n("c5e1"),i=n.n(a);i()((function(){jQuery.scrollzer=function(e,t){var n=!1,a="object",i="clearTimeout",r="setTimeout",o="removeClass",s="scrollzer-locked",l="activeClassName",c=jQuery(window),d=jQuery(document);c.load((function(){var h,u,v,p,f,g,m,b,_,y,w=jQuery.extend({activeClassName:"active",suffix:"-link",pad:50,firstHack:n,lastHack:n},t),j=[],x=jQuery();for(h in e)v=jQuery("#"+e[h]),p=jQuery("#"+e[h]+w.suffix),v.length<1||p.length<1||(u={},u.link=p,u[a]=v,j[e[h]]=u,x=x.add(p));b=function(){var e;for(h in j)e=j[h],e.start=Math.ceil(e[a].offset().top)-w.pad,e.end=e.start+Math.ceil(e[a].innerHeight());c.trigger("scroll")},c.resize((function(){window[i](m),m=window[r](b,250)})),y=function(){x[o](s)},c.scroll((function(){var e=n;for(h in f=c.scrollTop(),window[i](_),_=window[r](y,250),j)h!=g&&f>=j[h].start&&f<=j[h].end&&(g=h,e=!0);w.lastHack&&f+c.height()>=d.height()&&(g=h,e=!0),e&&!x.hasClass(s)&&(x[o](w[l]),j[g].link.addClass(w[l]))})),c.trigger("resize")}))},function(e){function t(t,o){var s,l,c;if(0==(s=e(t))[n])return a;switch(l=s[r]()[i],o.anchor){case"middle":c=l-(e(window).height()-s.outerHeight())/2;break;default:case i:c=Math.max(l,0)}return"function"==typeof o[r]?c-=o[r]():c-=o[r],c}var n="length",a=null,i="top",r="offset",o="click.scrolly";e(window);e.fn.scrolly=function(r){var s,l,c,d,h=e(this);if(0==this[n])return h;if(this[n]>1){for(s=0;s<this[n];s++)e(this[s]).scrolly(r);return h}if(d=a,c=h.attr("href"),"#"!=c.charAt(0)||c[n]<2)return h;l=jQuery.extend({anchor:i,easing:"swing",offset:0,parent:e("body,html"),pollOnce:!1,speed:1e3},r),l.pollOnce&&(d=t(c,l)),h.off(o).on(o,(function(e){var n=d!==a?d:t(c,l);n!==a&&(e.preventDefault(),l.parent.stop().animate({scrollTop:n},l.speed,l.easing))}))}}(jQuery);var a=function(){var e={breakpointIds:null,events:{},isInit:!1,obj:{attachments:{},breakpoints:{},head:null,states:{}},sd:"/",state:null,stateHandlers:{},stateId:"",vars:{},DOMReady:null,indexOf:null,isArray:null,iterate:null,matchesMedia:null,extend:function(n,a){e.iterate(a,(function(i){e.isArray(a[i])?(e.isArray(n[i])||(n[i]=[]),e.extend(n[i],a[i])):"object"==Object(t["a"])(a[i])?("object"!=Object(t["a"])(n[i])&&(n[i]={}),e.extend(n[i],a[i])):n[i]=a[i]}))},newStyle:function(e){var t=document.createElement("style");return t.type="text/css",t.innerHTML=e,t},_canUse:null,canUse:function(t){e._canUse||(e._canUse=document.createElement("div"));var n=e._canUse.style,a=t.charAt(0).toUpperCase()+t.slice(1);return t in n||"Moz"+a in n||"Webkit"+a in n||"O"+a in n||"ms"+a in n},on:function(t,n){var a=t.split(/[\s]+/);return e.iterate(a,(function(t){var i=a[t];if(e.isInit){if("init"==i)return void n();if("change"==i)n();else{var r=i.charAt(0);if("+"==r||"!"==r){var o=i.substring(1);if(o in e.obj.breakpoints)if("+"==r&&e.obj.breakpoints[o].active)n();else if("!"==r&&!e.obj.breakpoints[o].active)return void n()}}}e.events[i]||(e.events[i]=[]),e.events[i].push(n)})),e},trigger:function(t){return e.events[t]&&0!=e.events[t].length?(e.iterate(e.events[t],(function(n){e.events[t][n]()})),e):void 0},breakpoint:function(t){return e.obj.breakpoints[t]},breakpoints:function(t){function n(e,t){this.name=this.id=e,this.media=t,this.active=!1,this.wasActive=!1}return n.prototype.matches=function(){return e.matchesMedia(this.media)},n.prototype.sync=function(){this.wasActive=this.active,this.active=this.matches()},e.iterate(t,(function(a){e.obj.breakpoints[a]=new n(a,t[a])})),window.setTimeout((function(){e.poll()}),0),e},addStateHandler:function(t,n){e.stateHandlers[t]=n},callStateHandler:function(t){var n=e.stateHandlers[t]();e.iterate(n,(function(t){e.state.attachments.push(n[t])}))},changeState:function(t){e.iterate(e.obj.breakpoints,(function(t){e.obj.breakpoints[t].sync()})),e.vars.lastStateId=e.stateId,e.stateId=t,e.breakpointIds=e.stateId===e.sd?[]:e.stateId.substring(1).split(e.sd),e.obj.states[e.stateId]?e.state=e.obj.states[e.stateId]:(e.obj.states[e.stateId]={attachments:[]},e.state=e.obj.states[e.stateId],e.iterate(e.stateHandlers,e.callStateHandler)),e.detachAll(e.state.attachments),e.attachAll(e.state.attachments),e.vars.stateId=e.stateId,e.vars.state=e.state,e.trigger("change"),e.iterate(e.obj.breakpoints,(function(t){e.obj.breakpoints[t].active?e.obj.breakpoints[t].wasActive||e.trigger("+"+t):e.obj.breakpoints[t].wasActive&&e.trigger("-"+t)}))},generateStateConfig:function(t,n){var a={};return e.extend(a,t),e.iterate(e.breakpointIds,(function(t){e.extend(a,n[e.breakpointIds[t]])})),a},getStateId:function(){var t="";return e.iterate(e.obj.breakpoints,(function(n){var a=e.obj.breakpoints[n];a.matches()&&(t+=e.sd+a.id)})),t},poll:function(){var t="";t=e.getStateId(),""===t&&(t=e.sd),t!==e.stateId&&e.changeState(t)},_attach:null,attach:function(t){var n=e.obj.head,a=t.element;return(!a.parentNode||!a.parentNode.tagName)&&(e._attach||(e._attach=n.firstChild),n.insertBefore(a,e._attach.nextSibling),t.permanent&&(e._attach=a),!0)},attachAll:function(t){var n=[];e.iterate(t,(function(e){n[t[e].priority]||(n[t[e].priority]=[]),n[t[e].priority].push(t[e])})),n.reverse(),e.iterate(n,(function(t){e.iterate(n[t],(function(a){e.attach(n[t][a])}))}))},detach:function(e){var t=e.element;return!(e.permanent||!t.parentNode||t.parentNode&&!t.parentNode.tagName)&&(t.parentNode.removeChild(t),!0)},detachAll:function(t){var n={};e.iterate(t,(function(e){n[t[e].id]=!0})),e.iterate(e.obj.attachments,(function(t){t in n||e.detach(e.obj.attachments[t])}))},attachment:function(t){return t in e.obj.attachments?e.obj.attachments[t]:null},newAttachment:function(t,n,a,i){return e.obj.attachments[t]={id:t,element:n,priority:a,permanent:i}},init:function(){e.initMethods(),e.initVars(),e.initEvents(),e.obj.head=document.getElementsByTagName("head")[0],e.isInit=!0,e.trigger("init")},initEvents:function(){e.on("resize",(function(){e.poll()})),e.on("orientationChange",(function(){e.poll()})),e.DOMReady((function(){e.trigger("ready")})),window.onload&&e.on("load",window.onload),window.onload=function(){e.trigger("load")},window.onresize&&e.on("resize",window.onresize),window.onresize=function(){e.trigger("resize")},window.onorientationchange&&e.on("orientationChange",window.onorientationchange),window.onorientationchange=function(){e.trigger("orientationChange")}},initMethods:function(){document.addEventListener?function(t,n){e.DOMReady=n()}(0,(function(){function e(e){for(r=1;e=n.shift();)e()}var t,n=[],a=document,i="DOMContentLoaded",r=/^loaded|^c/.test(a.readyState);return a.addEventListener(i,t=function(){a.removeEventListener(i,t),e()}),function(e){r?e():n.push(e)}})):function(t,n){e.DOMReady=n()}(0,(function(e){function t(e){for(v=1;e=a.shift();)e()}var n,a=[],i=!1,r=document,o=r.documentElement,s=o.doScroll,l="DOMContentLoaded",c="addEventListener",d="onreadystatechange",h="readyState",u=s?/^loaded|^c/:/^loaded|c/,v=u.test(r[h]);return r[c]&&r[c](l,n=function(){r.removeEventListener(l,n,i),t()},i),s&&r.attachEvent(d,n=function(){/^c/.test(r[h])&&(r.detachEvent(d,n),t())}),e=s?function(t){self!=top?v?t():a.push(t):function(){try{o.doScroll("left")}catch(n){return setTimeout((function(){e(t)}),50)}t()}()}:function(e){v?e():a.push(e)}})),Array.prototype.indexOf?e.indexOf=function(e,t){return e.indexOf(t)}:e.indexOf=function(e,t){if("string"==typeof e)return e.indexOf(t);var n,a,i=t||0;if(!this)throw new TypeError;if(a=this.length,0===a||i>=a)return-1;for(0>i&&(i=a-Math.abs(i)),n=i;a>n;n++)if(this[n]===e)return n;return-1},Array.isArray?e.isArray=function(e){return Array.isArray(e)}:e.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},Object.keys?e.iterate=function(e,t){if(!e)return[];var n,a=Object.keys(e);for(n=0;a[n]&&!1!==t(a[n],e[a[n]]);n++);}:e.iterate=function(e,t){if(!e)return[];var n;for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&!1===t(n,e[n]))break},window.matchMedia?e.matchesMedia=function(e){return""==e||window.matchMedia(e).matches}:window.styleMedia||window.media?e.matchesMedia=function(e){if(""==e)return!0;var t=window.styleMedia||window.media;return t.matchMedium(e||"all")}:window.getComputedStyle?e.matchesMedia=function(e){if(""==e)return!0;var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],a=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),a="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=i:t.textContent=i,"1px"===a.width}:e.matchesMedia=function(e){if(""==e)return!0;var t,n,a,i,r={"min-width":null,"max-width":null},o=!1;for(a=e.split(/\s+and\s+/),t=0;t<a.length;t++)n=a[t],"("==n.charAt(0)&&(n=n.substring(1,n.length-1),i=n.split(/:\s+/),2==i.length&&(r[i[0].replace(/^\s+|\s+$/g,"")]=parseInt(i[1]),o=!0));if(!o)return!1;var s=document.documentElement.clientWidth,l=document.documentElement.clientHeight;return!(null!==r["min-width"]&&s<r["min-width"]||null!==r["max-width"]&&s>r["max-width"]||null!==r["min-height"]&&l<r["min-height"]||null!==r["max-height"]&&l>r["max-height"])},navigator.userAgent.match(/MSIE ([0-9]+)/)&&RegExp.$1<9&&(e.newStyle=function(e){var t=document.createElement("span");return t.innerHTML='&nbsp;<style type="text/css">'+e+"</style>",t})},initVars:function(){var t,n,a,i=navigator.userAgent;t="other",n=0,a=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],e.iterate(a,(function(e,a){return i.match(a[1])?(t=a[0],n=parseFloat(RegExp.$1),!1):void 0})),e.vars.browser=t,e.vars.browserVersion=n,t="other",n=0,a=[["ios",/([0-9_]+) like Mac OS X/,function(e){return e.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(e){return 0}],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(e){return e.replace("_",".").replace("_","")}],["wp",/Windows Phone ([0-9\.]+)/,null],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null]],e.iterate(a,(function(e,a){return i.match(a[1])?(t=a[0],n=parseFloat(a[2]?a[2](RegExp.$1):RegExp.$1),!1):void 0})),e.vars.os=t,e.vars.osVersion=n,e.vars.IEVersion="ie"==e.vars.browser?e.vars.browserVersion:99,e.vars.touch="wp"==e.vars.os?navigator.msMaxTouchPoints>0:!!("ontouchstart"in window),e.vars.mobile="wp"==e.vars.os||"android"==e.vars.os||"ios"==e.vars.os||"bb"==e.vars.os}};return e.init(),e}();!function(a,i){"function"==typeof define&&n("3c35")?define([],i):"object"==("undefined"===typeof exports?"undefined":Object(t["a"])(exports))?e.exports=i():a.skel=i()}(this,(function(){return a})),function(e){e.fn.navList=function(){var t=e(this);return $a=t.find("a"),b=[],$a.each((function(){var t=e(this),n=Math.max(0,t.parents("li").length-1),a=t.attr("href"),i=t.attr("target");b.push('<a class="link depth-'+n+'"'+("undefined"!==typeof i&&""!=i?' target="'+i+'"':"")+("undefined"!==typeof a&&""!=a?' href="'+a+'"':"")+'><span class="indent-'+n+'"></span>'+t.text()+"</a>")})),b.join("")},e.fn.panel=function(t){if(0==this.length)return i;if(this.length>1){for(var n=0;n<this.length;n++)e(this[n]).panel(t);return i}var a,i=e(this),r=e("body"),o=e(window),s=i.attr("id");return a=e.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:i,visibleClass:"visible"},t),"jQuery"!=typeof a.target&&(a.target=e(a.target)),i._hide=function(e){a.target.hasClass(a.visibleClass)&&(e&&(e.preventDefault(),e.stopPropagation()),a.target.removeClass(a.visibleClass),window.setTimeout((function(){a.resetScroll&&i.scrollTop(0),a.resetForms&&i.find("form").each((function(){this.reset()}))}),a.delay))},i.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),a.hideOnClick&&(i.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),i.on("click","a",(function(t){var n=e(this),r=n.attr("href"),o=n.attr("target");r&&"#"!=r&&""!=r&&r!="#"+s&&(t.preventDefault(),t.stopPropagation(),i._hide(),window.setTimeout((function(){"_blank"==o?window.open(r):window.location.href=r}),a.delay+10))}))),i.on("touchstart",(function(e){i.touchPosX=e.originalEvent.touches[0].pageX,i.touchPosY=e.originalEvent.touches[0].pageY})),i.on("touchmove",(function(e){if(null!==i.touchPosX&&null!==i.touchPosY){var t=i.touchPosX-e.originalEvent.touches[0].pageX,n=i.touchPosY-e.originalEvent.touches[0].pageY,r=i.outerHeight(),o=i.get(0).scrollHeight-i.scrollTop();if(a.hideOnSwipe){var s=!1,l=20,c=50;switch(a.side){case"left":s=n<l&&n>-1*l&&t>c;break;case"right":s=n<l&&n>-1*l&&t<-1*c;break;case"top":s=t<l&&t>-1*l&&n>c;break;case"bottom":s=t<l&&t>-1*l&&n<-1*c;break;default:break}if(s)return i.touchPosX=null,i.touchPosY=null,i._hide(),!1}(i.scrollTop()<0&&n<0||o>r-2&&o<r+2&&n>0)&&(e.preventDefault(),e.stopPropagation())}})),i.on("click touchend touchstart touchmove",(function(e){e.stopPropagation()})),i.on("click",'a[href="#'+s+'"]',(function(e){e.preventDefault(),e.stopPropagation(),a.target.removeClass(a.visibleClass)})),r.on("click touchend",(function(e){i._hide(e)})),r.on("click",'a[href="#'+s+'"]',(function(e){e.preventDefault(),e.stopPropagation(),a.target.toggleClass(a.visibleClass)})),a.hideOnEscape&&o.on("keydown",(function(e){27==e.keyCode&&i._hide(e)})),i},e.fn.placeholder=function(){if("undefined"!=typeof document.createElement("input").placeholder)return e(this);if(0==this.length)return n;if(this.length>1){for(var t=0;t<this.length;t++)e(this[t]).placeholder();return n}var n=e(this);return n.find("input[type=text],textarea").each((function(){var t=e(this);""!=t.val()&&t.val()!=t.attr("placeholder")||t.addClass("polyfill-placeholder").val(t.attr("placeholder"))})).on("blur",(function(){var t=e(this);t.attr("name").match(/-polyfill-field$/)||""==t.val()&&t.addClass("polyfill-placeholder").val(t.attr("placeholder"))})).on("focus",(function(){var t=e(this);t.attr("name").match(/-polyfill-field$/)||t.val()==t.attr("placeholder")&&t.removeClass("polyfill-placeholder").val("")})),n.find("input[type=password]").each((function(){var t=e(this),n=e(e("<div>").append(t.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=t.attr("id")&&n.attr("id",t.attr("id")+"-polyfill-field"),""!=t.attr("name")&&n.attr("name",t.attr("name")+"-polyfill-field"),n.addClass("polyfill-placeholder").val(n.attr("placeholder")).insertAfter(t),""==t.val()?t.hide():n.hide(),t.on("blur",(function(e){e.preventDefault();var n=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]");""==t.val()&&(t.hide(),n.show())})),n.on("focus",(function(e){e.preventDefault();var t=n.parent().find("input[name="+n.attr("name").replace("-polyfill-field","")+"]");n.hide(),t.show().focus()})).on("keypress",(function(e){e.preventDefault(),n.val("")}))})),n.on("submit",(function(){n.find("input[type=text],input[type=password],textarea").each((function(t){var n=e(this);n.attr("name").match(/-polyfill-field$/)&&n.attr("name",""),n.val()==n.attr("placeholder")&&(n.removeClass("polyfill-placeholder"),n.val(""))}))})).on("reset",(function(t){t.preventDefault(),n.find("select").val(e("option:first").val()),n.find("input,textarea").each((function(){var t,n=e(this);switch(n.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":n.val(n.attr("defaultValue")),t=n.parent().find("input[name="+n.attr("name")+"-polyfill-field]"),""==n.val()?(n.hide(),t.show()):(n.show(),t.hide());break;case"checkbox":case"radio":n.attr("checked",n.attr("defaultValue"));break;case"text":case"textarea":n.val(n.attr("defaultValue")),""==n.val()&&(n.addClass("polyfill-placeholder"),n.val(n.attr("placeholder")));break;default:n.val(n.attr("defaultValue"));break}}))})),n},e.prioritize=function(t,n){var a="__prioritize";"jQuery"!=typeof t&&(t=e(t)),t.each((function(){var t,i=e(this),r=i.parent();if(0!=r.length)if(i.data(a)){if(n)return;t=i.data(a),i.insertAfter(t),i.removeData(a)}else{if(!n)return;if(t=i.prev(),0==t.length)return;i.prependTo(r),i.data(a,t)}}))}}(jQuery),function(e){a.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 1024px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"}),e((function(){var t=e("body"),n=(e("#header"),e("#nav")),i=n.find("a");e("#wrapper");e("form").placeholder(),a.on("+medium -medium",(function(){e.prioritize(".important\\28 medium\\29",a.breakpoint("medium").active)}));var r=[];i.scrolly({offset:44}),i.on("click",(function(t){var n=e(this),a=n.attr("href");"#"==a.charAt(0)&&(t.preventDefault(),i.removeClass("active").addClass("scrollzer-locked"),n.addClass("active"))})),i.each((function(){var t,n=e(this),a=n.attr("href");"#"==a.charAt(0)&&(t=a.substring(1),n.attr("id",t+"-link"),r.push(t))})),e.scrollzer(r,{pad:300,lastHack:!0}),e('<div id="titleBar"><a href="#header" class="toggle"></a><span class="title">'+e("#logo").html()+"</span></div>").appendTo(t),e("#header").panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:"right",target:t,visibleClass:"header-visible"}),"wp"==a.vars.os&&a.vars.osVersion<10&&e("#titleBar, #header, #wrapper").css("transition","none")}))}(jQuery)}))}).call(this,n("dd40")(e))},c5e1:function(e,t){e.exports=jQuery}});
//# sourceMappingURL=app.6d533515.js.map