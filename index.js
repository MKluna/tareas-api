const express = require("express");
const app = express();
const tareasRoutes = require("./src/routes/tareasRoutes");
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // Para el formato JSON
app.use(bodyParser.urlencoded({ extended: false })); // Para otros formatos

app.use("/api", tareasRoutes);

// Inicia el servidor
const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servidor en ejecución en el puerto ${puerto}`);
});

module.exports = app;
