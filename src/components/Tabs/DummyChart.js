// react
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

// chart
import { BarChart } from 'react-easy-chart'

// styles
import './styles/DummyChart.css'

class DummyChart extends Component {
  render() {
    return (
      <DocumentTitle title="Dummy Chart">
        <div className="chart">
          <div>React Easy Chart</div>
          <BarChart
            colorBars
            height={150}
            width={450}
            data={[
              { x: 'A', y: 20 },
              { x: 'B', y: 30 },
              { x: 'C', y: 40 },
              { x: 'D', y: 20 },
              { x: 'E', y: 40 },
              { x: 'F', y: 25 },
              { x: 'G', y: 5 },
            ]}
          />
        </div>
      </DocumentTitle>
    )
  }
}

export default DummyChart
