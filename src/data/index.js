import array from 'lodash/array'
import randomColor from 'randomcolor'
import pinyin from 'pinyin'

import { sort, sortBy } from '@/util'
import data from './data.json'

function generateTagColorMap (tags) {
  const tagColorMap = {}
  const count = tags.length
  const colors = randomColor({ luminosity: 'dark', count })
  for (let i = 0; i < tags.length; i++) {
    tagColorMap[tags[i]] = colors[i]
  }
  return tagColorMap
}

const tags = data.map(item => {
  return item.tags
})
// 唯一标签
const uniqueTags = array.union(...tags)
// 标签唯一颜色
const tagColorMap = generateTagColorMap(uniqueTags)

// 排序
sort(uniqueTags)
sortBy(data, 'title')

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
    hanziTxt,
    pinyinTxt
  }
})

export default {
  data: distData,
  tags: uniqueTags,
  tagColorMap
}
