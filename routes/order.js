const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAll,
  getMonthlyIncome,
} = require("../controllers/orderController");

const router = require("express").Router();

router.post("/", verifyToken, createOrder);
router.put("/:id", verifyTokenAndAuthorization, updateOrder);
router.delete("/:id", verifyTokenAndAuthorization, deleteOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);
router.get("/", verifyTokenAndAdmin, getAll);
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

module.exports = router;
