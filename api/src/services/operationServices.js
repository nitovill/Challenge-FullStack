const { Operation } = require("../db");
const { v4: uuidv4 } = require("uuid");

const insertOperation = async ({ concept, amount, typeId }) => {
  const newOperation = await Operation.create({
    id: uuidv4(),
    concept,
    amount,
    typeId,
  });
  return newOperation;
};

const getOperationDetail = async (id) => {
  return await Operation.findByPk(id);
};
const getOperations = async () => {
  return await Operation.findAll({ where: { disabled: false } });
};

const updateOperation = async (id, data) => {
  return await Operation.update(data, { where: { id } });
};

const deleteOperation = async (id) => {
  return await Operation.update({ disabled: true }, { where: { id } });
};

module.exports = {
  insertOperation,
  getOperationDetail,
  getOperations,
  updateOperation,
  deleteOperation,
};
