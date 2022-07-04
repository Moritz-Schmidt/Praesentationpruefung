const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                // https://github.com/vuejs/vue-next/pull/1600
                options.compilerOptions = {
                    whitespace: 'preserve',
                };
                return options
            })
    }


})
