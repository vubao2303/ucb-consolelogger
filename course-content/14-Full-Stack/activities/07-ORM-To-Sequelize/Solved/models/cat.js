module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("dog", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Todo;
};
