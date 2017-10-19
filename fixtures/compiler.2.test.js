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

const jobNum = 2;

const sample2 =`    
<nav class="navbar" component="stateful" group="Nav" name="Navbar" expand="deep">
    <div class="nav-wrapper" component="stateful" group="Nav" name="NavWrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down" component="stateful" name="NavLink" group="Nav">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
    </div>
</nav>

<div class="container" style="margin-top: 1rem" name="TabWrapper" group="Tab" component="stateful">
    <div class="row" component="stateless" component="stateful" expand="shallow">
        <div class="col s12" component="stateless">
            <ul class="tabs" component="stateless" name="TabList" group="Tab">
                <li class="tab col s3" component="stateless" name="TabItem" group="Tab"><a href="#about">About</a></li>
                <li class="tab col s3" component="stateless" name="TabItem" group="Tab"><a class="active" href="#build">Build</a></li>
                <li class="tab col s3" component="stateless" name="TabItem" group="Tab"><a href="#team">The Team</a></li>
                <li class="tab col s3" component="stateless" name="TabItem" group="Tab"><a href="#feedback">Feedback</a></li>
            </ul>
        </div>
        <div id="about" class="col s12" component="stateless" name="About" group="Page" expand="deep">
            <p>Welcome to Fission! This application will generate react component based on old-fashion html markups. Insert any html component you like, and it will return a React component file and its css file.</p>
            <p>On the Build page, insert your html markups. Currently, you can give compiling configuration inline style as tag properties. These options are supported: </p>         
            <ul>
                <li>name (file name)</li>
                <li>component (stateful || stateless)</li>
                <li>group (group component into its own folder)</li>
                <li>style (any css markup)</li>
                <li>expand (shallow || deep)</li>
            </ul>
            <p>Nesting html is supported, but this is still a prototype, there might be some errors when generating components nesting component</p>
        </div>

        <div id="build" class="col s12" component="stateful" name="Build" group="Page" expand="shallow">
            <div class="card blue-grey darken-1" component="stateful" group="Card" name="Wrapper" expand="deep">
                <div class="card-content white-text" component="stateless" group="Card" name="Content">
                    <span class="card-title"  component="stateless" group="Card" name="Title">Card Title</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action" component="stateless" group="Card" name="Action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                </div>
            </div>
        </div>

        <div id="team" class="col s12" component="stateful" name="Team" group="Page">
            about the team
        </div>

        <div id="feedback" class="col s12" component="stateful" name="Feedback" group="Page" expand="deep">
        <div class="row">
            <div class="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                <input id="last_name" type="text" class="validate">
                <label for="last_name">Last Name</label>
                </div>
            </div>
            <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">Textarea</label>
            </div>
        </div>
    </div>
</div>
`
const sample3 = `
<div name="Container" group="Grid" component="stateless"></div>
<div name="Col" group="Grid" component="stateless"></div>
<div name="Row" group="Grid" component="stateless"></div>`

const deconstructHTML = deconstruct(sample2, (html) =>{
    // html = html.replace("\\","")

    let objHTML = parse(html)
    let package = {
        attribs: {
            name: "App",
            expand: "shallow"
        },
        children: objHTML       
    }

    compile(package, 'createApp', 3, () => {
        console.log("completed")
    });

});



// setTimeout(() => inspect(sample.App.children), 1000)