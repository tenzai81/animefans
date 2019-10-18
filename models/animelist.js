'use strict';
module.exports = (sequelize, DataTypes) => {
  const animelist = sequelize.define('animelist', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {});
  animelist.associate = function(models) {
    // associations can be defined here
  };
  return animelist;
};