module.exports = {
    
    childrenComp: (array,type) => {

        let children = [];

        array.map(child => {

            const {name, className, js} = child;           
            let openTag = `<${name}>`;
            let closeTag = `</${name}>`  
            
            children.push(`${type === 'Dumb'? "\t\t":"\t\t\t\t" }${openTag}Add more nesting component here ${closeTag}`)

        });
        
        return children.join("\n")
    },

    importChildren: (children) => {
        let file = "";

        children.forEach(child => {   
            file += `import { ${child.name} } from '../${child.name}';\n`
        })

        return file;
    }
}