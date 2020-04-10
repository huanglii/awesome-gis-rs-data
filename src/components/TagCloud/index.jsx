import React, { Component } from 'react'
import PropTypes from 'prop-types'
import array from 'lodash/array'

import Tag from './Tag'

import './index.less'

function fontSizeConverter (count, min, max, minSize, maxSize) {
  if (max - min === 0) {
    return Math.round((minSize + maxSize) / 2)
  }
  return Math.round(
    ((count - min) * (maxSize - minSize)) / (max - min) + minSize
  )
}

class TagCloud extends Component {
  static propTypes = {
    tags: PropTypes.array,
    filter: PropTypes.array,
    maxSize: PropTypes.number,
    minSize: PropTypes.number,
    onChange: PropTypes.func
  }

  static defaultProps = {
    tags: [],
    filter: [],
    maxSize: 16,
    minSize: 36
  }

  handleTagsChange = (tag, checked) => {
    const { filter } = this.props
    const checkedTags = checked ? array.union(filter, [tag]) : array.without(filter, tag)
    this.props.onChange(checkedTags)
  }

  render () {
    const { tags, filter, maxSize, minSize } = this.props
    const counts = tags.map(tag => tag.count)
    const min = Math.min(...counts)
    const max = Math.max(...counts)
    const tagsElem = tags.map((tag, index) => {
      const { value, count, color } = tag
      const fontSize = fontSizeConverter(count, min, max, minSize, maxSize)
      return (
        <Tag
          key={index}
          label={value}
          color={color}
          fontSize={fontSize}
          checked={filter.includes(value)}
          onChange={checked => this.handleTagsChange(value, checked)}
        />
      )
    })

    return (
      <div className='tag-cloud'>
        {tagsElem}
      </div>
    )
  }
}

export default TagCloud
