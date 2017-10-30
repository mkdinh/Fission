// Import dependencies & helper
//--------------------------------------------------------
const helper = require("./helpers/deconstruct.helper");

// Export deconstructor function
//--------------------------------------------------------

module.exports = function deconstruct(array,cb){

    // array of html tags
    // convert array into string
    let html = array.reduce((str, comp) => str += comp +"\n", "")
 
    cb(html)
};
