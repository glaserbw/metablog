'use strict';
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, {});
  tag.associate = function(models) {
    models.tag.belongsToMany(models.article, {through: 'articleTags'}); //associates this with articles model. its through because its using articletags as a joining table
	};
  return tag;
};