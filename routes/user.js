
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const {
  updateUser,
  deleteUser,
  getUserStats,
  getOne,
  getAll
} = require('../controllers/userController')

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, getOne);
router.get("/", verifyTokenAndAdmin, getAll);
router.get("/stats", verifyTokenAndAdmin, getUserStats);

module.exports = router;
