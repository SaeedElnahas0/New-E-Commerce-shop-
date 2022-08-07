const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const {
  createCart,
  updateCart,
  deleteCart,
  getOneUser,
  getAll,
} = require("../controllers/cartController");

const router = require("express").Router();

router.post("/", verifyToken, createCart);
router.put("/:id", verifyTokenAndAuthorization, updateCart);
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);
router.get("/find/:userId", verifyTokenAndAuthorization, getOneUser);
router.get("/", verifyTokenAndAdmin, getAll);

module.exports = router;
