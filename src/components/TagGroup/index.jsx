import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'

import { Consumer } from '@/context'

import './index.less'

class TagGroup extends Component {
  static propTypes = {
    tags: PropTypes.array
  }

  static defaultProps = {
    tags: []
  }

  render () {
    const { tags } = this.props
    return (
      <Consumer>
        {({ tagColorMap }) => (
          <div className='tag-group'>
            {
              tags.map((item, index) => (
                <Tag color={tagColorMap[item]} key={index}>
                  {item}
                </Tag>
              ))
            }
          </div>
        )}
      </Consumer>
    )
  }
}

export default TagGroup
