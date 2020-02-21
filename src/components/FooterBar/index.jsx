import React, { Component } from 'react'
import { Layout, Divider } from 'antd'

import './index.less'

const { Footer } = Layout

class FooterBar extends Component {
  render () {
    return (
      <Footer className='footer-bar'>
        <span>© 2020 by <a href='https://github.com/huanglii' rel='noopener noreferrer' target='_blank'>huangli</a></span>
        <Divider type='vertical' />
        <span>访问：<span id='busuanzi_value_page_pv' /> 次</span>
        {/* <br />
        <span><a href='http://www.beian.miit.gov.cn' target='_blank' rel='noopener noreferrer'>粤ICP备19052372号</a></span> */}
      </Footer>
    )
  }
}

export default FooterBar
