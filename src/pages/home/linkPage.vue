<!--
 * @Author: GuoShuning
 * @Date: 2022-09-22 17:06:21
 * @LastEditors: GuoShuning
 * @LastEditTime: 2022-11-23 15:51:56
 * @Description: 
-->
<template>
  <view class="page"></view>
</template>
<script>
export default {
  data() {
    return {
      appid: '',
      path: '',
      url: '',
      count: 0,
    };
  },
  components: {},
  onShow() {
    this.count++;
    console.log(this.count);
    if (this.count == 2) {
      uni.redirectTo({
        url: '/pages/home/index',
      });
    }
  },
  onLoad(option) {
    console.log(option);
    this.appid = option.appid;
    var that = this;
    if (option.path) {
      this.path = option.path;
      uni.showModal({
        title: '提示',
        content: '即将前往其他小程序',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定');
            that.toOtherMiniApp();
          } else if (res.cancel) {
            uni.redirectTo({
              url: '/pages/home/index',
            });
          }
        },
      });
    } else {
      this.url = option.url;
      uni.showModal({
        title: '提示',
        content: '即将前往其他小程序',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定');
            that.toOtherAppByUrl();
          } else if (res.cancel) {
            uni.redirectTo({
              url: '/pages/home/index',
            });
          }
        },
      });
    }
  },
  methods: {
    toOtherAppByUrl() {
      wx.openEmbeddedMiniProgram({
        appId: this.appid,
        shortLink: this.url,
      });
    },
    toOtherMiniApp() {
      wx.navigateToMiniProgram({
        appId: this.appid,
        path: this.path,
        success(res) {
          // 打开成功
          that.setData({ jumpFlag: true });
        },
        fail(res) {},
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
}
</style>
