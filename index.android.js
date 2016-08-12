import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MainGame = require('./MainGame');

var SnatchRN = React.createClass({
  render: function() {
    return (
      <MainGame/>
    );
  },
});

AppRegistry.registerComponent('SnatchRN', () => SnatchRN);
