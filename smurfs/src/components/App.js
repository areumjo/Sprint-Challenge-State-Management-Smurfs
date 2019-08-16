import React, { Component } from "react";
import { connect } from 'react-redux';

import { getData } from '../actions';

import "./App.css";
import AddForm from "./AddForm";
import Smurf from "./Smurf";

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
    return (
      <>
        <h1 className="header">SMURFS in the village</h1>
        <div className="App">
          <div className="left-container">
            <h3>Who is living in thie town?</h3>
            <button onClick={this.props.getData}>
              Let's get some smurfs!
            </button>
            <div>
              {this.props.smurfs.map(a=><Smurf name={a.name} key={a.id} height={a.height} age={a.age}/>)}
          </div>
          </div>
          <div className="right-container">
            <AddForm handleChange={this.handleChange}/>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getData })(App);
