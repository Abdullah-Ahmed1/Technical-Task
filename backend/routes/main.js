const express = require("express")
const mainController = require("../controllers/main")
const router = express.Router()

router.route("/create").get(mainController.create)
router.route("/show").get(mainController.showBooks)
router.route("/delete").get(mainController.deleteBook)
router.route("/update").get(mainController.updateBook)

module.exports = router