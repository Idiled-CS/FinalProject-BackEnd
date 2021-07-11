const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
  },

  imageUrl:{
    type: Sequelize.STRING,
    defaultValue: "https://picsum.photos/200/300",

  },

  address:{
    type: Sequelize.STRING,

    validate: {
      notEmpty: true,
    }
  },

  description: {
    type: Sequelize.TEXT,
  }

});

module.exports = Campus;