module.exports = (attribs) => {

    let { name, style, classVar } = attribs;
    let className = attribs.class || "" ;
    
    className = className.split(/\s+/);
    className = "." + className[0].replace(" ",".");

    if(classVar){
        for(key in classVar){
            let placeholder = '$'+`{${key}}`;
            className = className.replace(placeholder, classVar[key])
        };
    }

    style ? style = style.replace(", ", ";\n\t") : style = "";

    let template = `${className}{\n\t${style}\n}\n               `;
    
    return template;
}