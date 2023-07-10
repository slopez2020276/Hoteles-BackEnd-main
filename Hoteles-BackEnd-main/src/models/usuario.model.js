const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
  nombre: String,
  apellido: String,
  email: String,
  usuario: String,
  password: String,
  rol: String,
  puesto: String,
  celular_Corporativo: String,
  extencion: String,
  sucursal: String,
  pais: String,
  departamento: String,
});

module.exports = mongoose.model("Usuarios", UsuarioSchema);
