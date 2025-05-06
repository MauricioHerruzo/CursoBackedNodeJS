  // 🏡 Ejercicio: MiniAirbnb - Plataforma de Alquiler con Sistema de Pagos
  // 🎯 Objetivo
  // Simular el núcleo de una plataforma tipo Airbnb, donde:
  
  // Usuarios pueden registrar propiedades.
  
  // Los huéspedes pueden reservar propiedades por fechas.
  
  // Hay un sistema básico de pagos con saldo y facturación.
  
  // 🧱 Requisitos técnicos
  // Clases: User, Host, Guest, Property, Reservation, Payment.
  
  // Interfaces/Abstractas: IPayable, IPersona.
  
  // Relaciones:
  
  // Un Host puede tener múltiples propiedades.
  
  // Un Host puede tener múltiples propiedades.
  
  // Una Reservation está ligada a un Guest, una Property y tiene un Payment.
  
  // 🧠 Conceptos OOP a aplicar
  // Encapsulamiento (métodos privados/protegidos)
  
  // Herencia (User → Host / Guest)
  
  // Abstracción (interfaces)
  
  // Composición (Reservation tiene Payment)
  
  // Principios SOLID, especialmente SRP y OCP


// DIFERENCIA ENTRE INTERFACE Y CLASS A LA HORA DE CONSTRUIR OBJETOS 

// CLASSES 

  //USSER => Host-Guest
  abstract class User {
    protected id: string;
    protected name : string;
    protected lastName : string;
    protected email : string;
    protected password : string;
    
    constructor(id: string, name: string, lastName : string, email: string, password: string ) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

  }

  //Extend host
  class Host extends User {
    protected properties : Property [];
    constructor(id: string, name: string, lastName : string, email: string, password: string, properties : Property []){
        super( id, name, lastName, email, password)
        this.properties = properties;
    }

    //Add property
    public addProperty(property: Property) {
        this.properties.push(property);
    }

    //Function find property
    public findProperty(property: Property){
        return this.properties.findIndex(prop => prop.propertyId === property.propertyId);
    }
    //Function para eliminar properties segun su id
    public deleteProperty(property: Property){
        this.properties = this.properties.filter(hostProperties =>hostProperties !== property)
    }

    //Precio por noche de reserva
    
    }

    // Extend User 
    class Guest extends User {
    protected reservations : Reservation [];
        constructor (id: string, name: string, lastName : string, email: string, password: string, reservations: Reservation[]){
            super( id, name, lastName, email, password)
            this.reservations = reservations;
        }

        //Search by dates
        public searchByDate(date: string): Property []{
            let avalibleProperties :Property [] = [];
            properties.forEach(prop => {
                if (prop.dates.find(dateToFind => dateToFind === date)=== undefined){
                    avalibleProperties.push(prop)
                }
            })
            return avalibleProperties;
        }
        
        // Search History
        public addToSearchHistory (date: string) : void{
            let history: string[] = [];
            history.push(date);
        }
    }

//PROPERTY
class Property {
    protected id: string;
    protected name : string;
    protected address: string; //realmente debería ser un array con un string de calle, number y tal
    protected pricePerNight : number;
    protected capacity : number;
    protected reservedDates : string [];
    
    constructor(id : string, name: string, address : string, pricePerNight : number, capacity : number, reservedDates : []){
        this.id = id;
        this.name = name;
        this.address = address;
        this.pricePerNight = pricePerNight;
        this.capacity = capacity;
        this.reservedDates = reservedDates;
    }

    //Getter PROPERTY ID
    public get propertyId(): string {
        return this.id;
    }
    //Block property dates
    public blockDates(reservation: Reservation): void{
        this.reservedDates.push(reservation.reservedDate);
    }
    
    //get ReservedDates
    public get dates(){
        return this.reservedDates;
    }
    
}

//PAYMENT
class Payment {
    protected id : string;
    protected ammount: number;
    protected status: "Waiting" | "Failed" | "Success";

    constructor(id: string, ammount: number, status: "Waiting" | "Failed" | "Succes"){
        this.id = id;
        this.ammount = ammount;
        this.status = "Waiting";
    }

    public get paymentId(): string{
        return this.id;
    }

    public set setStatus(newStatus: "Waiting" | "Failed" | "Success") {
        //if
        this.status = newStatus
    }

}

//RESERVATION
class Reservation {
    protected id: string;
    protected date: string; // modelo americano
    protected host : Host;
    protected guest: Guest;
    protected property: Property;
    protected payment : Payment;

    constructor (id: string, host: Host, guest: Guest, property: Property, payment : Payment){
        this.id = id;
        this.host = host;
        this.guest = guest;
        this.property = property;
        this.payment = payment;
    }

    //Get date
    public get reservedDate(): string {
        return this.date;
    }
    
}


//procesar pagos
// para el guest 
//Funccion de historial de reservas

// para class reservas 
//usar get  para sacar si el pago se ha realizado en la funcion Payment
//funcion para class Payment si se ha confirmado el pago

//DATOS DE PRUEBA
let properties = [
    new Property("1234","Moncloa","Calle Noseque", 75, 16,[]),
]
let guests = [
    new Guest("241231", "Balatro", "Balatrez", "adsasfawd@gmail.com", "ddawd123", []),
]

let hosts = [
    new Host("1234123", "David", "Cánovas", "asdf33@gmail.com","gre321",[])
]