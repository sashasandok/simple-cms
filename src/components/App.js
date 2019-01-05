// react
import React, { Component } from 'react'
// import PropTypes from 'prop-types'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import { getTabs } from '../actions/tabs-actions'

// styles
import './App.css'

class App extends Component {
  componentDidMount = () => {
    this.props.getTabs()
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="app-header-item">DUMMY TABLE</div>
          <div className="app-header-item">DUMMY CHART</div>
          <div className="app-header-item">DUMMY LIST</div>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tabs: state.items,
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
)(App)
