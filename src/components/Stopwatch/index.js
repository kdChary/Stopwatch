import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0, isWatchRunning: false}

  componentWillUnmount() {
    clearInterval(this.startWatchInterval)
  }

  onStopWatch = () => {
    clearInterval(this.startWatchInterval)
    this.setState({isWatchRunning: false})
  }

  onResetWatch = () => {
    clearInterval(this.startWatchInterval)
    this.setState({isWatchRunning: false, timeInSeconds: 0})
  }

  runWatch = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onStartWatch = () => {
    this.startWatchInterval = setInterval(this.runWatch, 1000)
    this.setState({isWatchRunning: true})
  }

  renderStopWatch = () => {
    const {timeInSeconds, isWatchRunning} = this.state
    const getTime = () => {
      const seconds = Math.floor(timeInSeconds % 60)
      const minutes = Math.floor(timeInSeconds / 60)
      const stringifySeconds = seconds > 9 ? seconds : `0${seconds}`
      const stringifyMinutes = minutes > 9 ? minutes : `0${minutes}`
      return `${stringifyMinutes}:${stringifySeconds}`
    }
    const time = getTime()

    return (
      <div className="watch-card">
        <div className="watch-body">
          <img
            className="watch-image"
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
          />
          <p className="watch-title">Timer</p>
        </div>
        <h1 className="watch-time">{time}</h1>
        <div className="watch-controls">
          <button
            type="button"
            className="button start"
            onClick={this.onStartWatch}
            disabled={isWatchRunning}
          >
            Start
          </button>
          <button
            type="button"
            className="button stop"
            onClick={this.onStopWatch}
          >
            Stop
          </button>
          <button
            type="button"
            className="button reset"
            onClick={this.onResetWatch}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="stopwatch-section">
          <h2 className="app-title">Stopwatch</h2>
          {this.renderStopWatch()}
        </div>
      </div>
    )
  }
}

export default Stopwatch
