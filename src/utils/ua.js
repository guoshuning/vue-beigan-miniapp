const ua = navigator.userAgent.toLowerCase();

export const isWeixin = function () { //判断是否是微信
  return ua.match(/MicroMessenger/i) == "micromessenger";
};

// 判断是否是企业微信
export const isWorkWeixin = function () {
  return ua.match(/wxwork/i) == 'wxwork';
}