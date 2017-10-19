// Import Dependencies
//--------------------------------------------------------
const templater = require('./templater.1')

// Complier Modules
//--------------------------------------------------------
module.exports = function compile(package, parentObj) {
    // if this is a recursive interation, set parent the name of parent object for reference
    let parent = parentObj || "";
    let children = "";

        // loop through each key in object and recursively check if key value is an object
        for(component in package){

            if(component === 'name'){
                // object have name component, then set this name as parent object
                // this will be pass as an argument for recursive loop
                parent = package[component]

            }else if(package[component] === 'default'){ 
                // if the component is using the default template
                // This will component will use default settings
                console.log(`default template on ${component}`)
                
            }else if(typeof package[component] === 'object'){
                // if this prop is a nested object
                // check whether it is called 'children' -> then run recursive loop
                // this will be where we create js and css files

                if(component === 'children'){
                    // if the component is a children
                    console.log(`##########################################################################`)
                    console.log(`                              ${parent}                                   `)
                    console.log(`##########################################################################`)

                    compile(package[component],parent) 
                }else{
                    // if component is a attributes (js/css)
                    // this prevent extra console log on the parent container as a component
                    if(!package[component].name){
                        console.log(`----------------------${component}-------------------------------`)
                    }
                    
                    // recursive loop to read over files parameters
                    // either recursively reading each props or send the whole object as argument to create files 
                    templater(package[component],component, ()=> {
                        compile(package[component],parent)
                    })
                }

            }else{
                // This is where we will grab the properties of each css/style to be used as params
                // console.log(`${component}: ${package[component]}`)
            }   
        }
}
     