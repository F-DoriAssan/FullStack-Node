var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function (req, res, next) {
    const art = [
        { id: 1, name: 'FALCON DEL MAR', price: 2000 },
        { id: 2, name: 'ENTRE RIOS', price: 5000 },
        { id: 3, name: 'HOTEL VIREY', price: 5200 },
        { id: 4, name: 'MARAL 2', price: 1000 },

    ]
    /** query paramiters */
    console.log(req.query)
    res.status(200).json(art);
});

/* GET products DATOS. */
router.get('/', function (req, res, next) {
    const art = [
        { id: 1, name: 'FALCON DEL MAR', price: 2000 },

    ]
    console.log(req.params, req.params.id)

    /** query paramiters */
    console.log(req.query)
    res.status(200).json(art);
});


/* GET products ID. */
router.get('/:id', function (req, res, next) {
    console.log(req.body)

    res.status(201).json(req.body);

});

/* PUT products listing. */

router.put('/:id', function (req, res, next) {

    console.log(req.body, req.params.id)
    res.status(201).json(req.body);

})

/* DELETE products . */


router.delete('/:id', function (req, res, next) {
    console.log(req.params.id);
    res.status(201).json(req.body);

})
module.exports = router;
