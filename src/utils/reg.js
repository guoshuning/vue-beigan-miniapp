export function idValid(id) {
  return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test(id)
}
// 手机号验证
export function telValid(tel) {
  return /^1[3456789]\d{9}$/.test(tel)
}
// 固话验证
export function fixValid(tel){
  // ^(\d{3,4}-)\d{7,8}$
  return /^0\d{2,3}-?\d{7,8}$/.test(tel)
}
// 手机号固话一起
export function lxfsValid(val) {
  let resutl = true
  resutl = /^0\d{2,3}-?\d{7,8}$/.test(val)
  resutl = /^1[3456789]\d{9}$/.test(val)
  return resutl
}
// 邮箱验证
export function emailValid(email) {
  return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email)
}
// 社会信用代码
export function companyCodeValid(val) {
  return /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/.test(val)
}

// 起薪线
export function qxxValid(val) {
  let resutl = true
  resutl = /^(?:[1-9])(?:[0-9]*)00$/.test(val)
  resutl = val > 1500
  return resutl
}

