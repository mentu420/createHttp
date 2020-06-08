import Vue from 'vue'
import App from './App.vue'
import Storage from '@/utils/storage/'

Vue.config.productionTip = false
Vue.prototype.$storage = Storage

new Vue({
    render: h => h(App),
}).$mount('#app')
