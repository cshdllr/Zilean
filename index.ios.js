'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TimeDisplay from './src/TimeDisplay';

import Style from './src/Style';


class zilean extends Component {
  render() {
    return (
      <View style={Style.container}>
        <TimeDisplay />
        <Text style={Style.welcome}>
          This is the time.
        </Text>
        <Text style={Style.instructions}>
          What will you do with it?
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('zilean', () => zilean);
