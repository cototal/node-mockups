var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('pages/home', { title: 'Express' });
});

router.get("/pages/:name", function(req, res) {
    res.render(`pages/${req.params.name}`, { title: "Express" });
});

module.exports = router;
