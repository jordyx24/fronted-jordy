import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import AddItems from './add-to-list';
import ThoughsBox from './thoughs-box';

export default class App extends Component {
  render() {
    return (
      <div className='App'>

        <AddItems />
        <ThoughsBox />
      


      </div>
    );
  }
}
