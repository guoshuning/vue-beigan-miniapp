export const qywxLogin = function() {
  return new Promise((resolve, reject) => {
    wx.qy.login({
      success(res) {
        resolve(res);
      },
      fail(res) {
        reject(res);
      },
    });
  });
}