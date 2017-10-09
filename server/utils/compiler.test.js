// Import Dependencies
//--------------------------------------------------------
const compiler = require('./compiler.js');

// Sample Template
//--------------------------------------------------------
const sample = {
    index: 'default',
    App: {
        name: 'App',
        test: 'App.test.js',
        children:{

            Container: {
                name: 'Container',
                js: {
                    type: 'Smart',
                    className: 'container fluid',
                    tag: 'div' 
                },
                css: {
                    className: 'container',
                    width: "auto",
                    "background-color": "green"
                },
                children: {

                    Row: {
                        name: 'Row',
                        js: {
                            type: 'Dumb',
                            className: 'row',
                            tag: 'div' 
                        },
                        css: {
                            className: 'row',
                            "background-color": "yellow"
                        },
                        children: {
                            name: 'Title',
                            js: {
                                type: 'Dumb',
                                className: 'title',
                                tag: 'h1' 
                            },
                            css: {
                                className: "title",
                                color: 'black'
                            }
                        }
                    },         
                      
                    Col: {
                        name: 'Col',
                        js: {
                            type: 'Dumb',
                            className: 'col-5',
                            tag: 'div' 
                        },
                        css: {
                            className: 'col-5',
                            width: "auto",
                            "background-color": "blue"
                        }
                    }
                }
            }
        }
    }
}

compiler(sample)