module.exports = function(sequelizeLibrary, howAssignDataTypes) {
  var Todo = sequelizeLibrary.define("NameOfTable", {
    text: howAssignDataTypes.STRING,
    complete: howAssignDataTypes.BOOLEAN
  });
  return Todo;
};
