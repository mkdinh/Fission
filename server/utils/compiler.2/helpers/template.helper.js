module.exports = {
    
    childrenComp: (array) => {

        let children = "";

        array.length > 1 ? children += '<div>\n' : ''

        array.map(child => {
        const {name, className, js} = child;           
        let openTag = `<${name}>`;
        let closeTag = `</${name}>`
    
        children += `
        \t${openTag} Add more nesting component here ${closeTag}\n`
        })
        
        array.length > 1 ? children += "\n\t\t</div>": ""

        return children
    },

    importChildren: (children) => {
        let file = "";

        children.forEach(child => {   
            file += `import { ${child.name} } from '../${child.name}';\n`
        })

        return file;
    }
}