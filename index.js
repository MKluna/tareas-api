const express = require("express");
const app = express();
const tareasRoutes = require("./src/routes/tareasRoutes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", tareasRoutes);


const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servidor en ejecución en el puerto ${puerto}`);
});

module.exports = app;
