import React, { Component } from 'react'
import { Modal, Tooltip, Icon } from 'antd'
import config from '@/config'
import './index.less'

const { packageName } = config
const githubUrl = `https://github.com/huanglii/${packageName}`
const dataUrl = `https://github.com/huanglii/${packageName}/blob/master/src/data/data.json`

class LinkBar extends Component {
  handleContributeClick () {
    Modal.info({
      title: '如果您有精彩的数据网站，欢迎投稿',
      content: (
        <p style={{ margin: '36px 0 0' }}>
          <a href={dataUrl} rel='noopener noreferrer' target='_blank'>
            <Icon type='github' /> GitHub
          </a>
          <a href='mailto:849151701@qq.com' style={{ marginLeft: '1.5em' }}>
            <Icon type='mail' /> 849151701@qq.com
          </a>
        </p>
      )
    })
  }

  render () {
    return (
      <div className='link-bar'>
        <Tooltip placement='bottom' title='GitHub'>
          <a href={githubUrl} rel='noopener noreferrer' target='_blank'>
            <Icon type='github' />
          </a>
        </Tooltip>
        <Tooltip placement='bottom' title='欢迎投稿'>
          <Icon type='plus-circle' onClick={this.handleContributeClick} />
        </Tooltip>
      </div>
    )
  }
}

export default LinkBar
