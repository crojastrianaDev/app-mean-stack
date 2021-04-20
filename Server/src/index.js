require("./database");
const app = require("./app");

//iniciamos el servidor
app.listen(app.get("port"));
console.log("Server en el puerto", 4000);
