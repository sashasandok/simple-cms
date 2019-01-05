// react
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import { getTabs } from '../../actions/tabs-actions'

// utils
import _ from 'lodash'

// styles
import './styles/dummyList.css'

class DummyList extends Component {
  componentDidMount = () => {
    this.props.getTabs()
  }

  render() {
    const { tabs } = this.props

    const orderedList = _.sortBy(tabs, i => i.order)
    const list = _.map(orderedList, item => {
      return (
        <ul key={item.id}>
          <li>order: {item.order}</li>
          <li>id: {item.id}</li>
          <li>title: {item.title}</li>
          <li>path: {item.path}</li>
          <hr />
        </ul>
      )
    })
    return (
      <DocumentTitle title="Dummy List">
        <div className="list">{list}</div>
      </DocumentTitle>
    )
  }
}

const mapStateToProps = state => ({
  tabs: state.tabs.items,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTabs,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DummyList)
