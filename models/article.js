'use strict';
module.exports = (sequelize, DataTypes) => {
  var article = sequelize.define('article', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    authorId: DataTypes.INTEGER
  }, {});
  article.associate = function(models) {
    models.article.belongsTo(models.author); //associates this back to author many relationship. article belongs to author, author has many articles 
  	models.articles.hasMany(models.comment); // articles have many authors
  };
  return article;
};