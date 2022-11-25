<!--
 * @Author: GuoShuning
 * @Date: 2022-02-24 11:04:15
 * @LastEditors: GuoShuning
 * @LastEditTime: 2022-11-23 10:32:49
 * @Description: 

-->
<template>
  <view>
    <!-- <web-view
      src="http://192.168.99.176:8888/"
      @message="getMessage"
    ></web-view> -->
    <web-view
      src="https://beigan.xiaoshan.gov.cn:4433/mobile_html/index.html"
      @message="getMessage"
    ></web-view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      infos: {},
      message: '',
    };
  },
  onShow() {
    wx.hideHomeButton();
  },
  onLoad() {},
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
