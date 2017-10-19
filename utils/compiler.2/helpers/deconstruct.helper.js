// Import dependencies
//--------------------------------------------------------

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
        parse = parse.replace(/>/g,">").replace(/</g,"<");
        // split into array by new line
        parse = parse.split("\n");
        // remove array with only white spaces ''
        parse = parse.filter(el => el.length > 0);
      
        return parse.join("");
        
    },

    nestHTML: function(array, obj, start, end, value, path,arrayObj){
        var obj = obj || {
            jobNum: 2
        };

        var arrayObj = arrayObj || [];
        
        var start = start || 0;
        var end = end || array.length;
        var path = path || "App";

        // remove "<" any any attribute follows the tag
        let openTag = array[start];
        var closeTag;
        var closeIndex;
        var value = value || "";

        openTag = openTag.replace(/</,"").replace(/\s+\S*/g,"");

        for(var j = array.length-1; j > 0; j--){

            // remove ">" any any attribute precedes the tag
            let tag = array[j].replace(/>/,"").replace(/\S*\s*[/]/,"/");

            if(tag === "/"+openTag){
                closeTag = tag;
                closeIndex = j;
                break;
            };
        };
        // console.log(obj)
        if(!closeTag){
            let count = 0;
            let nestedObj = arrayObj.reduce((obj,el) => {
                console.log(el)
                _.get(obj,"children".repeat(".children")) = [el];
                count++
                return obj
            },{
                name: "App",
                children: []
            })
            console.log(nestedObj)
            // console.log(JSON.stringify(arrayObj,null,5));
            
            return output = {
                obj: obj,
                array: array   
            };
        
        }else{
            path += ".children";
            // console.log(path)
            let props = helper.getProps(array[start],openTag);
            // helper.set(obj,path,props)
            arrayObj.push(props);
            array.splice(closeIndex,1);
            array.splice(start,1);
            helper.nestHTML(array, obj, start, end, value, path,arrayObj)
        }

        return output;
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
            prop[1] = prop[1].replace(/"/g,"")
            obj[ prop[0] ] = prop[1];
        })

        obj.css = {}
            obj.html = {
            type: "Dumb",
            tag: tag,
        }

        obj.children = []

        return obj;
    },

    set: (obj, path, props) => { 
        const keys = path.split('.');

        const lastObj = keys.reduce((object, key) => {
            
            if(object[key]){
                object[key] = obj[key] || {}
            }else{
                object[key] = obj[key] || []
            }
                     
            return object[key]

        },obj)
        lastObj.push(props);
        // console.log(lastObj)
        return lastObj;
    }
};

module.exports = helper;