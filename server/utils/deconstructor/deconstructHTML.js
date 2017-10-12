// Import dependencies & helper
//--------------------------------------------------------
const fse = require("fs-extra");
const helper = require("./helpers/deconstruct.helper");

// Export deconstructor function
//--------------------------------------------------------

module.exports = function deconstruct(html){

    // array of html tags
    let htmlArray = helper.parseHTML(html);
    
    // convert array into nested object
    let htmlObj = helper.nestHTML(htmlArray);

    // let tag = `<div class="card-content white-text" name="CardContent" Group="Card">`;
    // helper.getProps("div",tag)

    let obj = {
        a : {
            b : {
                c: {
                    d: {
                        e: "f"
                    }
                }
            }
        }
    }


};
