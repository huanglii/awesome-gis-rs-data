import React, { Component } from 'react'
import { Layout } from 'antd'

import './index.less'

const { Footer } = Layout

class FooterBar extends Component {
  render () {
    return (
      <Footer className='footer-bar'>
        <span>© 2020 by <a href='https://github.com/huanglii' rel='noopener noreferrer' target='_blank'>huangli</a></span>
        <br />
        <span>总访问量：<span id='busuanzi_value_page_pv' /> 次</span>
      </Footer>
    )
  }
}

export default FooterBar
