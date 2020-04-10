import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TagCloud from '../TagCloud'

import './index.less'

import { tags } from '@/config/data.json'

class TagGroup extends Component {
  static propTypes = {
    filter: PropTypes.array,
    onChange: PropTypes.func
  }

  static defaultProps = {
    filter: []
  }

  render () {
    const { filter } = this.props
    return (
      <TagCloud
        minSize={16}
        maxSize={36}
        tags={tags}
        filter={filter}
        onChange={(checkedTags) => this.props.onChange(checkedTags)}
      />
    )
  }
}

export default TagGroup
