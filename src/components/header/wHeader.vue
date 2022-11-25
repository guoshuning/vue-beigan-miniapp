<template>
  <view class="header">
    <view class="top" :style="{height:topHeight+'px'}"></view>
    <view class="head" :style="{backgroundColor: bgColor,border: borderStyle}">
      <view v-if="backVisible" :style="{color: backColor}" class="back-btn"  @click="back">
      <view class="iconfont">&#xe857;</view>
      <view>返回</view>
    </view>
    <view class="title" :style="{color: titleColor}">{{title}}</view>
    <view class="option-btn" v-if="optionVisible">
    </view>
    </view>
    
  </view>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
    },
    titleColor: {
      type: String,
    },
    backColor: {
      type: String,
    },
    borderStyle: {
      type: String,
      default: "1px solid #eee",
    },
    title: {
      type: String,
      default: "",
    },
    optionVisible: {
      type: Boolean,
      default: true,
    },
    backVisible: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      // #ifdef MP-WEIXIN
      topHeight: wx.getMenuButtonBoundingClientRect().top,
      // #endif

      // #ifdef H5
      topHeight: ''
      // #endif
    };
  },
  methods: {
    back() {
      uni.navigateBack();
    },
  },
  onLoad(){
    // #ifdef MP-WEIXIN
    console.log(wx.getMenuButtonBoundingClientRect().top)
    // #endif
  }
};
</script>
<style lang="scss">
.header{
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
  .top{
    width: 100%;
    top: 0;
  }
  .head{
    display: flex;
    height: 44px;
    line-height: 68upx;
    font-size: 36upx;
  }
  .back-btn{
    display: flex;
    margin-left: 30upx;
  }
  .title{
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
  }
}
</style>