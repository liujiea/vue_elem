/*
* @Author: liujie
* @Date:   2018-05-22 14:16:39
* @Last Modified by:   liujie
* @Last Modified time: 2018-05-22 17:07:26
*/

'use strict';

import App from '../App'
/* eslint-disable */
const home = resolve => require(['../page/home/home.vue'], resolve)

export default [{
    path: '/',
    component: App, //顶层路由, 对应index.html
    children: [
        //二级路由， 对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home' //重定向
        },
        {
            path: '/home',
            component: home
        }
    ]
}]

/* eslint-enable */