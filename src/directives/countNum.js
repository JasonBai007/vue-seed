import Vue from 'vue';

// 全局注册count指令
Vue.directive('count', {

  // 被绑定元素插入父节点时调用(仅保证父节点存在，但不一定已被插入文档中
  // 只调用一次
  inserted(el, binding, vnode, oldVnode) {

    // 如果没有设置最大值，则默认最多可输入50个字符
    let max = binding.value || 50
    // 首先设置input框的宽度，留出提示数值的宽度
    el.style.width = 'calc(100% - 43px)'
    // 获得input元素刚开始的value的长度
    let initValueLength = el.getElementsByTagName('input')[0].value.length;
    // 新建一个span标签
    let node = document.createElement('span')
    // 设置里面的文本
    node.innerHTML = ' ' + initValueLength + '/' + max
    // 将刚才新建的span元素挂载到父元素内，使其成为父元素的最后一个子元素
    el.parentNode.appendChild(node)
  },

  // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
  componentUpdated(el, binding, vnode, oldVnode) {

    let max = binding.value || 50
    // 当前输入字符的长度
    let curLen = el.getElementsByTagName('input')[0].value.length
    // 改变span标签的文本
    el.parentNode.lastChild.innerHTML = ' ' + curLen + '/' + max
    // 拿到最后一个span标签元素
    let span = el.parentNode.lastChild
    // 计算长度，如果长度超过最大长度，就添加一个class
    if (curLen > max) {
      span.setAttribute('class', 'exceedMax');
    } else {
      span.setAttribute('class', '');
    }
  }
});
