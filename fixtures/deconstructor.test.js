// Import Dependencies
//--------------------------------------------------------
const deconstruct = require("../utils/deconstructor/deconstructHTML.js");

const sample = `
<div class="row" name="Row">
    <div class="col s12 m6" Name="Col">
        <div class="card blue-grey darken-1" name="Card" group="Card" component="Dumb">
        <div class="card-content white-text" name="CardContent" group="Card">
            <span class="card-title" Name="CardTitle" group="Card">Card Title</span>
            <p name="Paragraph" group="Text">I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action" name="Card Action" group="Card">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
        </div>
        </div>
    </div>
</div>
`

deconstruct(sample);