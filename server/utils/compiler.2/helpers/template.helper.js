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

    recursive: (package, numTab, innerHTML) => {

        var innerHTML; 
        var numTab = numTab || 3;
        numTab++;

        var tab = '\t'.repeat(numTab);
        
        innerHTML = innerHTML || [];
        package.forEach(subpack => {
     
            let { type, attribs, children } = subpack;
            let tag = subpack.name;
            let hasChildren;
        
            if(type === "tag"){
                let { classVar, name, style, component, expand, group } = attribs;
                let className = attribs.class;
                name = subpack.attribs.name || subpack.name;

                let attrArray = [];
                
                if(attribs){
                    for(key in attribs){
                        if(key !== "style" && key !== "expand" && key !== "component" && key !== "name" && key !== "group"){
                            attrArray.push(`${key}="${attribs[key]}"`)
                        }
                    }
                    attrArray = attrArray.join(" ")
                }

                let openTag, closeTag;
                
                openTag = `${tab}<${name} ${attrArray}>`;
                console.log(subpack.children.filter(child => child.type !== "text"))
                if(subpack.attribs.name && subpack.children.filter(child => child.type !== "text").length > 0){
                    closeTag = `${tab}</${name}>`;
                }else{
                    closeTag =`</${name}>`
                }

                hasChildren =  ` ${openTag}${helper.recursive(subpack.children, numTab)}${closeTag} `;
                innerHTML.push(hasChildren)
            }else{
                innerHTML.push(`${subpack.data}`)
            }

            if(children){
                // children.map(child => {
                //     const name = child.attribs.name || child.name;
                //     const openTag = `${tab}<${name}>`;
                //     const inlineOpenTag = `<${name}>`;
                //     const closeTag = `${tab}</${name}>`;
                //     const inlineCloseTag =`</${name}>`

                //     if(child.children.length === 1){

                //         hasChildren = `${openTag}${helper.recursive(child.children, numTab)}${inlineCloseTag}\n`;
                        
                //         if(!innerHTML.includes(hasChildren)){
                //             innerHTML.push(hasChildren);       
                //         }

                //     }else{
                //         child.children.forEach( grandchild => {
                            
                //             hasChildren =  `${openTag}  ${helper.recursive(child.children, numTab)}  ${closeTag}`;
                //             if(!innerHTML.includes(hasChildren)){
                //                 innerHTML.push(hasChildren);       
                //             }
                //         })
                //     }
                // });
            
        

                // children.map( child => {
                //     // console.log(child.type,child.name,child.attribs.name)
                //     switch(child.type){

                //         case "text":
                //             // let text = `${tab}${child.data}`;
                //             // innerHTML.push(text);
                //         break

                //         case "tag":
                //             let { type, attribs, children } = child;
                //             let tag = child.name;
                //             // console.log(child.name,child.attribs.name)
                //             let {classVar, name, style, component, expand, group, state} = attribs;
                //             let className = attribs.class;      
          
                //             !name ? name = child.name : "";

                //             if(state === "stateful"){
                //                 tab += "\t";
                //                 numTab++;
                //             }
                            
                //             let attrArray = [];
                            
                //             if(attribs){
                //                 for(key in attribs){
                //                     if(key !== "style" && key !== "expand" && key !== "component" && key !== "name" && key !== "group"){
                //                         attrArray.push(`${key}="${attribs[key]}"`)
                //                     }
                //                 }
                //                 attrArray = attrArray.join(" ")
                //             }
                            
                //             const openTag = `${tab}<${name} ${attrArray}>`;
                //             const closeTag = `${tab}</${name}>`;
                //             const inlineCloseTag = `</${name}>`;
                //             const singleTag = `${tab}<${name}/>`;
                            
                //             // if the component either have children or value, create open/close tag with prefixed numTab number else print out a single tag
                //             // if have children, then run recursive loop, print out value
                //             let hasChildren;
                            
                //             if(child.children){
                                
                //                 let startIndex = 0;

                //                 if(child.children.length < 1){
                                        
                //                         hasChildren = `${openTag} ${helper.recursive(child.children, numTab, innerHTML)} ${closeTag}`;
                
                //                     }else{
                        
                //                         child.children.forEach( grandchild => {
                //                             hasChildren += `${openTag} ${helper.recursive(grandchild.children, numTab, innerHTML)} ${closeTag} `;
                                            
                //                         })
                                           
                //                     }
                            
                                    
                //             }
                //             // else{
                //             //     hasChildren = `${openTag}${child.children[startIndex].data}${inlineCloseTag} `
                //             //     hasChildren.replace(/\s+/,"")
                //             // }       
                //             if(!innerHTML.includes(hasChildren)){
                //                 innerHTML.push(hasChildren);
                                
                //             }else{
                //                 innerHTML.push(singleTag)
                //             }
                //             console.log(innerHTML)

                //         break
                //     }
                // });    
            }            
        });
        // console.log(innerHTML)
        return innerHTML;  
    },


    children: (children) => {
        let innerHTML;
        
        innerHTML = helper.recursive(children);
        // console.log(innerHTML);
        innerHTML = innerHTML.join(" ").replace(new RegExp('> ', 'g'), ">\n").replace(new RegExp(",","g"), "");

        return innerHTML;
    }, 

    import: (package, path) => {
        
        let { children, attribs } = package;
        let { name, group, expand } = attribs;
        let importArray;
        let file = "";
        let imported = [];


        if(expand){
            importArray = helper.flatten(children);
        }else{
            importArray = children;
        };
       
        importArray.forEach(child => {  

            child.attribs && !child.attribs.name ? child.attribs.name = "$"+child.name.toUpperCase() : "";  

            if(child.attribs && !imported.includes(child.attribs.name)){
                
                let importPath = helper.importPath(child, group, path)

                file += `import { ${child.attribs.name || "$"+child.name.toUpperCase()} } from '${importPath}';\n`

                imported.push(child.attribs.name);

            } 
        })
  
        return file;
    },

    importPath: (component, parentGroup, path) => {
        
        let { name, group } = component.attribs;    
  
        if(parentGroup && group && parentGroup === group){
            return path + name; 
        }else if(parentGroup && group && parentGroup !== group){
            return path + "../" + group;
        }else if(group && !group){
            return "../" + path + name;
        }else if(!parentGroup && group){
            return path + group + "/";
        }else if(!parentGroup && !group){
            return path + name;
        }else{
            return console.log("Error: Cannot find path to component")
        }
    }
}

module.exports = helper;