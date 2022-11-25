// 检查session
export const wxCheckSession = function() {
  return new Promise((resolve, reject) => {
    wx.checkSession({
      success(res) {
        resolve(res);
      },
      fail(res) {
        reject(res);
      },
    });  
  });
}

// 登录
export const wxLogin = function() {
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        resolve(res);
      },
      fail(res) {
        reject(res);
      },
    });
  });
}

// 获取用户当前设置
export const wxGetSetting = function() {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success(res) {
        resolve();
      },
      fail(res) {
        reject(res);
      },
    });
  });
}

// 获取用户信息
export const wxGetUserInfo = function() {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success(res) {
        resolve(res);
      },
      fail(res) {
        reject(res);
      },
    })
  });
}
// 显示转发
export const navigateToMiniProgram = function() {
  return new Promise((resolve, reject) => {
    wx.navigateToMiniProgram({
      success(res) {
        resolve(res);
      },
      fail(res) {
        reject(res);
      },
    })
  });
}

// 显示转发
export const showShareMenu = function() {
  return new Promise((resolve, reject) => {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  });
}