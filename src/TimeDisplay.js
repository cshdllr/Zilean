'use strict';

import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import moment from 'moment/src/moment';

import Style from './Style';

class Time extends React.Component {
  static defaultProps = {
    hour: 12,
    minute: 12,
  }

  _onTimeTap() {
    console.log("lol")
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onTimeTap()}>
        <Text style={Style.time}>{this.props.hour}:{this.props.minute}</Text>
      </TouchableHighlight>
    );
  }
}

export default class TimeDisplay extends React.Component {

  getInitialHour() {
    return moment().format('h');
  }

  getInitialMinute() {
    let m0 = moment().format('mm');

    if (m0 > 15) {
      let m1 = 55;
      return m1;
    } else {
      let m1 = 25;
      return m1;
    }
  }

  render() {
    return (
      <View>
          <Time hour={this.getInitialHour()} minute={this.getInitialMinute()}/>
      </View>
    )
  }
}
