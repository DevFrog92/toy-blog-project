const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	devServer: {
		overlay: false,
	},
	transpileDependencies: true,
});
