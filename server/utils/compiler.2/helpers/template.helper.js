const getImportApp = (array,list) => {
    let component = list || [];

    array.forEach(child => {
        component.push(child.name);

        if(child.children){
            getImportApp(child.children, component)
        }
    })

    return component;
}

const populateApp = (array,tab,sibling) => {

    let children = sibling || [];

    var tab = tab || 2;
    tab++;
    var numTab = '\t'.repeat(tab);
    
    for(let i = 0; i < array.length; i++){

        const {name, className, js} = array[i];           
        const openTag = `<${name}>`;
        const closeTag = `</${name}>`;
        const singleTag =  `<${name}/>`;
    
        if(js.value){
            var value = '\t'.repeat(tab+1) + js.value + "\n\n"
        }

        // if the component either have children or value, create open/close tag with prefixed tab number else print out a single tag
        // if have children, then run recursive loop, print out value
        children.push(`${array[i].children || js.value? `${numTab}${openTag}${value || populateApp(array[i].children,tab,sibling)}${numTab}${closeTag}` 
        : 
        `${numTab}${singleTag}`}`)

    }
    
    return children;
    
}

const templateHelper = {

    importApp: (array) => {
        let fileArray = getImportApp(array);
        
        let imported = [];
        let fileStr = "";

        fileArray.forEach(file => {
            if(!imported.includes(file)){
                fileStr += `import { ${file} } from '../components/${file}'\n`;
                imported.push(file);
            }
        });

        return fileStr;
    },

    initApp: (array) => {
        let children;
        children = populateApp(array);
        children = children[0].replace(",","").replace(new RegExp('>', 'g'), ">\n\n")
        return children
    },
    
    children: (array,type) => {

        let children = [];
        if(type === 'Smart'){console.log(array)}
        array.map(child => {

            const {name, className, js} = child;           
            const openTag = `<${name}>`;
            const closeTag = `</${name}>`;
            const singleTag =  `<${name}/>`    
            
            let propsInherit = type === 'Dumb'? "{props.children}": "{this.props.children}";
            let propsValue = js.value ? js.value : "";
            
            children.push(`${js.value || child.children ? `${propsInherit}` || `${propsValue}` : `${singleTag}`}` )

        });
        
        children = children.join('\n\t\t');
        
        return children
    },

    import: (children) => {
        let file = "";
        let imported = [];

        children.forEach(child => {  
            if(!imported.includes(child.name)){
                file += `import { ${child.name} } from '../${child.name}';\n`
                imported.push(child.name);
            } 
        })

        return file;
    }
}

module.exports = templateHelper;