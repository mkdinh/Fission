// import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const template = require('./templates');
const generate = require('./generators');

//templating
//--------------------------------------------------------
module.exports = (props,parent,job,cb) => {
    
    let {name, className, js, css, children} = props;
    
    if(parent === 'App'){
        let AppChildren = props.App.children;
        generate.App(AppChildren, job);
        generate.Index(job);
    }

    if(js){

        let jsPack = {js, name, className, children};
        let jsTemplate = js.type === 'Dumb'? template.Dumb(jsPack): template.Smart(jsPack);
        generate.Component(jsTemplate,parent,job)
    }
    
    if(css){
        let cssPack = {css, name, className};
        let cssTemplate = template.CSS(cssPack)
        generate.Style(cssTemplate,name,job)
    }

    cb();
}