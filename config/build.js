module.exports = {
	entry: "src/main.ts",
	output: {
		format: "umd",
		moduleName: "EasyTable",
		fileNames: {
			js: "easytable.js",
			css: "easytable.css"
		},
		clean: false,
	},
};
