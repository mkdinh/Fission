import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import "./FontFamily.css";

class FontFamily extends Component {
    render(){
            return(
 <div> 
 <div id="selectFieldLabel">
        <SelectField
          name="font-family"
          value={this.props.fontFamily}
          floatingLabelText="Fonts"
          onChange={(ev,ind,val) => this.props.handleSelectionInput("font-family", val)}
          style={{textAlign: "center", "margin": "auto"}}
          floatingLabelStyle={{color: '#ffc107', fontSize: "24px", fontFamily: "Permanent Marker"}}>
            <MenuItem value={"serif"} primaryText="serif" />
            <MenuItem value={"Georgia"} primaryText="Georgia" />
            <MenuItem value={"Palatino"} primaryText="Palatino" />
            <MenuItem value={"Palatino Linotype"} primaryText="Palatino Linotype" />
            <MenuItem value={"Book Antiqua"} primaryText="Book Antiqua" />
            <MenuItem value={"Times New Roman"} primaryText="Times New Roman" />
            <MenuItem value={"Times"} primaryText="Times" />
            <MenuItem value={"sans-serif"} primaryText="sans-serif" />
            <MenuItem value={"Arial"} primaryText="Arial" />
            <MenuItem value={"Arial Black"} primaryText="Arial Black" />
            <MenuItem value={"Helvetica" } primaryText="Helvetica" />
            <MenuItem value={"Gadget"} primaryText="Gadget" />
            <MenuItem value={"Comic Sans MS"} primaryText="Comic Sans MS" />
            <MenuItem value={"cursive"} primaryText="cursive" />
            <MenuItem value={"Impact"} primaryText="Impact" />
            <MenuItem value={"Charcoal"} primaryText="Charcoal" />
            <MenuItem value={"Verdana"} primaryText="Verdana" />
            <MenuItem value={"monospace"} primaryText="monospace" />
            <MenuItem value={"Courier"} primaryText="Courier" />
            <MenuItem value={"Monaco"} primaryText="Monaco" />
        </SelectField>
  </div>  
</div>    
    
            );
        }
    }




export default FontFamily;