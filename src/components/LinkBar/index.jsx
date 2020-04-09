import React, { Component } from 'react'
import { GithubOutlined, MailOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Modal, Tooltip } from 'antd'
import config from '@/config'
import './index.less'

const { githubUrl, dataUrl } = config

class LinkBar extends Component {
  handleContributeClick () {
    Modal.info({
      title: '如果您有精彩的数据网站，欢迎投稿',
      content: (
        <p style={{ margin: '36px 0 0' }}>
          <a href={dataUrl} rel='noopener noreferrer' target='_blank'>
            <GithubOutlined /> GitHub
          </a>
          <a href='mailto:849151701@qq.com' style={{ marginLeft: '1.5em' }}>
            <MailOutlined /> 849151701@qq.com
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
            <GithubOutlined />
          </a>
        </Tooltip>
        <Tooltip placement='bottom' title='欢迎投稿'>
          <PlusCircleOutlined onClick={this.handleContributeClick} />
        </Tooltip>
      </div>
    )
  }
}

export default LinkBar
