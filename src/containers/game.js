import React from 'react';
import { Component } from 'react';
import { getPhotos } from '../actions/index';



export default class Game extends Component {
  componentWillMout(){
    this.props.getPhotos()
  }

  render() {
    return (
      <div>
        <h1> Let's Play </h1>
      </div>
    );
  }
}
