import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class Tile extends Component {

    render() {
	return (
		<View style={styles.tile}>
		<Text style={styles.text}>{this.props.letter}</Text>		
		</View>
	);
    }
}



var styles = StyleSheet.create({
  tile: {
//    position: 'absolute',
	height: 36,
	width: 36,
    backgroundColor: 'rgb(54,161,235)',
    alignItems: 'center', // this is H-align
    justifyContent: 'center',//this is V-align...
    borderStyle: 'solid',
    borderColor: '#777',
    borderWidth: 2,
    borderRadius: 5,
      margin:2,

  },
  text: {
    color: 'yellow',
    fontSize: 31,
  },

});

//Finally, make this the exported module...
module.exports = Tile;
