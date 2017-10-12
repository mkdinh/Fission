// Import dependencies
//--------------------------------------------------------
const fse = require("fs-extra");

// Export deconstructor helper function
//--------------------------------------------------------
const helper = {
    parseHTML: function(html){

        let parse = html
        
        // remove all white spaces in front of open tags and close tags
        parse = parse.replace(/\s*</g,"<").replace(/>\s*/g,">");
        // remove tabs 
        parse = parse.replace(/\s\s+/g,"")
        // place newline in between the open 
        parse = parse.replace(/></g,">\n<");
        // parse inline tag ex: <a></a>
        parse = parse.replace(/>/g,">\n").replace(/</g,"\n<");
        // split into array by new line
        parse = parse.split("\n");
        // remove array with only white spaces ''
        parse = parse.filter(el => el.length > 0);
        // console.log(parse)
        return parse;
        
    },

    nestHTML: function(array, obj, start, end, value, path){

        var nested = obj || {};
        var start = start || 0;
        var end = end || array.length;
        var path = path || "App";
        // console.log(path)
        
        // remove "<" any any attribute follows the tag
        let openTag = array[start];
        let closeTag;
        let closeIndex;
        var value = value || "";

        openTag = openTag.replace(/</,"").replace(/\s+\S*/g,"");

        for(let j = array.length-1; j > 0; j--){

            // remove ">" any any attribute precedes the tag
            let tag = array[j].replace(/>/,"").replace(/\S*\s*[/]/,"/");

            if(tag === "/"+openTag){
                closeTag = tag;
                closeIndex = j;
                break;
            };
        };
        
        if(openTag && closeTag){
            path += "." + openTag;
            console.log(path)
            let props = helper.getProps(array[start],openTag);

            helper.set(nested,path,props)

            array.splice(start,1);
            array.splice(closeIndex,1);
            // console.log(nested)
            helper.nestHTML(array, nested, start, end, value, path)
        }else{

            return console.log(JSON.stringify(nested,null,5))
        }

    },

    getProps: (whole, tag) => {
        var props = props || [];
        let obj = {};
        // remove tag and <>
        whole = whole.replace("<"+whole,"").replace(">","");

        let regexp = /\w+?=".*?"\s*/g;
        props = whole.match(regexp);

        props.forEach(prop => {
            prop = prop.split("=");
            if(prop[0] === "class"){
                prop[0] = "className";
            }
            
            obj[ prop[0] ] = prop[1];
        })

        obj.css = {}
            obj.html = {
            type: "Dumb",
            tag: tag
        }

        return obj;
    },

    set: (obj, path, props) => { 
        const keys = path.split('.');
        const lastKey = keys[keys.length-1];
        const lastObj = keys.reduce((obj, key) => 
            {
                obj[key] = obj[key] || {},
                obj[key].children = obj[key].children || [];
                return obj[key];
            },
            obj);
            
        lastObj.children.push(props)    
        for(key in props){
            lastObj.children[key] = props[key];
        }
    }
};

module.exports = helper;