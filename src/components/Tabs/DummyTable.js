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
import './styles/DummyTable.css'

class DummyTable extends Component {
  render() {
    const { tabs } = this.props
    const orderedRaw = _.sortBy(tabs, i => i.order)
    const raw = _.map(orderedRaw, item => {
      return (
        <tr key={item.id}>
          <td>{item.order}</td>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.path}</td>
        </tr>
      )
    })
    return (
      <DocumentTitle title="Dummy Table">
        <div className="table">
          <table>
            <thead>
              <tr>
                <td>order</td>
                <td>id</td>
                <td>title</td>
                <td>path</td>
              </tr>
            </thead>
            <tbody>{raw}</tbody>
          </table>
        </div>
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
)(DummyTable)
