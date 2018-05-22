# vue_elem
## 第一次更新内容
    1. 本地仓库和github仓库ssh绑定
    2. 使用vue-cli 3.0.0 创建vue 工程
    3. vue-cli 3.0.0 创建更改为 vue create my_pj(我的项目名)
    4. vue-cli 启动项目 npm serve
## 第二次更新
    1. vue 运行脚手架报错
You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    解决方法:

    vue默认配置是runtime版本。

    webpack.config.js 添加如下配置

    ```
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
    ```

    或者

    ```
    import vue from 'vue/dist/vue.js'
    ```

    或者

    提取vue在html中直接引用(这种方法不推荐)

    ```
    <script src="https://unpkg.com/vue"></script>
    ```

    webpack.config.js 添加如下配置

    ```
    external: {
        vue: 'vue'
    }
    ```

    2. 'require' is not defined (no-undef)
    在package.json 里面eslintConfig 设置
        "rules": {
            "global-require": "off"
        }
    3. Unexpected console statement (no-console)
    在package.json 里面eslintConfig 设置
        "rules": {
            "no-console": "off"
        }
    4.Failed to resolve loader: sass-loader
        npm install -D sass-loader node-sass &
        cnpm install -D sass-loader node-sass



