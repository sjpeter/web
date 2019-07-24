<template>
  <view class="main">
    <view></view>
    <text>{{ i18n.t('home') }}</text>
    <text>{{ $i18n.t('binding') }}</text>
  </view>
</template>

<script>
  import VueI18n from 'vue-i18n'
  export default {
    i18n: new VueI18n({
      messages: {
        "zh-CHS": {
          "binding": "绑定成员",
        },
        "en-US": {
          "binding": "binding",
        }
      }
    }),
    data() {
      return {
        
      };
    },
    onLoad() {
      // 设置本组件语言环境
      this.$i18n.locale = this.i18n.locale
    }
  }
</script>

<style lang="scss">

</style>
