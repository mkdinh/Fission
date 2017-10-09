// import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const template = require('./templates.2');
const mkdir = require('./mkdir');

//templating
//--------------------------------------------------------
module.exports = (props,parent,cb) => {
    
    let {name, className, js, css, children} = props;
    
    if(parent === 'App'){
        let AppChildren = props.App.children;
        mkdir.App(AppChildren);
        mkdir.Index();
    }

    if(js){

        let jsPack = {js, name, className, children};
        let jsTemplate = js.type === 'Dumb'? template.Dumb(jsPack): template.Smart(jsPack);
        mkdir.Component(jsTemplate,parent)
    }
    
    if(css){
        let cssPack = {css, name, className};
        let cssTemplate = template.CSS(cssPack)
        mkdir.Style(cssTemplate,name)
    }

    cb();
}