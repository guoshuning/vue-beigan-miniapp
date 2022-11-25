// request promise
export function wxPromisify(fn) {
  return function(obj = {}) {
      //保存了一些状态信息   执行传入的函数  执行传入的函数时会传入resolve和reject，这两个又是函数
      return new Promise((resolve, reject) => {
          obj.success = function(res) {
              //成功
              resolve(res)
          }
          obj.fail = function(res) {
              //失败
              reject(res)
          }
          fn(obj)
      })
  }
}
