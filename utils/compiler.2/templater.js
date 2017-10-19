// import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const template = require('./templates');
const generate = require('./generators');
const helper = require("./helpers/template.helper");

//templating module to construct template str
//--------------------------------------------------------
module.exports = (component, num) => {
    // spread out component properties into constant
    let {name, attribs, children } = component;
    // get attribs name if one isnt given
    attribs.name ? attribs.name : attribs.name = helper.getName(component);

    // get predefined group on special classes if a component and not given a group
    attribs.component && !attribs.group ? attribs.group = helper.defaultGroup(component) : attribs.group;
    let tag = name;
   
    let templateHTML, templateCSS, fileHTML, fileCSS

    // if parent is App, create a directory and intialize the App and index component

    // create component files
    if(attribs.component === "stateful"){
        templateHTML = template.Stateful(component);
        console.log(attribs.name)
    }else{
        templateHTML = template.Stateless(component)
        console.log(attribs.name)
    };
    fileJS = generate.Component(templateHTML, component, num)
    
    // create css files
    templateCSS = template.Style(attribs)
    fileCSS = generate.Style(templateCSS, attribs, num)

}