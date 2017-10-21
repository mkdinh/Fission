import React, {Component} from 'react';

let BorderChange = React.createClass({
    getInitialState: function() {
        return {
            width: 150,
            length: 1500
        };
    },

    increaseHeight: function(event){
        let currentHeight = this.state.height;
        if (event.shiftKey) {
            currentHeight+=10;
        } else {
            currentHeight+=1;
        }
            this.setState({
                length: currentHeight
            });
    },increaseHeight: function(event){
        let currentHeight = this.state.height;
        if (event.shiftKey) {
            currentHeight+=10;
        } else {
            currentHeight+=1;
        }
            this.setState({
                length: currentHeight
            });
    },
    decreaseHeight: function(event){
        let currentHeight = this.state.height;
        if (event.shiftKey) {
            currentHeight-=10;
        } else {
            currentHeight-=1;
        }
            this.setState({
                length: currentHeight
            });
    },
    decreaseWidth: function(event){
        let currentWidth = this.state.width;
        if (event.shiftKey) {
            currentWidth-=10;
        } else {
            currentWidth-=1;
        }
            this.setState({
                width: currentWidth
            });
    },
    render: function(){
        let width = this.state.width;
        let height = this.state.height;  
        },
    });
        let boxStyle = {
            width: height,
            height: width,  
        };
        return (
            
            <div style={boxStyle}>
            <button onClick={this.increaseHeight} style={boxStyle}> + </button>
            <button onClick={this.increaseLength} style={boxStyle}> + </button>
            <button onClick={this.decreaseHeight} style={boxStyle}> + </button>
            <button onClick={this.decreaseLength} style={boxStyle}> + </button>
            </div>
        );


export default BorderChange;