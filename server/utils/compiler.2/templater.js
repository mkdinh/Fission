// import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const template = require('./templates');
const generate = require('./generators');

//templating module to construct template str
//--------------------------------------------------------
module.exports = (component, job, num) => {
    // spread out component properties into constant
    let {name, attribs, children } = component;
    
    let tag = name;
    !attribs.name ? attribs.name = "$"+tag.toUpperCase() : "";
    
    let templateHTML, templateCSS, fileHTML, fileCSS

    // if parent is App, create a directory and intialize the App and index component
    if(job === 'createApp' && name === "App"){
        // initialize with children
        generate.App(children, num);
        generate.Index(num);
    }else{

        // create component files
        if(attribs.component === "stateful"){
            templateHTML = template.Stateful(component);
            console.log(templateHTML)
        }else{
            templateHTML = template.Stateless(component)
        };
        fileJS = generate.Component(templateHTML, component, num)
        
        // create css files
        templateCSS = template.Style(attribs)
        fileCSS = generate.Style(templateCSS, attribs, num)
    }
}