export function getDate(idcard) {
  const birth = idcard.substring(6, 10) + "-" + idcard.substring(10, 12) + "-" + idcard.substring(12, 14)
  return birth;
}