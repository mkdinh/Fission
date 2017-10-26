import React, {Component} from 'react';

class BorderChange extends Component {

    state = {  
            width: 150,
            height: 150
        
    }

    handleHeightInput = (ev) => {
        let {name, value} = ev.target;
        value === "" ? value = 0 : value = value;
        this.setState({
            [name] : parseInt(value)
        })
        console.log(this.state)
    }

    handleWidthInput = (ev) => {
        let {name, value} = ev.target;
        value === "" ? value = 0 : value = value;
        this.setState({
            [name] : parseInt(value)
        })
        console.log(this.state);
    }


    render() {
        let boxStyle = {
            width: this.state.width,
            height: this.state.height, 
            border: "2px solid green",
        };
        return (
            
            <div>
            <input name="height" value={this.state.height} onChange={this.handleHeightInput}/>
            <input name="width" value={this.state.width} onChange={this.handleWidthInput}/>
            <div style={boxStyle}></div>
            </div>
            
        );
    }
}

export default BorderChange;