// Import Dependencies
//--------------------------------------------------------
const compile = require("../utils/compiler.2/compiler.js");
const fse = require('fs-extra');

// Sample Template
//--------------------------------------------------------
// const jobNum = Math.floor(Math.random() * 10000000000)  

const jobNum = 13;

const sample = {
    jobNum: jobNum,

    App: {
        name: "App",
        test: "App.test.js",
        children:[
                {
                    name: "Nav",
                    js: {
                        type: "Smart",
                        tag: "nav",
                        value: "<a> href='#' class='brand-logo'>Logo</a>"
                    },
                    children: [
                        {
                            name: "NavList",
                            className: "right hide-on-med-and-down",
                            js: {
                                type: "Smart",
                                tag: "ul"
                            },
                            children: [
                                {
                                    name: "NavLink",
                                    className: "",
                                    js: {
                                        type: "Dumb",
                                        tag: "il",
                                        value: "<a href='#'>Sass</a>"
                                    },
                                },
                                {
                                    name: "NavLink",
                                    className: "",
                                    js: {
                                        type: "Dumb",
                                        tag: "il",
                                        value: "<a href='#'>Sass</a>"
                                    }
                                },
                                {
                                    name: "NavLink",
                                    className: "",
                                    js: {
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
                className: "container",
                js: {
                    type: "Smart",
                    tag: "div",
                },
                css: {
                    width: "auto",
                    "background-color": "green"
                },
                children: [
                    {
                        name: "Row",
                        className: "row",
                        js: {
                            type: "Dumb",
                            tag: "div" 
                        },
                        css: {
                            "background-color": "yellow"
                        },
                        children: [
                            {
                                name: "Title",
                                className: "title",
                                js: {
                                    type: "Dumb",
                                    tag: "h1",
                                    value: "Welcome to the PRC Application"
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
                        js: {
                            type: "Dumb",
                            tag: "div" 
                        },
                        css: {
                            "background-color": "yellow"
                        },
                        children: [
                            {
                                name: "Col",
                                className: "col-5",
                                js: {
                                    type: "Dumb",
                                    tag: "div" 
                                },
                                css: {
                                    width: "auto",
                                    "background-color": "blue"
                                },
                                children: [
                                    {
                                        name: "Paragraph",
                                        className: "paragraph",
                                        js: {
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
                                        js: {
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

compile(sample)