import Vue from 'vue';

// 数字加千分符
Vue.filter('T', value => Number(value).toLocaleString());
