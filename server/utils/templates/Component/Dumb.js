module.exports = (props) => {

    let {className, tag} = props;
    let openTag = `<${tag} className='${className}'>`;
    let closeTag = `</${tag}>`

    return(
        `
        import React from 'react';
        
        export default (props) =>
            ${openTag} ${closeTag}
        `
    )
}