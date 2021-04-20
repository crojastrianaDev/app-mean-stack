const express = require("express"); //importamos express
const morgan = require("morgan");
const cors = require("cors");
//crearmos la app con express
const app = express();
app.use(cors({ origin: "http://localhost:4200" }));

//puerto donde correra y environment variables
//que tome el puerto definido, si no usa el 4100
app.set("port", process.env.PORT || 4000);

//escuchar las peticiones con morgan
app.use(morgan("dev"));
app.use(express.json()); //entienda json
app.use(express.urlencoded({ extended: false })); //entienda con los datos  de formularios html

app.use("/api/employees", require("./routes/employess.routes")); //usamos la ruta

module.exports = app;
