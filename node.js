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

// INICIAR PROYECTO 

// nmpm init -y

// npm i express 

//npm i -D typescript  @types/node  @types/

//npm i prettier (customizar prettier en un .prettierrc en la carpeta src y crea run .prettierignore)

//npm eslint init (o algo asi busca en la pagina oficial de eslint para instalarlo)

//settear prettier con eslint

//reiniciar el vscode si se ralla con eslint/prettier, lo cierras y apañao

//crear tsconfig.json y buscar configs en internet

//crear archivo .env -> PORT = 3000

//how to install nvm en windows google (nvm es para control de versiones de node)

//crear un archivo .nvmrc en src con tu version de node que tengas instalada -> pones "vXX.XX.X" (la version que tengas)
//"nvm use" en cosola, te encontrara el archivo con la verison que le has puesto para usarla

//tsx src/index.ts o algo asi para lanzar el servidor a localhost

//hacer el endpoint de escuchando el puerto X, para saber que todo va correcto

//index.ts, crear un endpoint nuevo:
    // app.get('/task'.(req,res)=>{
    //     const {name} = req.query:
    //     res.send(`El nombre es ${name}`)
    // })

//los body, igual que los query pero con app.post() y req.body

//existe el req.params para el app.get() tambien

//busca actions in API call para verlos todos, list restfull htttp request

//crear los 4 -> app.get, app.put, app.delte y app.post