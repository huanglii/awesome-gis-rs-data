import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tag extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    onChange: PropTypes.func,
    checked: PropTypes.bool
  }

  static defaultProps = {
    color: '#FFF',
    fontSize: 12,
    checked: false
  }

  handleClick = () => {
    const { checked, onChange } = this.props
    if (onChange) {
      onChange(!checked)
    }
  }

  render () {
    const { checked, label, color, fontSize } = this.props
    const style = {
      fontSize,
      borderColor: color,
      backgroundColor: checked ? color : 'transparent'
    }
    return (
      <span
        className='tag-item'
        style={style}
        onClick={this.handleClick}
      >
        {label}
      </span>
    )
  }
}

export default Tag
