import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// 国际化
const i18n = new VueI18n({
  locale: 'zh-CHS', // set locale
  messages: {
    'zh-CHS': require('./zh-CHS.js'), // 中文语言包
    'en-US': require('./en-US.js') // 英文语言包
  },
  silentTranslationWarn: false,
  dateTimeFormats: {
    'en-US': {
      short: {
        year: 'numeric',
        month: 'short'
      },
      shorts: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
      }
    },
    'zh-CHS': {
      short: {
        year: 'numeric',
        month: 'short'
      },
      shorts: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }
    }
  }
})

// window.i18n = i18n

export default i18n
