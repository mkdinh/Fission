const helper = {

    flatten: (array,list) => {
        // list of component flatten
        var list = list || [];
        
        // for each component in array of children
        array.forEach(child => {
            // push each child into array
            list.push(child);
            // if child has children
            if(child.children){
                // loop through until there is no more children
                helper.flatten(child.children, list)
            }
        })

        return list;
    },

    recursive: (package, numTab) => {
        var innerHTML; // array containing all children markups
        
        var tab = '\t'.repeat(numTab);
        numTab++;
        
        innerHTML = innerHTML || [];
        package.forEach(child => {
     
            let { type, attribs, children } = child;
            let tag = child.name;
            let hasChildren, openTag, closeTag;
        
            if(type === "tag"){

                let { classVar, name, style, component, expand, group } = attribs;
                let className = attribs.class;
                name = helper.getName(child);

                let attrArray = [];
                
                if(attribs){
                    for(key in attribs){
                        switch(key){       
                            case "class":
                                attrArray.push(`className="${attribs[key]}"`)
                            break
                            
                            default:
                                if(key !== "style" && key !== "expand" && key !== "component" && key !== "name" && key !== "group"){
                                        attrArray.push(`${key}="${attribs[key]}"`)
                                }
                            break
                        }
                    }

                    attrArray = attrArray.join(" ")
                }
              
                attrArray.length > 1 ? openTag = `${tab}<${name} ${attrArray}>` : openTag = `${tab}<${name}>`;
               
                if((name || !child.name.match(/span|p|b|i|strong|sub|sup|ul|ol/g)) ){
                    closeTag = `${tab}</${name}>`;
                }else{
                    closeTag =`</${name}>`
                }
                
                hasChildren =  ` ${openTag}${helper.recursive(child.children, numTab)}${closeTag} `;
                
                innerHTML.push(hasChildren)
            }else{
                innerHTML.push(`${child.data}`)
            }

        });
        
        return innerHTML;  
    },


    children: (package) => {
        let innerHTML; // array of all children
        
        // if component is Smart
        if(package.attribs.component === "Smart"){
            // extra indent
            innerHTML = helper.recursive(package.children,4);
        }else{
            // but all other logic stay the same
            innerHTML = helper.recursive(package.children,2);
        }

        // // join all children together into a string
        innerHTML = innerHTML.join("").replace(new RegExp("> ", "g"), ">\n").replace(new RegExp(",","g"), "");
        // remove all spaces between tags
        innerHTML = innerHTML.replace(/(<(?!\/).+?>.*?)\s*\s(<\/.+?>\s*)/g,"$1$2");
 
        return innerHTML;
    }, 

    import: (package, path) => {
        
        let { children, attribs } = package;
        let { name, group, expand } = attribs;
        !name ? name = helper.getName(package) : name;

        let importArray; // flatten array of children object
        let file = ""; // string containing import statement 
        let imported = []; // array to keep track of imported array to prevent duplicated

        // if component was configured to expand all the way
        if(expand === "deep"){
            // get and array of all of children
            importArray = helper.flatten(children);
        }else if(expand === "shallow"){
            // else get array of immediate children
            importArray = children;
        };
       
        importArray.forEach(child => {
            // if child is a component and isn't imported
            if(child.attribs && child.attribs.component && !imported.includes(child.attribs.name)){
                // if component does not have a name, use tag as name
                !child.attribs.name ? child.attribs.name = helper.getName(child) : child.attribs.name;  
                // generate import path based on component directory and children directory
                let importPath = helper.importPath(child, group, path)
                // push import statement into string with \n at the end
                file += `import { ${child.attribs.name} } from '${importPath}';\n`
                // push component name into array for next iteration
                imported.push(child.attribs.name);
            } 
        })
  
        return file;
    },

    importPath: (component, parentGroup, path) => {
        
        let { name, group } = component.attribs;    
        // if component does not specify a group, search if it belong to a default group
        !group ? group = helper.defaultGroup(component) : group;
        // if the importer and importee:

        if(parentGroup && group){
            if(parentGroup === group){
                // belong to the same group
                return path + name; 
            }else if(parentGroup !== group){
                // belong to difference group 
                return path + "../" + group;
            }
        }else if(!parentGroup && group){
            // importer does not have group but improtee does
            return path + group + "/";
        }else if(parentGroup && !group){
            return "../" + path + name;
        }else if(!parentGroup && !group){
            // neither have group
            return path + name;
        }else{
            // error -> cannot have path with group
            return console.log("Error: Cannot find path to component")
        }
    },

    getName: (package) => {

        let tag = package.name;
        let name = package.attribs.name;
        let component = package.attribs.component;
        let className = package.attribs.class;

        // package is a component with no name but have classname
        if(component && !name && className){
            // does not have a name but have a class
            // use the first class and capitalize it for name
            let firstClass = className.split(" ")[0];
            firstClass = firstClass.charAt(0).toUpperCase() + firstClass.substring(1);
            name = firstClass;        
        }else{
            // else use tag as name;
            name = tag;
        };
        
        return name;
    },

    defaultGroup: (package) => {

        let className = package.attribs.class;
        let name = package.attribs.name;
        let group;
        let tag = package.name;
        
        if(className && className.match(/container|row|col/)){
            // if class matches standard grid layout class = "Grid"
            group = "Grid";
    
        }else if(tag.match(/\bspan|\bp|\bb|\bi|\bstrong|\bsub|\bsup/)){
            // if matches standard tags

            group = "Text"
        };
        

        return group;
    }
}

module.exports = helper;