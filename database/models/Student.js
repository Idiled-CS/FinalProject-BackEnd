const Sequelize = require('sequelize');
const { validate } = require('../db');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,

    validate:{
      notEmpty: true,
    }
  },

  lastname: {
    type: Sequelize.STRING,

    validate:{
      notEmpty: true,
    }
  },

  email: {
    type: Sequelize.STRING,

    validate:{
      isEmail: true,
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://picsum.photos/200/300",
  },

  gpa: {
    type: Sequelize.FLOAT,

    validate:{
      max: 4.0,
      min: 0.0,
    }
  }
});

module.exports = Student;