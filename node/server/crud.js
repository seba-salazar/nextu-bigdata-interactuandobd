var Usuario = require('./modelUsuarios.js') //Asignarle a la variable USUARIO el modelo del usuario

module.exports.crearUsuarioDemo = function(callback){ //Función para crear usuarios
  var arr = [{ email: 'sebastian@mail.com', user: "seba", password: "12345"}]; //array con la información del usuario a insertar
  Usuario.insertMany(arr, function(error, docs) { //Utilizar la función insertMany para insertar varios registros en una sola consulta
    if (error){ //Acciones si existe un error
      if (error.code == 11000){ //Verificar si el nombre de usuario (PrimaryKey) del existe
        callback("Puede utilizar las credenciales: </br>usuario: seba </br>password:12345")
      }else{
        callback(error.message) //Mostrar mensaje de error
      }
    }else{
      callback(null, "El usuario 'seba' se ha registrado correctamente. </br>usuario: seba | password:12345 </br >")
    }
  });
}
