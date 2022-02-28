const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("type", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
};
