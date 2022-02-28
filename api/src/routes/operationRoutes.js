const { Router } = require("express");
const router = Router();
const {
  createOperation,
  updateOperationById,
  getOperationById,
  getAllOperations,
  deleteOperationById,
} = require("../controllers/operationControllers");

router.post("/", createOperation);
router.get("/", getAllOperations);
router.get("/:id", getOperationById);
router.put("/:id", updateOperationById);
router.delete("/:id", deleteOperationById);

module.exports = router;
