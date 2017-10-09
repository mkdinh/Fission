module.exports = (props) => {
    
    let className = "." + props.className.replace(" ",".");
    let attr = "";

    for(key in props.css){
        attr += `\t${key}: ${props.css[key]}\n`
    }
    
    let css = `${className} {
    ${attr}}`;
    
    return css
}