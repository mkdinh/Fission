import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import BorderChange from '../BorderChangeCSS'
import ColorPicker from '../ColorPicker/ColorPicker'
import FontRestyle from '../FontRestyleCSS/FontRestyle'
import BorderRadius from '../BorderRadiusCSS/BorderRadius'
/*this will be the menu where people can select their components' styling*/
class Newcompomenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            color: "#fff",
            background: "#601534",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            borderSize: 1,
            borderStyle: "solid",
            borderColor: "orange",
            height: 150,
            width: 300,

        };
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


    handleToggle = () => this.setState({
        open: !this.state.open
    });

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
      };

    handleRadiusInputChange = (ev) => {
        let {name, value} = ev.target;
        ev.target.value === "" ? value = 0 : value = ev.target.value;
        this.setState ({
            [ev.target.name]: parseInt(value)
        })
        
    } 
    
    render() {
     let boxStyle = {
         width: this.state.width,
         height: this.state.height,
         borderSize: this.state.borderSize,
         borderColor: this.state.borderColor,
         borderStyle: this.state.borderStyle,
         background: this.state.background,
         padding: 20,
         borderBottomLeftRadius: this.state.borderBottomLeftRadius,
         borderBottomRightRadius: this.state.borderBottomRightRadius,
         borderTopRightRadius: this.state.borderTopRightRadius,
         borderTopLeftRadius: this.state.borderTopLeftRadius
     }
     let displayBoxStyle = {
         width: 400,
         height: 200, 
         border: "2px solid black"
     }
        return (
            <div>
        <Drawer width={500} openPrimary={true} open={this.props.sidebar} >
          <AppBar title="Styling Bench" />
          <div style={displayBoxStyle}> 
          <div style={boxStyle}>Fission</div>
          </div>
          <ColorPicker 
            background={this.state.background}
            handleChangeComplete={
                this.handleChangeComplete

            }
        />
         
          <BorderChange height={this.state.height} width={this.state.width} handleHeightInput={this.handleHeightInput} handleWidthInput={this.handleWidthInput}/>
          <FontRestyle/>
          <BorderRadius handleRadiusInputChange={this.handleRadiusInputChange} borderBottomLeftRadius={this.state.borderBottomLeftRadius} borderBottomRightRadius={this.state.borderBottomRightRadius} borderTopLeftRadius={this.state.borderTopLeftRadius} borderTopRightRadius={this.state.borderTopRightRadius}/>
          {console.log (JSON.stringify(this.state) + "Border Radius")}
        </Drawer>
      </div>
        );
    }
}

export default Newcompomenu;