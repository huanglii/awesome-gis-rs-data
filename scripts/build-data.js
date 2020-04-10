const fs = require('fs')

const array = require('lodash/array')
const randomColor = require('randomcolor')
const pinyin = require('pinyin')

const data = require('../config/data.json')

function generateTagColorMap (tags) {
  const tagColorMap = {}
  const count = tags.length
  const colors = randomColor({ luminosity: 'dark', count })
  for (let i = 0; i < tags.length; i++) {
    tagColorMap[tags[i]] = colors[i]
  }
  return tagColorMap
}

/**
 * 标签处理
 */

// 所有标签（含重复）
const tagsAll = array.flatten(data.map(item => {
  return item.tags
}))
const tagMap = tagsAll.reduce((prev, next) => prev.set(next, (prev.get(next) || 0) + 1), new Map())
// 唯一标签
const uniqueTags = Array.from(tagMap.keys())
// 标签唯一颜色
const tagColorMap = generateTagColorMap(uniqueTags)

const tags = []
for (const [key, value] of tagMap) {
  tags.push({
    value: key,
    count: value,
    color: tagColorMap[key]
  })
}

// 处理搜索文字和拼音
const distData = data.map(item => {
  const { title, description, tags } = item
  // 汉字
  const hanziTxt = `${title}${description}${tags.join('')}`.toLowerCase()
  // 拼音
  const pinyinTxt = pinyin(title, {
    style: pinyin.STYLE_NORMAL
  }).join(' ').toLowerCase()
  return {
    ...item,
    color: randomColor({ luminosity: 'bright' }),
    hanziTxt,
    pinyinTxt
  }
})

const result = {
  data: distData,
  tags,
  uniqueTags,
  tagColorMap
}

fs.writeFileSync('src/config/data.json', JSON.stringify(result))
