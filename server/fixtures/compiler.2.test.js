// Import Dependencies
//--------------------------------------------------------
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
                                                html: {
                                                    type: "Dumb",
                                                    tag: "p",
                                                    value: "See more in About!"
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
                                        Group: "Grid",
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

// {
//     name: "Col",
//     className: "col s4",
//     html: {
//         type: "Dumb",
//         tag: "div" 
//     },
//     css: {
//         width: "auto",
//         "background-color": "blue"
//     },
//     children: [
//         {
//             name: "Paragraph",
//             className: "paragraph",
//             html: {
//                 type: "Dumb",
//                 tag: "p",
//                 value: "This is a sample view generated by the application"
//             },
//             css: {
//                 "font-size": "1rem"
//             }
//         },
//         {
//             name: "Paragraph",
//             className: "paragraph",
//             html: {
//                 type: "Dumb",
//                 tag: "p",
//                 value: "This is a sample view generated by the application"
//             },
//             css: {
//                 "font-size": "1rem"
//             }
//         }
//     ]
// }

compile(sample, 'createApp');
// setTimeout(() => inspect(sample.App.children), 1000)