import React, { Component } from 'react'
import { Layout, Tooltip, Icon, Divider } from 'antd'

import './index.less'

const { Footer } = Layout

class FooterBar extends Component {
  render () {
    return (
      <Footer className='footer-bar'>
        <span>© 2020 by <a href='https://github.com/huanglii' rel='noopener noreferrer' target='_blank'>huangli</a></span>
        <br />
        <Tooltip placement='top' title='访问数'>
          <span><Icon type='user' /><span id='busuanzi_value_site_pv' /></span>
        </Tooltip>
        <Divider type='vertical' />
        <Tooltip placement='top' title='访问量'>
          <span><Icon type='eye' /><span id='busuanzi_value_site_uv' /></span>
        </Tooltip>
      </Footer>
    )
  }
}

export default FooterBar
