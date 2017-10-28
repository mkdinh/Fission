import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
<<<<<<< HEAD
import RaisedButton from 'material-ui/RaisedButton';
import BorderChange from '../BorderChangeCSS';
import ColorPicker from '../ColorPicker/ColorPicker';
import FontResize from '../FontResizeCSS/FontResize';
import BorderRadius from '../BorderRadiusCSS/BorderRadius';
import PaddingCSS from '../PaddingCSS/PaddingCSS';
import MarginCSS from '../MarginCSS/MarginCSS';
import FontFamily from '../FontFamilyCSS/FontFamily'
=======
import BorderChange from '../BorderChangeCSS'
import ColorPicker from '../ColorPicker/ColorPicker'
import FontRestyle from '../FontRestyleCSS/FontRestyle'
import BorderRadius from '../BorderRadiusCSS/BorderRadius'
import PaddingCSS from '../PaddingCSS/PaddingCSS'
import MarginCSS from '../MarginCSS/MarginCSS'
>>>>>>> 8c774e2cc1e09eb5784b51af7051270d1a7959ca


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
        console.log(this.state + "from handleFontSizeInput");
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
         width: 400,
         height: 200,
         color: "white",
         border: "2px solid black",
         fontFamily: this.state.fontFamily
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
        <FontResize fontSize={this.state.fontSize} handleFontSizeInput={this.handleFontSizeInput}/>
        <FontFamily fontFamily={this.state.fontFamily} handleFontStyleInput={this.handleFontStyleInput}/>
        <BorderChange height={this.state.height} width={this.state.width} handleHeightInput={this.handleHeightInput} handleWidthInput={this.handleWidthInput}/>
        <PaddingCSS handlePaddingInputChange={this.handlePaddingInputChange} paddingTop={this.state.paddingTop} paddingRight={this.state.paddingRight} paddingBottom={this.state.paddingBottom} paddingLeft={this.state.paddingLeft}/>
          {console.log (JSON.stringify(this.state) + "Padding")}
          <MarginCSS
          handleMarginInputChange={this.handleMarginInputChange}
          marginTop={this.state.marginTop} marginRight={this.state.marginRight} marginBottom={this.state.marginBottom} marginLeft={this.state.marginLeft}
          />
          <BorderRadius handleRadiusInputChange={this.handleRadiusInputChange} borderBottomLeftRadius={this.state.borderBottomLeftRadius} borderBottomRightRadius={this.state.borderBottomRightRadius} borderTopLeftRadius={this.state.borderTopLeftRadius} borderTopRightRadius={this.state.borderTopRightRadius}/>
          {console.log (JSON.stringify(this.state) + "Border Radius")}
          
        </Drawer>
      </div>
        );
    }
}

export default Newcompomenu;