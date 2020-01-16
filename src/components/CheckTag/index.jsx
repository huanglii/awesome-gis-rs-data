import React, { Component } from 'react'
import PropTypes from 'prop-types'
import array from 'lodash/array'
import { Tag } from 'antd'

import './index.less'

class TagGroup extends Component {
  static propTypes = {
    tags: PropTypes.array,
    filter: PropTypes.array,
    onChange: PropTypes.func
  }

  static defaultProps = {
    tags: [],
    filter: []
  }

  handleTagsChange = (tag, checked) => {
    const { filter } = this.props
    const checkedTags = checked ? array.union(filter, [tag]) : array.without(filter, tag)

    this.props.onChange(checkedTags)
  }

  render () {
    const { tags, filter } = this.props
    return (
      <div className='check-tag-group'>
        {
          tags.map((item, index) =>
            <Tag.CheckableTag
              key={index}
              color='red'
              checked={filter.indexOf(item) > -1}
              onChange={checked => this.handleTagsChange(item, checked)}
            >
              {item}
            </Tag.CheckableTag>
          )
        }
      </div>
    )
  }
}

export default TagGroup
