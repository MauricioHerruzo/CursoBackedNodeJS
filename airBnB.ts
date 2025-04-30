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
  
  // Un Guest puede reservar propiedades.
  
  // Una Reservation está ligada a un Guest, una Property y tiene un Payment.
  
  // 🧠 Conceptos OOP a aplicar
  // Encapsulamiento (métodos privados/protegidos)
  
  // Herencia (User → Host / Guest)
  
  // Abstracción (interfaces)
  
  // Composición (Reservation tiene Payment)
  
  // Principios SOLID, especialmente SRP y OCP



  //User
  //Host
  //Guest

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

  class Host extends User {
    protected properties : Property [];
    constructor(id: string, name: string, lastName : string, email: string, password: string, properties : Property []){
        super( id, name, lastName, email, password)
        this.properties = properties;
    }

    //Functions to add properties
    //Function para elminar properties segun su id
    //Precio por noche de reserva
    
}

class Guest extends User {
    protected reservations : Reservation [];
}

class Property {
    protected id: string;
    protected name : string;
    protected address: string; //realmente debería ser un array con un string de calle, number y tal
    protected reserved : boolean; //hay que hacerle una funcion para actualizarla
    protected pricePerNight : number;
    protected capacity : number;
    
    constructor(id : string, name: string, address : string, reserved: boolean, pricePerNight : number, capacity : number){
        this.id = id;
        this.name = name;
        this.address = address;
        this.reserved = reserved;
        this.pricePerNight = pricePerNight;
        this.capacity = capacity;
    }

    //Function para cambiar cosas sobre sus properties, nombre, direcciones, precio, precio por noche y numero
}

class Reservation {
    
}

class Payment {

}
//procesar pagos
// para el guest 
//Funccion de historial de reservas

// para class reservas 
//usar get  para sacar si el pago se ha realizado en la funcion Payment
//funcion para class Payment si se ha confirmado el pago