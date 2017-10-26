import React, {Component} from 'react';

class BorderRadius extends Component {

    state = {  
            width: 150,
            height: 150,
            borderRadius: 0
        
    }

  

    handleBorderRadiusInput = (ev) => {
       let {name, value} = ev.target;
       value === "" ? value = 0 : value = value;
       this.setState({
           [name] : parseInt(value)
       })
    }


    render() {
        let boxStyle = {
            width: 150,
            height: 150, 
            border: "2px solid black",
            borderRadius: this.state.borderRadius
        };
        return (
            
            <div>
            
            <div>Border Radius</div>
            <input name="borderRadius" value={this.state.borderRadius} onChange={this.handleBorderRadiusInput}/>
            <div style={boxStyle}></div>
            </div>
            
        );
    }
}

export default BorderRadius;