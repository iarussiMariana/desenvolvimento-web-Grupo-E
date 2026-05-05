const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// conexão com MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/usuarios");

// modelo
const Usuario = mongoose.model("Usuario", {
  nome: String,
  email: String,
  senha: String
});

// rota de cadastro
app.post("/usuarios", async (req, res) => {
  const novoUsuario = new Usuario(req.body);
  await novoUsuario.save();
  res.send("Usuário salvo!");
});

// iniciar servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});