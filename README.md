# vue-template

# 一、我的文档
此项目是使用vue-cli搭建的vue模版，其内自带常用的依赖，下面会将详细介绍。

## 目标
1. 基本的vue模版

    `vue create vue-template`

2. 常用插件的安装以及其配置使用
    * 路由：vue-router
        ```
        npm install vue-router
        ```
    * 状态：vuex
        ```
        npm install vuex --save
        ```
    * api：axios
        ```
        npm install axios --save
        ```
    * css预处理：sass, less，stylus
        ```
        # Sass
        npm install -D sass-loader sass

        # Less
        npm install -D less-loader less

        # Stylus
        npm install -D stylus-loader stylus
        ```

    * 样式重置：reset.css

    * ui：
        * element-ui 完整引入
            ```
            npm i element-ui -S

            // main.js
            import ElementUI from 'element-ui';Vue.use(ElementUI);
            import 'element-ui/lib/theme-chalk/index.css';
            ```
        * vant 按需引入
            ```
            npm i babel-plugin-import -D
            npm i vant -S

            // babel.config.js
            plugins: [
                ['import', {
                    libraryName: 'vant',
                    libraryDirectory: 'es',
                    style: true
                    }, 'vant']
                ]

            // some.js
            import { Button } from 'vant';
            ```


3. 目录结构
    ```
    src -> 主要代码
        main.js 入口
        App.vue 入口，被main引入
        router -> 路由
        store -> 状态
        assets -> 资源
        api -> api    
        utils -> 工具函数
        components -> 公共组件
        pages -> 页面
        .env -> 配置

    public -> 不修改的公共文件
      index.html 编译后的入口html文件
    ```


# 二、默认文档

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
