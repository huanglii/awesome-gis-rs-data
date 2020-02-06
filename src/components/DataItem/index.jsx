import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Avatar, Typography, message } from 'antd'

import TagGroup from '../TagGroup'
import './index.less'

const { Title, Paragraph } = Typography

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
    const { title, description, tags, link, color } = this.props.data
    return (
      <Card className='data-item' hoverable>
        <div className='item-avatar'>
          <Avatar size={48} style={{ backgroundColor: color }}>{this.subTitle(title)}</Avatar>
        </div>
        <div className='item-title'>
          <Title
            level={4}
            ellipsis
            onClick={() => this.handleItemClick(link)}
          >
            {title}
          </Title>
        </div>
        <Paragraph className='item-desc' ellipsis={{ rows: 2, expandable: true }}>{description}</Paragraph>
        <TagGroup tags={tags} />
      </Card>
    )
  }
}

export default DataItem
