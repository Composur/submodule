# submodule

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 简介

## rem 布局

### 引入动态计算 `font-size` 文件

```js
import '@/assets/js/rem.js'
```

引入文件后，查看页面的html节点，是否有被自动添加 `font-size`。这里只是实现了 `rem`布局，开发的时候还需要我们计算相应的`rem`值。

### 配置 `postcss-pxtorem` 自动转换px为rem

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 75, // 换算的基数(设计图750的根字体为75)
            // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
            // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
            // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },
}
```

