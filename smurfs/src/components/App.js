import React, { Component } from "react";
import { connect } from 'react-redux';

import { getData } from '../actions';

import "./App.css";

class App extends Component {
  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          <button onClick={this.props.getData}>
            Let's get some smurfs!
          </button>
          {this.props.smurfs.map(a=>a.name)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getData })(App);
