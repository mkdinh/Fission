import React, {Component} from 'react';

class FontRestyle extends Component {
        state = {
            fontSize: 12,
            fontWeight: "",
            color: "black"
        }
    

    handleFontSizeInput = (ev) => {
        let {name, value} = ev.target;
        value === "" ? value = 0 : value = value;
        this.setState({
            [name] : parseInt(value)
        })
        console.log(this.state + "from handleFontSizeInput");
    }

    render() {
        let fontStyle = {
            fontSize: this.state.fontSize,
            color: "red",
        };
        return (
            <div>
            <input name="fontSize" value={this.state.fontSize} onChange={this.handleFontSizeInput}/>
            </div>
    );
    }
}


export default FontRestyle;