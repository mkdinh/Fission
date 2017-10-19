const helper =  {
    
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

    groupExport: function(children){
        // object composed of unique component as key and group as value
        let uniqueObj = {};
        // flatten nested object into single level
        let flattenArray = helper.flatten(children);

        // filter out only unique group key value pairs
        flattenArray.forEach(component => {
            if(!uniqueObj.hasOwnProperty(component.name) && component.group){
                uniqueObj[component.name] = component.group
            }else{
                // console.log('already included')
            }
        });

        // return object to inspector function
        return uniqueObj;
    }
}

module.exports = helper;