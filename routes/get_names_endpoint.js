var express = require('express');
var router = express.Router();
var names = require("../models/names");

/* GET users listing. */
router.get('/', function(req, res, next) {
    names.find({},function (err, data) {
        if (err) return res.json({success: false, message: JSON.stringify(err)});

        if (data.length === 0) return res.json({success: false, message: 'No names just yet...'});
        res.json({success: true, message: 'OK', data: data});
    })
});

router.get('/:id', function(req, res, next) {

    names.find({_id: req.params.id},function (err, data) {
        if (err) return res.json({success: false, message: JSON.stringify(err)});

        if (!data) return res.json({success: false, message: 'No names with this ID...'});
        res.json({success: true, message: 'OK', data: data});
    })
});

router.post('/', function(req, res, next) {
    var newName = req.body.name;

    var theNewName = new names({name: newName});

    theNewName.save(function (err) {
        if (err) return res.json({success: false, message: JSON.stringify(err)});

        res.json({success: true, message: 'The name ' + newName + ' saved successfully'});
    });
});

router.put('/:id', function(req, res, next) {
    var newName = req.body.name;

    names.findByIdAndUpdate(req.params.id, {name: newName}, {upsert:false},function (err) {
        if (err) return res.json({success: false, message: JSON.stringify(err)});

        res.json({success: true, message: 'The name ' + newName + ' updated successfully'});
    });

});

router.delete('/:id', function(req, res, next) {
    var newName = req.body.name;

    names.remove({_id: req.params.id}, function (err) {
        if (err) return res.json({success: false, message: JSON.stringify(err)});

        res.json({success: true, message: 'The name ' + newName + ' deleted successfully'});
    });

});



module.exports = router;
