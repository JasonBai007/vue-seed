import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// 国际化
const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages: {
    zh: require('./zh.js'), // 中文语言包
    en: require('./en.js') // 英文语言包
  }
})

export default i18n
