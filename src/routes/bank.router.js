const { Router } = require("express");
const { getAll, create, update, remove,search, getById } = require("../controllers/bank.controller");

const router = require("express").Router();

 

router.get("/",getAll);
router.post("/",create);
router.put("/:id",update);
router.delete("/:id",remove);
router.post("/search",search);
router.get("/:id",getById);


module.exports = router;