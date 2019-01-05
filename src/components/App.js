// react
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  Link,
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import { getTabs } from '../actions/tabs-actions'

// utils
import _ from 'lodash'

// styles
import './App.css'

// route components
import NoFound from './NoFound/NoFound'
import DummyTable from './Tabs/DummyTable'
import DummyChart from './Tabs/DummyChart'
import DummyList from './Tabs/DummyList'

import Loader from './Loader/Loader'

class App extends Component {
  state = {
    load: true,
  }

  componentWillMount = () => {
    setTimeout(() => this.setState({ load: false }), 4000)
  }

  componentDidMount = () => {
    this.props.getTabs()
  }

  render() {
    const { tabs } = this.props

    const sortedLinks = _.sortBy(tabs, i => {
      return i.order
    })

    const headerLinks = _.map(sortedLinks, tab => {
      return (
        <Link key={tab.order} to={`/${tab.id}`} className="app-header-item">
          <div>{tab.title}</div>
        </Link>
      )
    })

    return this.state.load ? (
      <Loader />
    ) : (
      <div className="app">
        <Router>
          <div>
            <header className="app-header">{headerLinks}</header>
            <div className="content">
              <Switch>
                <Route path="/dummyTable" component={DummyTable} />
                <Route path="/dummyChart" component={DummyChart} />
                <Route path="/dummyList" component={DummyList} />
                <Redirect from="/" to="/dummyList" />
                <Route component={NoFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
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
)(App)
