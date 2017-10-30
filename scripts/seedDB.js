const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/chain-reaction",
  {
    useMongoClient: true
  }
);

const componentSeed = [
  {
      "_id": "59ea80e2355b844588fbdcb7",
      "name": "Raised Button (Left Icon)",
      "group": "buttons",
      "html": "<a class='waves-effect waves-light btn'><i class='material-icons left'>cloud</i>button</a>",
      "__v": 0,
      "create_by": "59ea5f79e2103e3c4c3fb563",
      "type": "Dumb",
      "default": false,
      "css": {
          "color": "#000000"
      }
  },
  {
      "_id": "59ea80f2355b844588fbdcb8",
      "name": "Raised Button (Right Icon)",
      "group": "buttons",
      "html": "<a class='waves-effect waves-light btn'><i class='material-icons right'>cloud</i>button</a>",
      "__v": 0,
      "type": "Dumb",
      "default": true,
      "css": {
          "color": "#000000"
      }
  },
  {
      "_id": "59ea812c355b844588fbdcb9",
      "name": "Float Button",
      "group": "buttons",
      "html": "<a class='btn-floating btn-large waves-effect waves-light red'><i class='material-icons'>add</i></a>",
      "__v": 0,
      "type": "Dumb",
      "default": true,
      "css": {
          "color": "#000000"
      }
  },
  {
      "_id": "59ea81bfa4a6f946488f02cf",
      "name": "Flat Button",
      "group": "buttons",
      "html": " <a class='waves-effect waves-teal btn-flat'>Button</a>",
      "__v": 0,
      "type": "Dumb",
      "default": true,
      "css": {
          "color": "#000000"
      }
  },
  {
      "_id": "59ea820ca4a6f946488f02d0",
      "name": "Submit Button",
      "group": "buttons",
      "html": "<button class='btn waves-effect waves-light' type='submit' name='action'>Submit\n<i class='material-icons right'>send</i>\n</button>",
      "__v": 0,
      "type": "Dumb",
      "default": true,
      "css": {
          "color": "#000000"
      }
  },
  {
      "_id": "59ea8230a4a6f946488f02d1",
      "name": "Disabled Button",
      "group": "buttons",
      "html": "<a class='btn-large disabled'>Button</a>",
      "__v": 0,
      "type": "Dumb",
      "default": true,
      "css": {
          "color": "#000000"
      }
  },
  {
      "_id": "59f4ef6f9c17fe541c147b23",
      "create_by": "59ea5f79e2103e3c4c3fb563",
      "__v": 0,
      "name": "Sample Button",
      "html": "<a class=\"btn\">Hello There UNC Bootcamp!</a>",
      "type": "Smart",
      "default": false,
      "css": {
          "color": "#000000"
      }
  },
  {
      "_id": "59f60c135e0ed23aac0610a8",
      "html": "<button class='btn waves-effect waves-light' type='submit' name='action'>Hello\n<i class='material-icons right'>send</i>\n</button>",
      "group": "buttons",
      "name": "Golden Button",
      "create_by": "59ea5f79e2103e3c4c3fb563",
      "__v": 0,
      "type": "Dumb",
      "default": false,
      "css": {
          "background-color": "#d63f4a"
      }
  },
  {
      "_id": "59f60c155e0ed23aac0610a9",
      "html": " <a class='waves-effect waves-teal btn-flat'>hello therr</a>",
      "group": "Sample Group",
      "name": "there",
      "create_by": "59ea5f79e2103e3c4c3fb563",
      "__v": 0,
      "type": "Smart",
      "default": false,
      "css": {
          "background-color": "#74a749"
      }
  },
  {
      "_id": "59f6a0c0593ebeaabbf0cbe1",
      "background-color": "green",
      "type": "Dumb",
      "default": false,
      "css": {
          "color": "#000000"
      }
  },
  {
      "_id": "59f6ab9054793045d84f0a8e",
      "html": "<button class='btn waves-effect waves-light' type='submit' name='action'>Submit\n<i class='material-icons right'>send</i>\n</button>",
      "group": "button",
      "name": "Sample",
      "create_by": "59ea5f79e2103e3c4c3fb563",
      "__v": 0,
      "type": "Smart",
      "default": false,
      "css": {
          "background-color": "#fe1733"
      }
  },
  {
      "_id": "59f792f3fd86d60740dde2d1",
      "html": " <a class='waves-effect waves-teal btn-flat'>Button</a>",
      "group": "buttons",
      "name": "Button",
      "create_by": "59ea5f79e2103e3c4c3fb563",
      "__v": 0,
      "type": "Smart",
      "default": false,
      "css": {
          "color": "#000000"
      }
  }
]

db.Component
  .remove({})
  .then(() => db.Component.collection.insertMany(componentSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
