const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/").post(contacts.create);

router.route("/favorite").get(contacts.findAllFavorite);
router.route("/:id").get(contacts.findOne);
router.route("/").get(contacts.findAll);

router.route("/:id").put(contacts.update);

router.route("/:id").delete(contacts.delete);
router.route("/").delete(contacts.deleteAll);

module.exports = router;
