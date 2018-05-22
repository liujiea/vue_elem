// 防止报错vue 运行脚手架报错
// You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
//
// 解决方法webpack.config.js 添加如下配置

// resolve: {
//     alias: {
//         vue: 'vue/dist/vue.js',
//     }
// }
// 或者

// import vue from 'vue/dist/vue.js';
// 或者

// 提取vue在html文件中直接引用(这种方法不推荐)

// <script src="https://unpkg.com/vue"></script>
// webpack.config.js 添加如下配置:

// externals: {
//   vue: 'vue'
// }

import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import routes from './router/router'

//添加vue-router
Vue.use(VueRouter)

Vue.config.productionTip = false

var router = new VueRouter({
    routes
})


new Vue({
  router
}).$mount('#app')
