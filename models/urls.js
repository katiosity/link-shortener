'use strict';
module.exports = function(sequelize, DataTypes) {
  var urls = sequelize.define('urls', {
    link: DataTypes.STRING,
    hash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return urls;
};