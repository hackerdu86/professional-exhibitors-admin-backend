const express = require("express");

const exhibitorController = require("../controllers/exhibitor-controller");
const router = express.Router();

//Get
router.get("/exhibitors", exhibitorController.getExhibitors);
router.get("/exhibitors/:id", exhibitorController.getExhibitor);

//Post
router.post("/exhibitors", exhibitorController.addExhibitor);

//Delete
router.delete("/exhibitors/:id", exhibitorController.deleteExhibitor);

module.exports = router;
