/* eslint-disable no-unused-expressions */

import React, { Component } from 'react'
import Hover from './components/Hover'
import Info from './components/Info'
import TrendChart from './components/TrendChart'
import DailyChart from './components/DailyChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hover>
          {hovering => <Info hovering={hovering} height="16" id="250" />}
        </Hover>
        <Hover>{hovering => <TrendChart hovering={hovering} id={110} />}</Hover>
        <Hover>{hovering => <DailyChart hovering={hovering} id={128} />}</Hover>
      </div>
    )
  }
}

export default App
