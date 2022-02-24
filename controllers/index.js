var router = require("express").Router();
var homeRoutes = require("./home-routes");
var commentRoutes = require("./api/comment-routes");
var userRoutes = require("./api/user-routes");
var postRoutes = require("./api/post-routes");


router.use("/", homeRoutes);
router.use("/api/comments", commentRoutes);
router.use("/api/users", userRoutes);
router.use("/api/posts", postRoutes);

module.exports = router;