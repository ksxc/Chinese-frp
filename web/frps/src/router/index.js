import Vue from 'vue'
import Router from 'vue-router'
import 概述/首页 from '../components/概述/首页.vue'
import ProxiesTcp from '../components/ProxiesTcp.vue'
import ProxiesUdp from '../components/ProxiesUdp.vue'
import ProxiesHttp from '../components/ProxiesHttp.vue'
import ProxiesHttps from '../components/ProxiesHttps.vue'
import ProxiesStcp from '../components/ProxiesStcp.vue'
import ProxiesSudp from '../components/ProxiesSudp.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: '概述/首页',
        component: 概述/首页
    }, {
        path: '/proxies/tcp',
        name: 'ProxiesTcp',
        component: ProxiesTcp
    }, {
        path: '/proxies/udp',
        name: 'ProxiesUdp',
        component: ProxiesUdp
    }, {
        path: '/proxies/http',
        name: 'ProxiesHttp',
        component: ProxiesHttp
    }, {
        path: '/proxies/https',
        name: 'ProxiesHttps',
        component: ProxiesHttps
    }, {
        path: '/proxies/stcp',
        name: 'ProxiesStcp',
        component: ProxiesStcp
    }, {
        path: '/proxies/sudp',
        name: 'ProxiesSudp',
        component: ProxiesSudp
    }]
})
