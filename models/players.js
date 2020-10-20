'use strict';
module.exports = (sequelize, DataTypes) => {
  const players = sequelize.define('players', {
    name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    hometown: DataTypes.STRING,
    current_team: DataTypes.STRING,
    image_url: DataTypes.STRING,
    nationality: DataTypes.STRING
  }, {});
  players.associate = function(models) {
    // associations can be defined here
  };
  return players;
};