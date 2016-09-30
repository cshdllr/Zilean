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
    let h0 = moment().format('h');
    let m0 = moment().format('mm');
    return (
      <Text style={Style.time}>{h0}:{m0}</Text>
    )
  }
}
