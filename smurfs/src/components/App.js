import React, { Component } from "react";
import { connect } from 'react-redux';

import { getData } from '../actions';

import "./App.css";
import AddForm from "./AddForm";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', age: '', height: '' }
  }

  handleChange = e => {
    //console.log('handleChange working?')
    this.setState({ [e.target.name]: e.target.value })
  }

  // addSmurf = e => {
  //   console.log('addData btn clicked ', this.state);
  //   this.props.addData(this.state)
  //   e.preventDefault();
  //   //this.setState()
  // }

  render() {
    console.log(this.props.smurfs)
    console.log('state work?: ', this.state)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <button onClick={this.props.getData}>
            Let's get some smurfs!
        </button>
        <AddForm handleChange={this.handleChange}/>
        <div>
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
