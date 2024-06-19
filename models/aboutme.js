const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AboutMe = sequelize.define('AboutMe', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_title: {
      type: DataTypes.STRING
    },
    intro: {
      type: DataTypes.TEXT
    },
    details: {
      type: DataTypes.TEXT
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING
    },
    facebook: {
      type: DataTypes.STRING
    },
    instagram: {
      type: DataTypes.STRING
    },
    line: {
      type: DataTypes.STRING
    },
    profile_image: {
      type: DataTypes.STRING
    },
    bg_image: {
      type: DataTypes.STRING
    }
  });
  
  module.exports = AboutMe;
  