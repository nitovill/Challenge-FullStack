const app = require("./src/server");
const { port } = require("./lib/config");
const { conn } = require("./src/db");

conn.sync().then(() => {
  console.log("database conected");
  app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });
});
