import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tooltip, Input } from 'antd'

import Slogan from '../Slogan'
import CheckTag from '../CheckTag'
import LinkBar from '../LinkBar'
import IconFont from '../IconFont'
import './index.less'

class SearchBar extends Component {
  static propTypes = {
    tags: PropTypes.array,
    onFilterTextChange: PropTypes.func,
    onFilterTagsChange: PropTypes.func
  }

  static defaultProps = {
    tags: []
  }

  state = {
    filterText: '',
    filterTags: []
  }

  handleFilterTextChange = e => {
    const { value: filterText } = e.target
    this.setState({ filterText })
    this.props.onFilterTextChange(filterText)
  }

  handleFilterTagsChange = (filterTags) => {
    this.setState({ filterTags })
    this.props.onFilterTagsChange(filterTags)
  }

  handleClearFilterTags = () => {
    this.setState({
      filterText: '',
      filterTags: []
    })
    this.props.onFilterTextChange('')
    this.props.onFilterTagsChange([])
  }

  render () {
    const { tags } = this.props
    const { filterText, filterTags } = this.state
    return (
      <div className='search-bar'>
        <LinkBar />
        <div className='search-bar-container'>
          <Slogan />
          <div className='search-text'>
            <Input
              className='text-input'
              value={filterText}
              size='large' placeholder='搜索...' allowClear
              onChange={this.handleFilterTextChange}
            />
          </div>
          <div className='search-tag'>
            <CheckTag tags={tags} filter={filterTags} onChange={this.handleFilterTagsChange} />
          </div>
          <Tooltip placement='bottom' title='清空'>
            <IconFont className='search-clear' type='icon-clear' onClick={this.handleClearFilterTags} />
          </Tooltip>
        </div>
      </div>
    )
  }
}

export default SearchBar
