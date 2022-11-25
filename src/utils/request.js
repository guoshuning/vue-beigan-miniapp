/*
 * @Author: GuoShuning
 * @Date: 2022-01-12 09:19:35
 * @LastEditors: GuoShuning
 * @LastEditTime: 2022-09-14 14:30:13
 * @Description:
 */

const request = function (obj) {
  let {
    url,
    data,
    header,
    method,
    dataType,
    responseType,
    success,
    fail,
    complete,
  } = obj;

  uni.showLoading({
    title: '加载中',
    mask: true,
  });
  // #ifdef MP-WEIXIN
  let cookies = uni.getStorageSync('cookies');
  if (cookies) {
    header = {
      Cookie: uni.getStorageSync('cookies'),
    };
  }
  uni.request({
    url: `https://twmy.judaiot.com/${url}` || '',
    data: data || '',
    header: header,
    method: method || 'get',
    dataType: dataType || '',
    responseType: responseType || '',
    success: (res) => {
      uni.hideLoading();
      const { data, statusCode, header } = res;
      if (res.cookies.length !== 0 && url === '') {
        const oldSessionStr = uni.getStorageSync('cookies');
        let sessionStr = '';
        console.log('oldSessionStr' + oldSessionStr);
        for (let i = 0; i < res.cookies.length; i++) {
          let cookieStr = res.cookies[i];
          if (/^JSESSIONID=/.test(cookieStr)) {
            sessionStr = cookieStr;
            break;
            // JSESSIONID = cookieStr.split('=')[1];
          }
        }
        console.log('sessionStr' + sessionStr);
        if (sessionStr && oldSessionStr !== sessionStr) {
          uni.setStorageSync('cookies', sessionStr);
        }
      }

      if (statusCode == '200') {
        success && success(data);
      }
      if (statusCode == '480') {
        const { msg, code } = data;
        if (code == '100002') {
          // uni.navigateTo({
          //   url:'/pages/user/login'
          // })
        }
        uni.showToast({
          title: '服务器异常，请稍后再试',
          duration: 2000,
          icon: 'none',
        });
      }
      if (statusCode == '500') {
        uni.showToast({
          title: '服务器异常，请稍后再试',
          duration: 2000,
          icon: 'none',
        });
      }
    },
    fail: () => {
      uni.hideLoading();
      fail && fail();
    },
    complete: () => {
      complete && complete();
    },
  });
  // #endif
};

export default request;
