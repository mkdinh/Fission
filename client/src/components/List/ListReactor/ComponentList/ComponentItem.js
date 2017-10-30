import React, { Component } from "react";
import { ListItem } from 'material-ui/List';
import Fa from "react-fontawesome";
import Divider from 'material-ui/Divider';
import ComponentBody from "./ComponentBody";

class ComponentItem extends Component {
    state = {

    }

    render(){
        return(

            <div key={this.props.group}>
                <ListItem
                    primaryText={this.props.group}
                    primaryTogglesNestedList={true}
                    nestedItems={
                    [<ComponentBody key={this.props.group}
                        updateActiveProject={this.props.updateActiveProject}
                        components={this.props.components[this.props.group]}
                        addComponent={this.props.addComponent}
                        tab={this.props.tab}/>]
                    }/>
                <Divider/>
            </div>

        )
    };
};

export default ComponentItem;