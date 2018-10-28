var express = require("express");
var router = express.Router();

// Get Page model
var Page = require("../models/page");

// export
module.exports = router;

// Get Home / index
router.get("/", function(req, res) {
  Page.findOne({ slug: "home" }, function(err, page) {
    if (err) console.log(err);

    res.render("index", {
      title: page.title,
      content: page.content
    });
  });
});

// Get a page
router.get("/:slug", function(req, res) {
  var slug = req.params.slug;

  Page.findOne({ slug: slug }, function(err, page) {
    if (err) console.log(err);

    if (!page) {
      res.redirect("/");
    } else {
      res.render("index", {
        title: page.title,
        content: page.content
      });
    }
  });
});
