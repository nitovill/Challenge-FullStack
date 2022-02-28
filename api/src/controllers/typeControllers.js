const { Type } = require("../db");
const typeCreate = async (req, res, next) => {
  try {
    await Type.create({
      name: "ingress",
    });
    await Type.create({
      name: "egress",
    });
    return res.send("created");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  typeCreate,
};
