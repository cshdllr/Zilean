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
    time: ''
  }

  _onTimeTap() {
    console.log("lol")
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._onTimeTap()}>
          <Text style={Style.time}>
            {this.props.time}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default class TimeDisplay extends React.Component {

  getInitialTime() {
    return moment().format('h:mm A');
  }

  render() {
    return (
      <View>
          <Time time={this.getInitialTime()} />
      </View>
    )
  }
}
