import React, { Component } from 'react'

import { Consumer } from '@/context'
import IconFont from '../IconFont'

import './index.less'

class Slogan extends Component {
  render () {
    return (
      <Consumer>
        {({ dataCount }) => (
          <div className='slogan'>
            <h1><IconFont type='icon-earth' /><span>Awesome GIS / RS Data</span></h1>
            <h3>已收录<span className='count'>{dataCount}</span>条</h3>
          </div>
        )}
      </Consumer>
    )
  }
}

export default Slogan
