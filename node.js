import express from "express";

const app = express();
const port = '3000';

app.get("/", (req, res)=>{
    res.send("Hola")
    console.log("Respuesta Enviada")
})

app.liste(port, ()=>{
    console.log(`Escuchando el ppuerto ${port}`)
})

// npm install -D typecript @types/node.............

// Desarrollo 
// npm i _D prettier 
// en src : .prettier  para la config
// prettier code extension 
//en src : .prettierignore, ahi dentro pones las carpetas y archivos a ignorar, como /dist

//carpeta .vscode --> settings.json -->
//          {
//    "editor.defaultFormatter": "esbenp.prettier"
    "editor"
//}

//ESlint extension