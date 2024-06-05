const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "codekub_portfoliov1",
  "codekub_thetaomc",
  "Bo30?yc83",
  {
    host: "thsv73.hostatom.com",
    dialect: "mysql",
  }
);

module.exports = sequelize;
