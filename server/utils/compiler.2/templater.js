// import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const template = require('./templates');
const generate = require('./generators');

//templating module to construct template str
//--------------------------------------------------------
module.exports = (props, jobType, job, parent, cb) => {
    // console.log(parent, props.name)
    // spread out component properties into constant
    let {name, className, classProps, html, css, children} = props;
    
    // if parent is App, create a directory and intialize the App and index component
    if(jobType === 'createApp' && parent === "App"){
        let AppChildren = props.App.children;

        // initialize with children
        generate.App(AppChildren, job);
        generate.Index(job);
    }

    // if there is html object, create component with html props
    if(html){

        let htmlPack = {html, name, className, classProps, children, parent};

        // generate html template
        let htmlTemplate = html.type === 'Dumb'? template.Dumb(htmlPack): template.Smart(htmlPack);

        // generate component file
        generate.Component(htmlTemplate,parent,job);
    }
    
    // if there is css object, creat component with css props
    if(css){
        let cssPack = {css, name, className, classProps};

        // generate css template
        let cssTemplate = template.CSS(cssPack);

        // generate css file
        generate.Style(cssTemplate,name,job);
    }

    cb();
}