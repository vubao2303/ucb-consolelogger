const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/posts"
// because we already make that in line 7 
router
  .route("/")
  .get(postsController.findAll)
  .post(postsController.create);



// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;
