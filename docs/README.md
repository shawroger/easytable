# EasyTable

---

`EasyTable`是一个高效便利的 `CSV文件转网页`的开源工具。

`EasyTable`支持自定义配置，支持各种检索模式，使用简单方便。

`EasyTable`是一个开源的项目，其使用了如下的开源项目

- [vue](https://vuejs.org/)

- [axios](https://github.com/axios/axios)

- [vodal](https://github.com/chenjiahan/vodal)

- [rexine](https://github.com/shawroger/Rexine)

- [v2-table](https://github.com/dwqs/v2-table)

## 快速开始

```bash
git clone https://github.com/shawroger/easytable.git
```

或者直接在一个目录准备一个`data.csv`和`index.html`文件，并在`index.html`中加入如下内容

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0" />
		<link
			href="https://unpkg.com/@shawroger/easytable/dist/easytable.css"
			rel="stylesheet"
		/>
		<title>EasyTable Demo</title>
	</head>
	<body>
		<div id="root"></div>
		<script src="https://unpkg.com/@shawroger/easytable/dist/easytable.js"></script>
		<script>
			EasyTable.init()
				.add({
					index: true, // 使用序号
					footer: true, //显示页脚
					target: "#root", //渲染的 div
					data: "./data.csv", // 读取的文件路径
					title: "EasyTable Demo", // 标题
					config: [
						{
							able: true,
							mode: null,
							label: "列的标题",
						},
						// .. more columns
					],
				})
				.render("#root");
		</script>
	</body>
</html>
```

### 修改文件

默认的读取的`CSV`文件路径

- 开发模式 `/public/data.csv`

- 部署模式 `/data.csv`

```csv
张三,20,北京
李四,25,上海
```

### 本地运行

```bash
npm start
```

### 打包部署

```bash
npm run build
```

### 最新特性

`EasyTable` 已经支持传入数组类型配置，此时将启用数据源切换功能。

## 实例方法

所有的实例方法都支持链式操作

### init

创建一个`EasyTable`实例

### add

添加一个一个`EasyTable`的数据

### render

渲染到指定的节点

## 数据配置

### data

```ts
csv: string;
```

配置项`data`为`EasyTable`读取的`CSV`文件的路径，默认为`./data.csv`(相对于`index.html`的路径)，可以为远程跨越资源。

如果传入的数据本身就是`json`格式，`EasyTable`将直接渲染出来。

```html
<script>
	EasyTable.init()
		.add({
			index: true, // 使用序号
			footer: true, //显示页脚
			target: "#root", //渲染的 div
			data: "./data.csv", // 读取的文件路径
			title: "EasyTable Demo", // 标题
			config: [
				{
					able: true,
					mode: null,
					label: "列的标题",
					sort: true,
				},
			],
		})
		.render("#root");
</script>
```

### title

```ts
title: string;
```

`title` 是数据表的标题，如果不设置的话，默认为网页的标题 `document.title`

### index

```ts
index: boolean;
```

如果想要额外渲染一行序号，可以在配置`index`为`true`，默认为不显示序号

```html
<script>
	EasyTable.init().add({
		// ...more configs
		index: true
	}.render("#root");
</script>
```

### target

```ts
footer: string;
```

选择要渲染的 DIV，默认为`#root`标记。

### footer

```ts
footer: boolean;
```

控制是否显示默认页脚，默认为`true`，即显示页脚。

## 各列项

`EasyTable`还可以对每一列进行配置，关于每列的配置项在`config`数组中修改，切记`config`数组长度要与列的总数相等，除非是空数组选择默认配置，不然会报错。

### able

```ts
able: boolean;
```

如果想忽略某一列的渲染，可以在配置`able`项为`false`，如果不设置或设置为空数组，将渲染所有列。

```html
<script>
	EasyTable.init()
		.add({
			// ...more configs
			config: [
				{
					able: true,
					label: "我会渲染出来",
				},
				{
					able: false,
					label: "我不会被渲染",
				},
			],
		})
		.render("#root");
</script>
```

### sort

```ts
sort: boolean;
```

如果想开启某一列的排序功能，可以在配置`sort`项为`true`。

### label

```ts
label: string;
```

`label` 是数据表每一列的标题，如果不配置的话，默认读取 `CSV` 文件的第 1 行。

```html
<script>
	EasyTable.init()
		.add({
			// ...more configs
			config: [
				{
					label: "第1列的标题",
				},
				{
					label: "第2列的标题",
				},
			],
		})
		.render("#root");
</script>
```

### mode

```ts
mode:
	null |  // 不检索
	string |  // 字符匹配模式 | 字符全等模式
	Array<string> | // 列表匹配模式
	Array<{ key: string; val: string }> //同上
```

`mode` 规定了数据表每一列的检索方式，如果不设置的话，默认不开启检索模式。

`mode`的配置项看似复杂，不过每种检索方式只对应一种描述，所以操作起来并不困难。

#### 不检索模式

```html
<script>
	EasyTable.init()
		.add({
			// ...more configs
			config: [
				{
					able: true,
					label: "不检索",
					mode: null,
				},
				{
					able: false,
					label: "依然不检索",
					mode: null,
				},
			],
		})
		.render("#root");
</script>
```

将某一列设置为`null`，该列就不会开启检索功能。

#### 字符匹配模式

```html
<script>
	EasyTable.init()
		.add({
			// ...more configs
			config: [
				{
					able: true,
					label: "不检索",
					mode: null,
				},
				{
					able: true,
					label: "字符匹配",
					mode: "",
				},
			],
		})
		.render("#root");
</script>
```

将某一列设置为`字符串`格式，该列就会开启字符匹配检索模式，即该列元素包含检索内容为符合条件，这也是默认配置。

#### 字符全等模式

```html
<script>
	EasyTable.init().add({
		// ...more configs
		config: [{
			able: true,
			label: "不检索",
			mode: null
		},{
			able: true
			label: "字符匹配",
			mode: ""
		}，{
			able: true,
			label: "字符全等",
			mode: "[=]"
		}]
	}).render("#root");
</script>
```

将某一列设置为`字符串`格式且值为`[=]`，该列就会开启字符全等检索模式，即该列元素全等于检索内容为符合条件。

#### 列表匹配模式

将某一列设置为`Array<string>`或者`Array<{ key: string; val: string }>`类型，该列就会列表匹配模式，`EasyTable`会渲染出一个下拉列表进行检索。

> 如何配置下拉列表

如果您的列表显示内容和检索内容相同 ，直接在该列配置一项字符串数组即可。

```html
<script>
	EasyTable.init().add({
		// ...more configs
		config: [{
			able: true,
			label: "姓名",
			mode: ""
		},{
			able: true,
			label: "年龄",
			mode: true
		}，{
			able: true,
			label: "住址"
			mode: ["北京", "上海", "广州"]
		}]
	}).render("#root");
</script>
```

如果您的列表显示内容和检索内容不相同，则该列配置`包含对象key和val的数组`即可。

```html
<script>
	EasyTable.init().add({
		// ...more configs
		config: [{
			able: true,
			label: "姓名",
			mode: ""
		},{
			able: true,
			label: "年龄",
			mode: true
		}，{
			able: true,
			label: "住址"
			mode: [
				{ val: "BJ", key:"北京" },
				{ val: "SH", key:"上海" },
				{ val: "GZ", key: "广州" }
			]
		}]
	}).render("#root");
</script>
```

## 钩子函数

### onloadData

`onloadData`函数钩子在数据初次加载时调用，暴露当前检索模式的数据。

### onChangeSearch

`onChangeSearch`函数钩子在检索变动时(如切换检索、输入改变)调用，暴露当前检索模式的信息和符合检索内容的数据。

### onChangePage

`onPageChange`函数钩子在换页翻页调用，暴露当前切换到的页数。

### onChangeConfig

`onChangeConfig`页面表格数据变化时调用，暴露此时页面数据数组。

## 鸣谢

### Open Source

再次感谢以下的开源项目，没有这些优秀的开源项目，也不可能有`EasyTable`的诞生

- [vue](https://vuejs.org/)

- [axios](https://github.com/axios/axios)

- [vodal](https://github.com/chenjiahan/vodal)

- [rexine](https://github.com/shawroger/Rexine)

- [v2-table](https://github.com/dwqs/v2-table)

### 打赏

如果您对这个项目感兴趣的话，可以打赏来支持我，反正随缘。

<img alt="支付宝收款" src="https://pic.downk.cc/item/5ea67bf8c2a9a83be5133d51.jpg" width="200" />

<br />

<img alt="微信收款" src="https://pic.downk.cc/item/5ea67b7fc2a9a83be512b52d.png" width="200" />
