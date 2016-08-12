import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

/*
class krButton extends Component {

    render() {
	return (
	    <TouchableOpacity>
		<View style={styles.buttonWrapper}>
		    <Text style={styles.button}>{this.props.text}</Text>
		</View>
	    </TouchableOpacity>
	);
    }
}


var styles = StyleSheet.create({
    buttonWrapper: {
	backgroundColor: '#69AFB3',
	justifyContent: 'center',
	margin: 4,
	paddingHorizontal: 6,
	//	flexGrow: 1,
    },
    button: {
	fontSize: 15,
	textAlign: 'center',
	color: 'black',
    },
});

//Finally, make this the exported module...
module.exports = krButton;
*/

class krButton extends Component {

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
module.exports = krButton;
