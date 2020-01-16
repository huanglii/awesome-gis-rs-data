import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import array from 'lodash/array'

import DataItem from '../DataItem'
import './index.less'

class DataList extends Component {
  static propTypes = {
    data: PropTypes.array,
    filterText: PropTypes.string,
    filterTags: PropTypes.array
  }

  render () {
    const { data, filterText, filterTags } = this.props
    const filterData = data.filter(item => {
      const { title, description, tags } = item
      // 转小写
      const lcTitle = title.toLowerCase() // 标题
      const lcDescription = description.toLowerCase() // 概要
      const lcTagsText = tags.join().toLowerCase() // 标签
      const lcFilterText = filterText.toLowerCase()
      const hasTag = array.intersection(tags, filterTags).length > 0
      const hasTxt = lcTitle.includes(lcFilterText) || lcDescription.includes(lcFilterText) || lcTagsText.includes(lcFilterText)
      return hasTag && hasTxt
    })

    return (
      <List
        className='data-list'
        grid={{
          gutter: 24,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3
        }}
        dataSource={filterData}
        renderItem={item => (
          <List.Item>
            <DataItem data={item} />
          </List.Item>
        )}
      />
    )
  }
}

export default DataList
