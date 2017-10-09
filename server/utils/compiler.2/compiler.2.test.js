// Import Dependencies
//--------------------------------------------------------
const compiler = require('./compiler.2.js');

// Sample Template
//--------------------------------------------------------
const sample = {
    
    App: {
        name: 'App',
        test: 'App.test.js',
        children:[
                {
                name: 'Container',
                className: 'container fluid',
                js: {
                    type: 'Smart',
                    tag: 'div' 
                },
                css: {
                    width: "auto",
                    "background-color": "green"
                },
                children: [
                    {
                        name: 'Row',
                        className: 'row',
                        js: {
                            type: 'Dumb',
                            tag: 'div' 
                        },
                        css: {
                            "background-color": "yellow"
                        },
                        children: [
                            {
                                name: 'Title',
                                className: 'title',
                                js: {
                                    type: 'Dumb',
                                    tag: 'h1' 
                                },
                                css: {
                                    color: 'black'
                                }
                            }
                        ]
                    },         
                      
                    {
                        name: 'Col',
                        className: 'col-5',
                        js: {
                            type: 'Dumb',
                            tag: 'div' 
                        },
                        css: {
                            width: "auto",
                            "background-color": "blue"
                        },
                        children: [
                            {
                                name: 'Paragraph',
                                className: 'paragraph',
                                js: {
                                    type: 'Dumb',
                                    tag: 'p' 
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
}

compiler(sample)