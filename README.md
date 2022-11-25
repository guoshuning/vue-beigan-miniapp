# uniapp

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

## 字体图标

使用方法: 类名 `iconfont` + unicode编码(例如: `&#xe8a0;`)

项目中涉及到的图标，优先使用字体图标。

```
<view class="iconfont">&#xe8a0;</view>
```

### 如何查看字体图标及对应的unicode编码

在浏览器中打开 `/src/static/fonts/demo_index.html`，即可预览图标。

## 切换npm源

```
npm set registry http://47.93.237.190:4873
```

## 扫描二维码

```
scanCallback: function(url) {

}
```

## 业务组件

### wHeader 头部导航

#### Usage:

```
<template>
  <view>
    <w-header></w-header>
  </view>
</template>
<script>
import wHeader from '@/components/header/wHeader'
export default {
  components: {
    wHeader
  }
}
</script>
```
#### 参数：

```
bgColor: { // 背景颜色
  type: String
},
titleColor: {  // 标题颜色
  type: String
},
backColor: { // 返回按钮字体颜色
  type: String
},
borderStyle: { // 下边框颜色，不需要写 borderStyle="none"
  type: String,
  default: '1px solid #eee'
},
title: {
  type: [String, Number], // 标题
  default: '我是标题'
},
optionVisible: { // 右侧区域是否可见
  type: Boolean,
  default: true
}
```


