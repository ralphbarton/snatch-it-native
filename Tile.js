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
	height: 40,
	width: 40,
    backgroundColor: 'rgb(54,161,235)',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: '#777',
    borderWidth: 2,
    borderRadius: 7,
  },
  text: {
    color: 'yellow',
    fontSize: 30,
  },

});

//Finally, make this the exported module...
module.exports = Tile;
