const helper = {

    flatten: (array,list) => {
        var list = list || [];
    
        array.forEach(child => {
            list.push(child);
            if(child.children){
                helper.flatten(child.children, list)
            }
        })

        return list;
    },

    recursive: (array,tab,sibling) => {
        
        let children = sibling || [];
        
        var tab = tab || 3;
        tab++;
        var numTab = '\t'.repeat(tab);
    
        if(array){
    
            for(let i = 0; i < array.length; i++){
    
                const {name, className, html, classProps} = array[i];      
                
                if(html.type === "Smart"){
                    numTab = numTab + "\t";
                    tab++;
                }

                let propStr = "";
                
                if(classProps){
                    for(prop in classProps){
                        propStr += `${prop}={ "${classProps[prop]}" }`
                    }
                }
                
                const openTag = `${numTab}<${name} ${propStr}>`;
                const closeTag = `${numTab}</${name}>`;
                const singleTag =  `${numTab}<${name}/>`;
                
                if(html.value){
                    var value = '\t'.repeat(tab+1) + html.value + "\n";
                }else{
                    var value = "";
                }
    
                // if the component either have children or value, create open/close tag with prefixed tab number else print out a single tag
                // if have children, then run recursive loop, print out value
    
                let hasChildren = `${openTag} ${value} ${helper.recursive(array[i].children,tab,sibling)} ${closeTag} `;
    
                if(array[i].children || value){
                    children.push(hasChildren);
                }else{
                    children.push(singleTag)
                }
            }    
        }
    
        return children;  
    },
    import: (package) => {
        
        let {children, group, expand, path} = package;
        
        let importArray;
        let file = "";
        let imported = [];
        
        if(expand){
            importArray = helper.flatten(children);
        }else{
            importArray = children;
        };
       
        importArray.forEach(child => {  
            if(!imported.includes(child.name)){
                
                let importPath = helper.importPath(child, group, path)

                file += `import { ${child.name} } from '${importPath}';\n`
                imported.push(child.name);

            } 
        })
  
        return file;
    },

    children: (array) => {
        let children;

        children = helper.recursive(array);
  
        children = children.join(" ").replace(new RegExp('> ', 'g'), ">\n").replace(new RegExp(",","g"), "");

        return children;
    }, 

    importPath: (component, group, path) => {
        if(group && component.group && group === component.group){
            // console.log(path, component.name)
            return path + component.name; 
        }else if(group && component.group && group !== component.group){
            return path + "../" + component.group;
        }else if(group && !component.group){
            return "../" + path + component.name;
        }else if(!group && component.group){
            return path + component.group + "/";
        }else if(!group && !component.group){
            return path + component.name;
        }else{
            return console.log("Error: Cannot find path to component")
        }
    }
}

module.exports = helper;