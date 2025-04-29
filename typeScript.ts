
//HAS especificado numero, y un string no puede ser un numero
let firstName : number = "Alice";

// A los arrays les especificas de qúe son, pueden ser que tengan posibilidad a ser de cosas diferentes, pero no contener los dos tiposd de dato a la vez
let numbers2:number []= [1,2,3,4];
let numbers : number[] | string[] = [1,2,3,4];

// Tuple, TUPLA 
let user : [string,number] = ["Alice", 25];

// Enum 
enum Color {Red = "RED", Green = "GREEN", Blue = "BLUE"};
let favoriteColor : Color = Color.Red;
console.log(favoriteColor); // GREEN

// Object 
let person: {name:string, age:number} = {name: "Alice", age : 30}
console.log(person)

// Functions 
function greet(person: string): string{
    return "Hola"+ person;

}
// Si no retorna nada la funcion 
function greet2(person: string): void{
    console.log("Hola"+ person);

}
//varios parametros, en objeto, tipados
function greet3({person, lastName}:{person: string, lastName:string}): void{
    console.log("Hola"+ person);

}

// unknow , no sabes lo que vas a obtener, para hacer fetch
let unceertainValue : unknown = "Hello"

// igual que typeoff, existe instanceof, para saber si pertenece a una clase 

// in 
// Comprobacion de si una propiedad existe en una clase 
// if("permisos"  in user{
//     noseque
// })