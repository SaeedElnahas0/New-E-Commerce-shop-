const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const {
  createProduct,
  updateProduct,
  deleteProduct,
  getOne,
  getAll,
} = require("../controllers/productController");

const router = require("express").Router();

router.post("/", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/find/:id", getOne);
router.get("/", getAll);

module.exports = router;
