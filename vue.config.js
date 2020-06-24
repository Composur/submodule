// vue.config.js
const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 75, // 换算的基数(设计图750的根字体为75)
            // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
            // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
            // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ["*"],
          }),
        ],
      },
    },
  },
  // configureWebpack: {
  //   // provide the app's title in webpack's name field, so that
  //   // it can be accessed in index.html to inject the correct title.
  //   resolve: {
  //     alias: {
  //       '@': resolve('src')
  //     }
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@$", path.join(__dirname, "src"))
      .set("components", path.join(__dirname, "src/components"))
      .set("mixins", path.join(__dirname, "src/mixins"))
      .set("store", path.join(__dirname, "src/store"));
  },
};
function resolve(dir) {
  return path.join(__dirname, dir);
}
