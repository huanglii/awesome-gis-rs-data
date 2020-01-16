import React, { Component } from 'react'
import { BackTop } from 'antd'

import { Provider } from '@/context'
import SearchBar from '@/components/SearchBar'
import DataList from '@/components/DataList'

import staticData from '../data'
const { data, tags, tagColorMap } = staticData

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      filterTags: tags,
      uniqueTags: tags,
      tagColorMap: tagColorMap
    }
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText
    })
  }

  handleFilterTagsChange = (filterTags) => {
    // 如果过滤标签为 []，则取所有标签
    this.setState({
      filterTags: filterTags.length > 0 ? filterTags : this.state.uniqueTags
    })
  }

  render () {
    const { filterText, filterTags, uniqueTags, tagColorMap } = this.state
    const dataCount = data.length

    return (
      <Provider value={{ tagColorMap, dataCount }}>
        <div className='app'>
          <SearchBar
            tags={uniqueTags}
            onFilterTextChange={this.handleFilterTextChange}
            onFilterTagsChange={this.handleFilterTagsChange}
          />
          <DataList data={data} filterText={filterText} filterTags={filterTags} />
          <BackTop />
        </div>
      </Provider>
    )
  }
}

export default App
