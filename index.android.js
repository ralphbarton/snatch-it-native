import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Tiger = require('./Tiger');

var SnatchRN = React.createClass({
  render: function() {
    return (
      <Tiger/>
    );
  },
});

AppRegistry.registerComponent('SnatchRN', () => SnatchRN);
