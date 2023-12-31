require('dotenv').config();
//console.log(process.env)

const mongoose = require("mongoose");
const app = require("./app");
const usuarioController = require("./src/controllers/usuario.controller");



mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false); 
mongoose.connect('mongodb://127.0.0.1/DirectorioPrueba1' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Se ha conectado correctamente a la base de datos.");

    usuarioController.RegistrarAd();

      const PORT = process.env.PORT || 3000
    app.listen(PORT, function () {
      console.log(
        'El servidor está levantado en el puerto '+PORT 
      );
    });
  })
  .catch((error) => console.log(error));
