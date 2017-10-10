// import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const template = require('./templates');
const generate = require('./generators');

//templating
//--------------------------------------------------------
module.exports = (props,parent,job,jobType, cb) => {
    
    let {name, className, js, css, children} = props;
    
    if(jobType === 'createApp'){
        let AppChildren = props.App.children;
        generate.App(AppChildren, job);
        generate.Index(job);
    }else{

        // set src directory
        const jobDir = process.cwd() + `/server/jobs/${job}/src/`;
        
        // create job directory
        if(fse.existsSync(jobDir)){
            fse.mkdir(jobDir)
        }
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