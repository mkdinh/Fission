module.exports = (props) => {
    
    
    let className = "." + props.className.replace(" ",".");

    if(props.classProps){
        for(prop in props.classProps){
            let placeholder = '$'+`{${prop}}`;
            className = className.replace(placeholder, props.classProps[prop])
        };
    }

    let attr = "";
    
    for(key in props.css){
        if(attr === ""){
            attr += `${key}: ${props.css[key]};\n`
        }else{
            attr += `\t${key}: ${props.css[key]};\n`
        }
    }

    let css = `${className} {\n\t${attr}}               `;
    
    
    return css
}