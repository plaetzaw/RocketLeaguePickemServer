'use strict';
module.exports = (sequelize, DataTypes) => {
  const teams = sequelize.define('teams', {
    name: DataTypes.STRING,
    acroynm: DataTypes.STRING,
    image_url: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  teams.associate = function(models) {
    // associations can be defined here
  };
  return teams;
};