// Import Dependencies
//--------------------------------------------------------
const compile = require("../utils/compiler.2/compiler.js");
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
                className: "",
                html: {
                    expand: true,
                    type: "Smart",
                    tag: "nav",
                    value: "<img src='logo.png'/>",
                },
                css: {},
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
                                    tag: "il",
                                    value: "<a href='#'>Sass</a>"
                                },
                            },
                            {
                                name: "NavLink",
                                className: "",
                                css: {},
                                html: {
                                    type: "Dumb",
                                    tag: "il",
                                    value: "<a href='#'>Sass</a>"
                                }
                            },
                            {
                                name: "NavLink",
                                className: "",
                                css: {},
                                html: {
                                    type: "Dumb",
                                    tag: "il",
                                    value: "<a href='#'>Sass</a>"
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
                group: "Grid"
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
                                        html: {
                                            type: "Dumb",
                                            tag: "h1",
                                            value: "Welcome to the Fission Application"
                                        },
                                        css: {
                                            color: "black"
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
                                    "margin-right": 0
                                },
                                children: [
                                    {
                                        name: "Col",
                                        className: "col s${size}",
                                        classProps: {size: "s4"},
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
                                                html: {
                                                    type: "Dumb",
                                                    tag: "p",
                                                    value: "This is a sample view generated by the application"
                                                },
                                                css: {
                                                    "font-size": "1rem"
                                                }
                                            },
                                            {
                                                name: "Paragraph",
                                                className: "paragraph",
                                                html: {
                                                    type: "Dumb",
                                                    tag: "p",
                                                    value: "This is a sample view generated by the application"
                                                },
                                                css: {
                                                    "font-size": "1rem"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        name: "Col",
                                        className: "col s${size}",
                                        classProps: {size: "s8"},
                                        Group: "Grid",
                                        html: {
                                            type: "Dumb",
                                            tag: "div" 
                                        },
                                        css: {
                                            width: "auto",
                                            "background-color": "red",
                                        },
                                        children: [
                                            {
                                                name: "Paragraph",
                                                className: "paragraph",
                                                html: {
                                                    type: "Dumb",
                                                    tag: "p",
                                                    value: "This is a sample view generated by the application"
                                                },
                                                css: {
                                                    "font-size": "1rem"
                                                }
                                            },
                                            {
                                                name: "Paragraph",
                                                className: "paragraph",
                                                html: {
                                                    type: "Dumb",
                                                    tag: "p",
                                                    value: "This is a sample view generated by the application"
                                                },
                                                css: {
                                                    "font-size": "1rem"
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

compile(sample, 'createApp')