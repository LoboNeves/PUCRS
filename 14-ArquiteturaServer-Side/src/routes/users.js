const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
const validateId = require("../middlewares/validateObjectId");
const { validateCreate, validateUpdate } = require("../validators/userValidator");

router.get("/", controller.listUsers);
router.get("/:id", validateId, controller.getUser);

router.post("/", validateCreate, controller.createUser);

router.put("/:id", validateId, validateUpdate, controller.updateUser);

router.delete("/:id", validateId, controller.deleteUser);

module.exports = router;