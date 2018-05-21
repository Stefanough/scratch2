import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TxtBoxContainer from './TxtBoxContainer.js';

class App extends Component {

  render() {
    return (
      <div>
        <div>
          hi there whatever.
      </div>
        <div>
          <TxtBoxContainer />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
