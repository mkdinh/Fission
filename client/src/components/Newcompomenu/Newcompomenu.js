import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import BorderChange from './StylePicker/BorderChangeCSS';
import ColorPicker from './StylePicker/ColorPicker/ColorPicker';
import FontResize from './StylePicker/FontResizeCSS/FontResize';
import BorderRadius from './StylePicker/BorderRadiusCSS/BorderRadius';
import PaddingCSS from './StylePicker/PaddingCSS/PaddingCSS';
import MarginCSS from './StylePicker/MarginCSS/MarginCSS';
import FontFamily from './StylePicker/FontFamilyCSS/FontFamily'

/*this will be the menu where people can select their components' styling*/
class Newcompomenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            color: "white",
            fontSize: 12,
            fontFamily: "Georgia",
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
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0

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

    handleChange = (color) => {
        this.props.updateActiveComponent("obj", "css", "background-color", color.hex);
        // this.props.updateActiveCSS("background-color", color.hex)
        this.setState({ background: color.hex });
      };

      handleIntInput = (ev) => {
          let { name, value } = ev.target;
          value === "" ? value = 0 : "";
          this.updateActiveCSS(name, value)
      }

      handleRadiusInputChange = (ev) => {
        let {name, value} = ev.target;
        ev.target.value === "" ? value = 0 : value = ev.target.value;
        this.setState ({
            [ev.target.name]: parseInt(value)
        })
        
    } 

    handlePaddingInputChange = (ev) => {
        let {name, value} = ev.target;
        ev.target.value === "" ? value = 0 : value = ev.target.value;
        this.setState ({
            [ev.target.name]: parseInt(value)
        })
        
    }  
     handleMarginInputChange = (ev) => {
        let {name, value} = ev.target;
        ev.target.value === "" ? value = 0 : value = ev.target.value;
        this.setState ({
            [ev.target.name]: parseInt(value)
        })
        
    } 
   
 handleFontSizeInput = (ev) => {
        let {name, value} = ev.target;
        value === "" ? value = 0 : value = value;
        this.setState({
            [name] : parseInt(value)
        })
        // console.log(this.state + "from handleFontSizeInput");
    }

    handleFontStyleInput = (event, index, value) => {
        console.log(this.state.value);
        console.log("event " + event);
        this.setState({fontFamily: value})};

    render() {
     let boxStyle = {
         width: this.state.width,
         height: this.state.height,
         fontSize: this.state.fontSize,
         borderSize: this.state.borderSize,
         borderColor: this.state.borderColor,
         borderStyle: this.state.borderStyle,
         background: this.state.background,
         paddingTop: this.state.paddingTop,
         paddingRight: this.state.paddingRight,
         paddingBottom: this.state.paddingBottom,
         paddingLeft: this.state.paddingLeft,
         borderBottomLeftRadius: this.state.borderBottomLeftRadius,
         borderBottomRightRadius: this.state.borderBottomRightRadius,
         borderTopRightRadius: this.state.borderTopRightRadius,
         borderTopLeftRadius: this.state.borderTopLeftRadius,
         marginTop: this.state.marginTop,
         marginRight: this.state.marginRight,
         marginBottom: this.state.marginBottom,
         marginLeft: this.state.marginLeft
         
     }
     let displayBoxStyle = {
         width: 500,
         height: 200,
         backgroundColor: "white",
         border: "2px solid black",
         fontFamily: this.state.fontFamily
     }
        return (
            <div>
        <Drawer width={450} openPrimary={true} open={this.props.sidebar} >
          <AppBar style={{height: "3.05rem"}} showMenuIconButton={false} title="Styling Bench" />
          <div style={displayBoxStyle}> 
          <div style={boxStyle}>FISSION</div>
          </div>

          <ColorPicker 
            background={this.props.active.css ? this.props.active.css["background-color"] : "gold"}
            handleChange={this.handleChange}
        />
        <FontFamily 
            fontFamily={this.state.fontFamily} 
            handleFontStyleInput={this.handleFontStyleInput}/>
        <FontResize 
            handleIntInput={this.handleIntInput} 
            fontSize={this.state.fontSize} 
            handleFontSizeInput={this.handleFontSizeInput}/>
        <BorderChange 
            handleIntInput={this.handleIntInput} 
            height={this.state.height} 
            width={this.state.width} 
            handleHeightInput={this.handleHeightInput} 
            handleWidthInput={this.handleWidthInput}/>
        <PaddingCSS 
            handleIntInput={this.handleIntInput} 
            handlePaddingInputChange={this.handlePaddingInputChange} 
            paddingTop={this.state.paddingTop} 
            paddingRight={this.state.paddingRight} paddingBottom={this.state.paddingBottom} paddingLeft={this.state.paddingLeft}/>
          <MarginCSS
            handleIntInput={this.handleIntInput}
            handleMarginInputChange={this.handleMarginInputChange}
            marginTop={this.state.marginTop} 
            marginRight={this.state.marginRight} 
            marginBottom={this.state.marginBottom} 
            marginLeft={this.state.marginLeft}
            />
          <BorderRadius 
            handleIntInput={this.handleIntInput}
            handleRadiusInputChange={this.handleRadiusInputChange} 
            borderBottomLeftRadius={this.state.borderBottomLeftRadius} 
            borderBottomRightRadius={this.state.borderBottomRightRadius} 
            borderTopLeftRadius={this.state.borderTopLeftRadius} 
            borderTopRightRadius={this.state.borderTopRightRadius}/>
 
        </Drawer>
      </div>
        );
    }
}

export default Newcompomenu;