// import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const template = require('./templates');
const generate = require('./generators');

//templating module to construct template str
//--------------------------------------------------------
module.exports = (props, jobType, job, parent, cb) => {

    // spread out component properties into constant
    let {name, className, classProps, group, html, css, children} = props;
    console.log(props)
    // if parent is App, create a directory and intialize the App and index component
    if(jobType === 'createApp' && parent === "App"){
        let AppChildren = props;

        // initialize with children
        generate.App(AppChildren, job);
        generate.Index(job);
    }

    // if there is html object, create component with html props
    if(html){

        let htmlPack = {html, name, className, group, classProps, children, parent};

        // generate html template
        let htmlTemplate = html.type === 'Dumb'? template.Dumb(htmlPack): template.Smart(htmlPack);

        // generate component file

        let filePack = {template: htmlTemplate, name, parent, group, job};

        generate.Component(filePack);
    }
    
    // if there is css object, creat component with css props
    if(css){
        let cssPack = {css, name, className, classProps};

        // generate css template
        let cssTemplate = template.CSS(cssPack);

        // generate css file

        let filePack = {template: cssTemplate, name, group, job}

        generate.Style(filePack);
    }

    cb();
}