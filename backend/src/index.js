const express = require("express");
const cors = require("cors");
const routes = require("./routes");

// instancio a aplicação
const app = express();

app.use(cors());

// converto as requisições para json
app.use(express.json());

// ROTAS
app.use(routes);

// escuta a porta 3333
app.listen(3333);
