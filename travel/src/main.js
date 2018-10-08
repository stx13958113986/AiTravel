import Vue from 'vue'
import App from './App.vue'
import router from './router'
//3.引入VueResource
import VueResource from "vue-resource" 
Vue.use(VueResource);
// 定义全局(日期格式)过滤器
//dateFormat-过滤器名称
//datestr-用户日期
Vue.filter("dateFormat",function(datestr,pattern="YYYY-MM-DD"){
return new Date(datestr).toLocaleString();
});
//设置全局ajax访问基础路径
Vue.http.options.root="http://127.0.0.1:3000/";
//设置全局ajax post访问格式
Vue.http.options.emulateJSON=true;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
