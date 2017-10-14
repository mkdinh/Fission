// Import Dependencies
//--------------------------------------------------------
const parse = require("html-dom-parser");
const deconstruct = require("../utils/compiler.2/deconstructor")
const compile = require("../utils/compiler.2/compiler.js");
const inspect = require("../utils/compiler.2/inspector.js");
const fse = require('fs-extra');

// Sample Template
//--------------------------------------------------------
// const jobNum = Math.floor(Math.random() * 10000000000)  

const jobNum = 1;

const sample = {
    jobNum: jobNum,

    App: {
        name: "App",
        children:[
            {
                name: "Nav",
                className: "navbar",
                html: {
                    expand: true,
                    type: "Smart",
                    tag: "nav",
                    value: "Fission"
                },
                css: {
                    "font-size": "2rem",
                    padding: "0 1rem"
                },
                children: [
                    {
                        name: "NavList",
                        className: "right hide-on-med-and-down",
                        html: {
                            type: "Smart",
                            tag: "ul"
                        },
                        css: {},
                        children: [
                            {
                                name: "NavLink",
                                className: "",
                                css: {},
                                html: {
                                    type: "Dumb",
                                    tag: "li",
                                    value: "<a href='#'>Home</a>"
                                },
                            },
                            {
                                name: "NavLink",
                                className: "",
                                css: {},
                                html: {
                                    type: "Dumb",
                                    tag: "li",
                                    value: "<a href='#'>Build</a>"
                                }
                            },
                            {
                                name: "NavLink",
                                className: "",
                                css: {},
                                html: {
                                    type: "Dumb",
                                    tag: "li",
                                    value: "<a href='#'>About</a>"
                                }
                            },
                        ]
                    }
                ] 
            },

            {
                name: "Container",
                className: "container ${fluid}",
                classProps: {fluid: "fluid"},
                group: "Grid",
                html: {
                    expand: true,
                    type: "Smart",
                    tag: "div",
                },
                css: {
                    width: "auto",
                    "margin-top": "2rem"
                },
                children: [
                    
                            {
                                name: "Row",
                                className: "row",
                                group: "Grid",
                                html: {
                                    type: "Dumb",
                                    tag: "div" 
                                },
                                css: {
                                    
                                },
                                children: [
                                    {
                                        name: "Title",
                                        className: "title",
                                        group: "Text",
                                        html: {
                                            type: "Dumb",
                                            tag: "h1",
                                            value: "Welcome to Fission"
                                        },
                                        css: {
                                            color: "black",
                                            "text-align": "center"
                                        }
                                    }
                                ]
                            },
                            {
                                name: "Row",
                                className: "row",
                                group: "Grid",
                                html: {
                                    type: "Dumb",
                                    tag: "div" 
                                },
                                css: {
                                    "border": "1px solid black",
                                    "margin-left": 0,
                                    "margin-right": 0,
                                    "text-align": "center"
                                },
                                children: [
                                    {
                                        name: "Col",
                                        className: "col s${size}",
                                        classProps: {size: "s6"},
                                        group: "Grid",
                                        html: {
                                            type: "Dumb",
                                            tag: "div",
                                        },
                                        css: {
                                            width: "auto",
                                            "background-color": "blue"
                                        },
                                        children: [
                                            {
                                                name: "Paragraph",
                                                className: "paragraph",
                                                group: "Text",
                                                html: {
                                                    type: "Dumb",
                                                    tag: "p",
                                                    value: "This was generated by the application"
                                                },
                                                css: {
                                                    "font-size": "2rem"
                                                }
                                            },
                                            {
                                                name: "Paragraph",
                                                className: "paragraph",
                                                group: "Text",
                                                html: {
                                                    type: "Dumb",
                                                    tag: "p",
                                                    value: "Learn more about the Chain-React.ion Team!"
                                                },
                                                css: {
                                                    "font-size": "2rem"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        name: "Col",
                                        className: "col s${size}",
                                        classProps: {size: "s6"},
                                        group: "Grid",
                                        html: {
                                            type: "Dumb",
                                            tag: "div" 
                                        },
                                        css: {
                                            width: "auto",
                                            "background-color": "red"
                                        },
                                        children: [
                                            {
                                                name: "Paragraph",
                                                className: "paragraph",
                                                group: "Text",
                                                html: {
                                                    type: "Dumb",
                                                    tag: "p",
                                                    value: "Framework is from MaterializeCSS"
                                                },
                                                css: {
                                                    "font-size": "2rem"
                                                }
                                            },
                                            {
                                                name: "Paragraph",
                                                className: "paragraph",
                                                group: "Text",
                                                html: {
                                                    type: "Dumb",
                                                    tag: "p",
                                                    value: "Generate React components with ease!"
                                                },
                                                css: {
                                                    "font-size": "2rem"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }         
                        ]
            }         
        ]
    }
}


const sample2 =`    
    <div class="row" name="Row" style="width: 100%, margin: auto" component="Dumb" group="Grid">
        <div class="card blue-grey darken-1" name="CardContainer" group="Card" component="stateful" expand="shallow">
        <div class="col s12 m6" Name="Col" group="Grid">
            <div class="card blue-grey darken-1" name="ContentWrapper" group="Card" component="Dumb">
                <div class="card-content white-text" name="CardContent" group="Card">
                    <span class="card-title" Name="CardTitle" group="Text">Card Title</span>
                    <p name="Paragraph" group="Text">I am a very simple card. I am good at containing small bits of information.</p>
                </div>
                <div class="card-action" name="CardAction" component="Dumb" group="Card">
                    <a href="#" group="Text">This is a link</a>
                    <a href="#" group="Text">This is another link</a>
                </div>
            </div>
        </div>
        </div>
    </div>
`

const deconstructHTML = deconstruct(sample2, (html) =>{
    // html = html.replace("\\","")

    let objHTML = parse(html)
    let package = {
        name: "App",
        children: objHTML       
    }

    compile(package, 'createApp', 1, () => {
        console.log("completed")
    });

});



// setTimeout(() => inspect(sample.App.children), 1000)