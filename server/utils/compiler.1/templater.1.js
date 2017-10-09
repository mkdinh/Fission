// import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const template = require('./templates.1');

//templating
//--------------------------------------------------------
module.exports = (props,type,cb) => {
    console.log(props)
    switch(type){
        case 'js':
            type === 'Dumb'? template.Dumb(props) : template.Smart(props);
            break
            
        case 'css':
            template.CSS(props);
            break
    }
    cb();
}