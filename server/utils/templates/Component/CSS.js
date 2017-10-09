module.exports = (props) => {
    // props = JSON.stringify(props);
    
    let className = props.className;
    delete props.className;
    
    let attr = "";

    for(key in props){
        attr += `\t${key}: ${props[key]}\n`
    }
    
    let css = `${className} {
    ${attr}}`;

    console.log(css)
}