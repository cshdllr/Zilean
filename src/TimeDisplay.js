'use strict';

import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text
} from 'react-native';
import moment from 'moment/src/moment';

import Style from './Style';

export default class TimeDisplay extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this._onTimeTap()}>
        <Text style={Style.time}>{this.getInitialTime()}</Text>
      </TouchableHighlight>
    )
  }

  getInitialTime() {
    let h0 = moment().format('h');
    let m0 = moment().format('mm');

    if (m0 > 15) {
      let m1 = 55;
      let h1 = h0;
      return h1 + ":" + m1;
    } else {
      let m1 = 25;
      let h1 = h0;
      return h1 + ":" + m1;
    }
  }

  _onTimeTap() {
    console.log("lol")
  }
}
