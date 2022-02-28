const {
  insertOperation,
  updateOperation,
  deleteOperation,
  getOperations,
  getOperationDetail,
} = require("../services/operationServices");
const { CREATED } = require("../utils/constants");
const {
  UPDATED_DONE,
  DELETED_DONE,
  UPDATE_FAIL,
  DELETE_FAIL,
} = require("../utils/messages");

const createOperation = async (req, res, next) => {
  try {
    const newUser = await insertOperation(req.body);
    res.status(CREATED).json({ data: newUser });
  } catch (err) {
    next(err);
  }
};

const getAllOperations = async (req, res, next) => {
  try {
    const OperationDetail = await getOperations();
    res.json({ data: OperationDetail });
  } catch (err) {
    next(err);
  }
};

const getOperationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const OperationDetail = await getOperationDetail(id);
    if (!OperationDetail) throw new Error("USER_NOT_FOUD");
    res.json({ data: OperationDetail });
  } catch (err) {
    next(err);
  }
};

const updateOperationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedOperation = await updateOperation(id, req.body);
    if (!updatedOperation[0]) throw new Error(UPDATE_FAIL);
    res.status(CREATED).json({ data: UPDATED_DONE });
  } catch (err) {
    next(err);
  }
};

const deleteOperationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const eliminatedOperation = await deleteOperation(id);
    if (!eliminatedOperation[0]) throw new Error(DELETE_FAIL);
    res.json({ data: DELETED_DONE });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createOperation,
  updateOperationById,
  getOperationById,
  getAllOperations,
  deleteOperationById,
};
