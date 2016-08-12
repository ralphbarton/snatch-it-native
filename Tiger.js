import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

var Tile = require('./Tile');

var sample_game_snapshot = require('./sample_data');

class Tiger extends Component {

    constructor(props){
	super(props);

	this.state = {
            display2: JSON.stringify(sample_game_snapshot)//"Blabber"
	};


/* THIS IS THE CODE THAT WOULD RETRIEVE DATA FROM SERVER...
      var ws = new WebSocket('ws://snatch-it.rocks:14601/');
//	var ws = new WebSocket('ws://localhost:3014/');

	ws.onopen = () => {  // connection opened                                                                                 
            ws.send('something'); // send a message                                                                               
	};

	ws.onmessage = (e) => {  // a message was received
            this.setState({ display2: e.data });
	};
*/

    }

    render() {
	
	for(var i=0; i<sample_game_snapshot.turned_tiles.length; i++){
	    sample_game_snapshot.turned_tiles[i].index=i;
	}

	return (
		<View style={styles.yellMe}>

		<View style={styles.ButtonsArea}>
		<Text>Buttons Strip Top</Text>		
	    </View>


		<View style={styles.GridArea}>
		{sample_game_snapshot.turned_tiles.map(function(tile_x){
		    return <Tile
		        letter={tile_x.letter}
		        key={tile_x.index}

			/>
		
		})}
	    </View>


		<View style={styles.ZonesArea}>
		<Text>Zone Section</Text>
	    </View>

		</View>
	);
    }

}


var styles = StyleSheet.create({
    yellMe: {
	flex: 1,
	backgroundColor: '#E6CC29',
    },
    ButtonsArea: {
	margin: 4,
//	flexDirection: 'row', 
	backgroundColor: '#D6FA89',
    },
    GridArea: {
	margin: 4,
	height: 433,
	backgroundColor: '#F0CDB1',
    },
    ZonesArea: {
	margin: 4,
	backgroundColor: '#A4E0D8',
    },

    buttonWrapper: {
	backgroundColor: '#69AFB3',
	height: 55,
	justifyContent: 'center',
	margin: 4,
    },
    button: {
	fontSize: 15,
	textAlign: 'center',
	color: '#FC8A0F',
    },
});

//Finally, make this the exported module...
module.exports = Tiger;
