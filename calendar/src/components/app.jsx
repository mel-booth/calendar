import React, {Component} from 'react'

class App extends Component {
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
            />
          </div>
          <button
          type="button"
          className="btn btn-success"
          >
          Add it!
          </button>
        </div>
      </div>
    )
  }
}

export default App
