import Vue from 'vue';
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value;
  }
});
