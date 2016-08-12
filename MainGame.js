import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';


//var krButton = require('./krButton');

var Tile = require('./Tile');

var sample_game_snapshot = require('./sample_data');

var MainGame = React.createClass({


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
    
    getInitialState: function() {
	return {
            display2: JSON.stringify(sample_game_snapshot),//"Blabber"
	    x1: "no press...",
	    x2: "x2",
	};
    },

    _can(){
        this.setState({ x1: "Cancel pressed" });
    },

    _tur(){
        this.setState({ x1: "T Pre" });
    },

    _sna(){
        this.setState({ x1: "3 pressed" });
    },

    _sco(){
        this.setState({ x1: "4 pressed" });
    },

    _opt(){
        this.setState({ x1: "5 pres" });
    },

    render() {
	
	for(var i=0; i<sample_game_snapshot.turned_tiles.length; i++){
	    sample_game_snapshot.turned_tiles[i].index=i;
								     }
								 
								 return (

	    <View style={styles.yellMe}>
		

		<View style={styles.ButtonsArea}>
		    <Text>ahem</Text>

		    <Tile letter={'W'}/>
		    {/* 
		    <krButton letter={"Cancel"} />
		    
		    <krButton text="Turn Letter" cb={this._can} />
		    <krButton text="SNATCH IT" cb={this._can} />
		    <krButton text="Scores" cb={this._can} />
		    <krButton text="options" cb={this._can} /> */}
		    
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
		    <Text>{this.state.x1}</Text>
		</View>

	    </View>

								 );
    }

});


var styles = StyleSheet.create({
    yellMe: {
	flex: 1,
	backgroundColor: '#E6CC29',
    },
    ButtonsArea: {
	margin: 4,
	backgroundColor: '#D6FA89',
	justifyContent: 'space-around',
	//	flex: 0.2,
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
	backgroundColor: '#A400D8',
    },
});

//Finally, make this the exported module...
module.exports = MainGame;
