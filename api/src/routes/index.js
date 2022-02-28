const { Router } = require("express");
const router = Router();
const operationRouter = require("./operationRoutes");
const { typeCreate } = require("../controllers/typeControllers");

router.use("/operation", operationRouter);
router.post("/", typeCreate);
module.exports = router;
