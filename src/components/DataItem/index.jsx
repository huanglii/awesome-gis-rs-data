import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Avatar, Typography, message } from 'antd'

import DataTag from '../DataTag'
import './index.less'

const { Title } = Typography

class DataItem extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  handleItemClick (url) {
    url ? window.open(url, '_blank') : message.warning('暂无链接，欢迎提交', 1)
  }

  subTitle (title) {
    let res = ''
    let length = 0
    for (const i in title) {
      const char = title[i]
      const isChineseChar = /[\u4e00-\u9FA5]+/.test(char)
      res += char
      length += isChineseChar ? 2 : 1
      if (length >= 4) {
        break
      }
    }
    return res
  }

  render () {
    const { id, title, description, tags, link, color } = this.props.data
    return (
      <Card className='data-item' hoverable>
        <div className='data-item-cover'>
          <img
            alt={title}
            src={'./images/' + id + '.jpg'}
          />
        </div>
        <div className='data-item-main'>
          <div className='item-avatar'>
            <Avatar size={48} style={{ backgroundColor: color }}>{this.subTitle(title)}</Avatar>
          </div>
          <div className='item-title'>
            <Title
              level={4}
              ellipsis
              title={title}
              onClick={() => this.handleItemClick(link)}
            >
              {title}
            </Title>
          </div>
          <span className='item-desc' title={description}>{description}</span>
          <DataTag tags={tags} />
        </div>
      </Card>
    )
  }
}

export default DataItem
