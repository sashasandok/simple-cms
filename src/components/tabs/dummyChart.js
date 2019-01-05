// react
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// styles
import './styles/dummyChart.css'

class DummyChart extends Component {
  render() {
    return (
      <DocumentTitle title="Dummy Chart">
        <div className="chart">
          <div>Chart</div>
        </div>
      </DocumentTitle>
    )
  }
}

export default DummyChart
