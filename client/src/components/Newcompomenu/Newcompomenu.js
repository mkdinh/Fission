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

      handleTextInput = (ev) => {
          let { name, value } = ev.target;
          this.props.updateActiveComponent("obj", "css", name , value);
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
        this.props.updateActiveComponent("obj", "css", name, value );
        // this.setState ({
        //     [ev.target.name]: parseInt(value)
        // })
        
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
        return (
            <div>
        <Drawer width={450} openPrimary={true} open={this.props.sidebar} >
          <AppBar style={{height: "3.05rem"}} showMenuIconButton={false} title="Styling Bench" />

          {/* <ColorPicker 
            background={this.props.active.css ? this.props.active.css["background-color"] : "gold"}
            handleChange={this.handleChange}
        /> */}
        <FontFamily 
            fontFamily={this.state.fontFamily} 
            handleFontStyleInput={this.handleFontStyleInput}/>
        <FontResize 
            handleTextInput={this.handleTextInput} 
            fontSize={this.props.active.css ? this.props.active.css["font-size"] : 12 }/>
        <BorderChange 
            handleTextInput={this.handleTextInput} 
            height={this.props.active.css ? this.props.active.css["height"] : "0px" } 
            width={this.props.active.css ? this.props.active.css["width"] : "0px" }/>

        <PaddingCSS 
            handleTextInput={this.handleTextInput} 
            paddingTop={this.props.active.css ? this.props.active.css["padding-top"] : "0px" } 
            paddingRight={this.props.active.css ? this.props.active.css["padding-right"] : "0px" } 
            paddingBottom={this.props.active.css ? this.props.active.css["padding-bottom"] : "0px" } 
            paddingLeft={this.props.active.css ? this.props.active.css["padding-left"] : "0px" }/>
          <MarginCSS
            handleTextInput={this.handleTextInput}
            marginTop={this.props.active.css ? this.props.active.css["margin-top"] : "0px" }
            marginRight={this.props.active.css ? this.props.active.css["margin-right"] : "0px" }
            marginBottom={this.props.active.css ? this.props.active.css["margin-bottom"] : "0px" } 
            marginLeft={this.props.active.css ? this.props.active.css["margin-left"] : "0px" }
            />
          <BorderRadius 
            handleTextInput={this.handleTextInput}
            borderBottomLeftRadius={this.props.active.css ? this.props.active.css["border-bottom-left-radius"] : "0px" }
            borderBottomRightRadius={this.props.active.css ? this.props.active.css["border-bottom-right-radius"] : "0px" }
            borderTopLeftRadius={this.props.active.css ? this.props.active.css["border-top-left-radius"] : "0px" }
            borderTopRightRadius={this.props.active.css ? this.props.active.css["border-top-right-raidus"] : "0px" }/>
 
        </Drawer>
      </div>
        );
    }
}

export default Newcompomenu;