// Import dependencies & helper
//--------------------------------------------------------
const helper = require("./helpers/deconstruct.helper");

// Export deconstructor function
//--------------------------------------------------------

module.exports = function deconstruct(html,cb){

    // array of html tags
    let strHTML = helper.parseHTML(html);

    cb(strHTML)


};
