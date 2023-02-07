const express = require("express")
const mainController = require("../controllers/main")
const router = express.Router()

router.route("/create").post(mainController.create)
router.route("/show").get(mainController.showBooks)
router.route("/delete/:id").delete(mainController.deleteBook)
router.route("/update/:id").put(mainController.updateBook)

module.exports = router