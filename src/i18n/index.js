import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n); // 全局挂载

export const i18n = new VueI18n({
  locale: 'ind',
  messages: {
    'en': require('@/i18n/lan/en'),// 英文语言包
    'ind': require('@/i18n/lan/ind')// 印度文语言包
  }
})


export default i18n;