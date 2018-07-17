var express = require('express');
var router = express.Router();

// export
module.exports = router;

// Home / index
router.get('/', function(req, res){
  res.send('Admin Area');
});

// Membuat add page dengan method GET
router.get('/add-page', function(req, res) {

  var title = "";
  var slug = "";
  var content = "";

  res.render('admin/add_page', {
    title: title,
    slug: slug,
    content: content
  });
});

// Membuat method POST pada add page
router.post('/add-page', function(req, res) {

  req.checkBody('title', 'Title must have a value').notEmpty();
  req.checkBody('content', 'Content must have a value').notEmpty();

  var title = req.body.title;
  var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
  if (slug == '') slug = title.replace(/\s+/g, '-').toLowerCase();
  
  var content = req.body.content;

  var errors = req.validationErrors();

  if (errors) {
    res.render('admin/add_page', {
      errors: errors,
      title: title,
      slug: slug,
      content: content
    });
  } else {
    console.log('Success')
  }

});