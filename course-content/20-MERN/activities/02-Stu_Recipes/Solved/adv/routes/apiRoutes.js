const router = require("express").Router();
const db = require("../models");

router.get("/recipes", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  // Do a case-insensitive search for "w3schools" in a string: => https://www.w3schools.com/jsref/jsref_regexp_i.asp
  // Provides regular expression capabilities for pattern matching strings in queries. MongoDB  => https://docs.mongodb.com/manual/reference/operator/query/regex/
  db.Recipe.find({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(422).end());
});

module.exports = router;
