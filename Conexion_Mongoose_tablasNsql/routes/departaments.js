var express = require('express');
var router = express.Router();

const departamentsControlllers = require("../controllers/departamentsController")

/* GET departaments listing. */
router.get('/', departamentsControlllers.getAll);

/* GET departaments GETBYID DATOS. */
router.get('/:id', departamentsControlllers.getById);


/* POST departaments CREATE ID. */
router.post('/', departamentsControlllers.create);

/* PUT departaments  UPDATE. */
router.put('/:id', departamentsControlllers.update)

/* DELETE departaments REMOVE . */
router.delete('/:id', departamentsControlllers.remove)

module.exports = router;
