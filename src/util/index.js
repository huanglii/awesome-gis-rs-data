export function sort (arr) {
  arr.sort((a, b) => a.localeCompare(b))
}

export function sortBy (arr, value) {
  arr.sort((a, b) => a[value].localeCompare(b[value]))
}

export function includes (hanziTxt, pinyinTxt, key) {
  // 去掉 空格 和 \
  const hztxt = hanziTxt.replace(/(\s|\\)/ig, '')
  const pytxt = pinyinTxt.replace(/(\s|\\)/ig, '')
  // 根据拼音提取首字母
  const initialTxt = pinyinTxt.match(/\b\w/ig).join('')
  return hztxt.includes(key) || pytxt.includes(key) || initialTxt.includes(key)
}
