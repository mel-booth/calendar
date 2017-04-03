import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addThing } from '../actions'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  addThing() {
    console.log('this', this)
    this.props.addThing(this.state.text)
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Don't forget to do this stuff. Ok?
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input className="form-control"
            placeholder="Type a thing here..."
            onChange={event => this.setState({text: event.target.value})}
            />
          </div>
          <button
          type="button"
          className="btn btn-success"
          onClick={() => this.addThing}
          >
          Add it!
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, { addThing })(App)
