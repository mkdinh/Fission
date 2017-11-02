import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import BorderChange from './StylePicker/BorderChangeCSS';
import ColorPicker from './StylePicker/ColorPicker/ColorPicker';
import FontResize from './StylePicker/FontResizeCSS/FontResize';
import BorderRadius from './StylePicker/BorderRadiusCSS/BorderRadius';
import PaddingCSS from './StylePicker/PaddingCSS/PaddingCSS';
import MarginCSS from './StylePicker/MarginCSS/MarginCSS';
import FontFamily from './StylePicker/FontFamilyCSS/FontFamily'
import "./Newcompomenu.css";

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
    
    handleSelectionInput = (key, value) => {
        this.props.updateActiveComponent("obj", "css", key , value);
    }

    render() {
        return (
            <div>
                <Drawer width={"35%"} openPrimary={true} open={this.props.sidebar} >
                <AppBar id="drawerTitle" style={{height: "48px"}} showMenuIconButton={false} title="STYLING BENCH" />

                <ColorPicker 
                    background={this.props.active.css ? this.props.active.css["background-color"] : "gold"}
                    handleChange={this.handleChange}
                />
                <FontFamily 
                    fontFamily={this.props.active.css["font-family"] ? this.props.active.css["font-family"]: "Times"} 
                    handleSelectionInput={this.handleSelectionInput}/>
                <FontResize 
                    handleTextInput={this.handleTextInput} 
                    fontSize={this.props.active.css["font-size"] ? this.props.active.css["font-size"] : "" }/>
                <BorderChange 
                    handleTextInput={this.handleTextInput} 
                    height={this.props.active.css["height"] ? this.props.active.css["height"] : "" } 
                    width={this.props.active.css["width"] ? this.props.active.css["width"] : "" }/>

                <PaddingCSS 
                    handleTextInput={this.handleTextInput} 
                    paddingTop={this.props.active.css["padding-top"] ? this.props.active.css["padding-top"] : "" } 
                    paddingRight={this.props.active.css["padding-right"] ? this.props.active.css["padding-right"] : "" } 
                    paddingBottom={this.props.active.css["padding-bottom"] ? this.props.active.css["padding-bottom"] : "" } 
                    paddingLeft={this.props.active.css["padding-left"] ? this.props.active.css["padding-left"] : "" }/>
                <MarginCSS
                    handleTextInput={this.handleTextInput}
                    marginTop={this.props.active.css["margin-top"] ? this.props.active.css["margin-top"] : "" }
                    marginRight={this.props.active.css["margin-right"] ? this.props.active.css["margin-right"] : "" }
                    marginBottom={this.props.active.css["margin-bottom"] ? this.props.active.css["margin-bottom"] : "" } 
                    marginLeft={this.props.active.css["margin-left"] ? this.props.active.css["margin-left"] : "" }
                    />
                <BorderRadius 
                    handleTextInput={this.handleTextInput}
                    borderBottomLeftRadius={this.props.active.css["border-bottom-left-radius"] ? this.props.active.css["border-bottom-left-radius"] : "" }
                    borderBottomRightRadius={this.props.active.css["border-bottom-right-radius"] ? this.props.active.css["border-bottom-right-radius"] : "" }
                    borderTopLeftRadius={this.props.active.css["border-top-left-radius"] ? this.props.active.css["border-top-left-radius"] : "" }
                    borderTopRightRadius={this.props.active.css["border-top-right-radius"] ? this.props.active.css["border-top-right-raidus"] : "" }/>
        
                </Drawer>
            </div>
        );
    }
}

export default Newcompomenu;