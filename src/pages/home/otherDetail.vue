<!--
 * @Author: GuoShuning
 * @Date: 2022-11-03 15:23:39
 * @LastEditors: GuoShuning
 * @LastEditTime: 2022-11-23 09:39:02
 * @Description: 
-->
<template>
  <view class="page">
    <web-view :src="src" @message="getMessage"></web-view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      src: '',
    };
  },
  components: {},
  onShow() {},
  onLoad(option) {
    this.src = JSON.parse(decodeURIComponent(option.url));
  },
  methods: {
    onShareAppMessage: function () {
      console.log(this.message);
      return {
        title: this.message[this.message.length - 1].title,
        path:
          '/pages/home/otherDetail?url=' +
          this.message[this.message.length - 1].url,
        imageUrl: this.message[this.message.length - 1].img,
      };
    },
    getMessage(e) {
      this.message = e.detail.data;
    },
  },
};
</script>
<style lang="scss" scoped></style>
