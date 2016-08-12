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

		<View style={styles.buttonWrapper}>
		<Text style={styles.button}>Button 1</Text>		
	    </View>

		<View style={styles.buttonWrapper}>
		<Text style={styles.button}>Button 2</Text>
	    </View>
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
	backgroundColor: '#D6FA89',
	flex: 0.2,
	flexDirection: 'row', 
    },
    GridArea: {
	margin: 4,
//	height: 373,
	flex: 1,
	flexDirection: 'row', 
	flexWrap: 'wrap',
	backgroundColor: '#000',
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
	color: 'black',
    },
});

//Finally, make this the exported module...
module.exports = Tiger;
