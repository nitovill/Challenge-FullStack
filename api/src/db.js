const { Sequelize } = require("sequelize");
const { dbUser, dbPassword, dbHost, dbName, dbPort } = require("../lib/config");
const operationF = require("./models/Operation");
const typeF = require("./models/Type");

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: "mysql",
  logging: false,
  native: false,
});

const Operation = operationF(sequelize);
const Type = typeF(sequelize);

Type.hasMany(Operation, { as: "operations" });
Operation.belongsTo(Type, {
  foreignKey: "typeId",
  as: "type",
});

module.exports = {
  conn: sequelize,
  Operation,
  Type,
};
