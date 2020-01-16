import array from 'lodash/array'
import randomColor from 'randomcolor'

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

export default {
  data,
  tags: uniqueTags,
  tagColorMap
}
