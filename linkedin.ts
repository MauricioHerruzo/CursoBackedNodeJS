// 💼 Ejercicio: Modelado OOP de una red profesional tipo LinkedIn
// 🎯 Objetivo:
// Simular las principales entidades y relaciones de una red profesional como LinkedIn, aplicando los principios de OOP: encapsulamiento, herencia, polimorfismo, abstracción, y principios SOLID.

// 🧱 Requisitos del sistema
// 👤 Clase base: User
// Propiedades: id, name, email, headline, location, connections (array de User)

// Métodos:

// connect(user: User): void → añade una conexión (bidireccional)

// disconnect(user: User): void

// sendMessage(to: User, message: string): void

// viewProfile(): string

// 🏢 Subclase: Recruiter (hereda de User)
// Propiedades adicionales: company, openPositions

// Método adicional: postJob(job: Job): void

// 🧑‍💻 Subclase: Candidate (hereda de User)
// Propiedades adicionales: skills, experience, jobPreferences

// Método adicional: applyToJob(job: Job): void

// 💼 Clase: Job
// Propiedades: id, title, company, location, description, candidates: Candidate[]

// Métodos:

// addCandidate(candidate: Candidate): void

// 📩 Clase: Message
// Propiedades: from, to, content, timestamp

// Método: preview(): string

// 🧠 Principios OOP aplicados:
// Encapsulamiento: Métodos para acceder/modificar conexiones, mensajes y aplicaciones.

// Herencia: Recruiter y Candidate heredan de User.

// Polimorfismo: Métodos como viewProfile() pueden comportarse distinto según el tipo de usuario.

// Abstracción: Define una interfaz IUser o una clase abstracta AbstractUser para estructurar la base común.

// SOLID:

// S — Cada clase tiene una única responsabilidad.

// O — Nuevos tipos de usuario (como Mentor) se pueden agregar sin modificar las existentes.

// L — Recruiter y Candidate pueden sustituir a User.

// I — Podrías definir interfaces como Connectable, Messagable, etc.

// D — User no depende directamente de Job o Message, sino de abstracciones o interfaces.

// 🧪 Extras opcionales (para subir la dificultad):
// Implementar un sistema de validación (por ejemplo, no permitir autoconexión).

// Uso de interfaces y tipos genéricos para mayor flexibilidad.

// Añadir una clase LinkedInPlatform para gestionar usuarios, mensajes y empleos. Tendrá un registro de usuarios jobs y messages;

// Persistencia en memoria usando arrays y métodos de búsqueda (simular una base de datos).

// Implementar patrones como Factory (para creación de usuarios), o Observer (notificaciones).

abstract class User {
    protected readonly id: string;
    protected name: string;
    protected email: string;
    protected headline: string;
    protected location: string;
    protected conections: User[];
    constructor(id: string, name: string, email: string, headline: string, location: string, conections: User[]) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.headline = headline;
        this.conections = conections;
    }

    //conectar a otros usuarios BIDIRECCIONALMENTE
    connect(user: User): void {
        if (user === this) {
            throw new Error("No puedes conectarte a ti mismo");
        }
        if (!this.conections.find(userConection => userConection.id === user.id)) {
            //uso correcto de spread, EN VEZ DE UN PUSH HACES ESTO
            this.conections = [...this.conections, user];
            //usamos la propia funcion para conectar este user al array del otro, usando la propia funcion en la que estas
            user.connect(this);
        }
    }

    //Desconectar bidireccionalmente
    disconnect(user: User): void {
        if (this.conections.find(userConection => userConection.id === user.id)) {
            //el filter de devuelve un array filtrado con todo lo que no sea el usuario que quieres borrar
            this.conections = this.conections.filter(userConection => userConection.id !== user.id)
            //usamos la propia funcion para conectar este user al array del otro, usando la propia funcion en la que estas
            user.disconnect(this);
        }
    }

    //sendMe

    sendMessage(to: User, content: string): void {
        addMessage
    }
    getName(): string {
        return this.name;
    }
    public getId():string{
        return this.id;
    }
    public getConections(): string[] {
        return this.conections.map(user => user.name);
    }

}
class Candidate extends User {
    skills: string[];
    jobPreference: string[];
    experience: string[];
    constructor(id: string, name: string, email: string, headline: string, location: string, conections: User[], skills, jobPreference, experience) {
        super(id, name, email, headline, location, conections);
        this.skills = skills;
        this.jobPreference = jobPreference;
        this.experience = experience;
    }
    public applyJob(job: Job) {
        job.addCandidate(this);
    }
}
class Recruiter extends User {
    private openPositions: Job[] = [];
    private company: string;
    constructor(id: string, name: string, email: string, headline: string, location: string, conections: User[], openPositions: Job[], company: string) {
        super(id, name, email, headline, location, conections);
        this.openPositions = openPositions;
        this.company = company;
    }
    postJob(job: Job): void {
        if (this.openPositions.find(position => position.getIdJob() !== job.getIdJob())) {
            this.openPositions = [...this.openPositions, job]
        }
    }
}

class Job {
    private readonly id: string;
    private candidates: Candidate[];
    private title: string;
    private company: string;
    private location: string;
    private descripcion: string;

    addCandidate(candidate: Candidate): void {
        if (this.candidates.find(alreadyCandidates => alreadyCandidates != candidate)) {
            this.candidates = [...this.candidates, candidate];
        } else {
            throw new Error("El candidayo ya existe en nuestra base de datos");
        }
    };
    getIdJob() {
        return this.id;
    }
}
class Message {
    private timeStamp: Date;
    private from: User;
    private to: User;
    private content: string;
    constructor(timeStamp: Date, from: User, to: User, content: string) {
        this.timeStamp = timeStamp;
        this.from = from;
        this.to = to;
        this.content = content;
    }
    preview() {
        return `${this.from.getName()} ${this.to.getName()}`;
    }
}
class LinkedInPlatform {
    private user:User[];
    private jobs:Job[];
    private messages:Message[];
    private static _instance:LinkedInPlatform;

    public addUser (user: User): void {
        if (this.user.find(alreadyUser => alreadyUser !== user)){
            this.user=[...this.user,user];
        }
    }
    public findUserById (id: string): User | undefined {
        return this.user.find(user => user.getId() === id)
    }
    public addJob (job: Job): void{
        if (this.jobs.find(alreadyJobs=> alreadyJobs !== job)){
            this.jobs=[...this.jobs,job];
        }else{
            throw new Error ("Already in the job")
        }
    }
    public get allJobs(): Job[]{
        return this.jobs;
    }
    public addMessage (message: Message): void{
        if (this.messages.find(alreadyMessages=> alreadyMessages !== message)){
            this.messages=[...this.messages,message];
        }else{
            throw new Error ("Already in the job")
        }
    }
    public getMessage(): Message[]{
        return this.messages;
    }
    public static get instance(): LinkedInPlatform{
        if (LinkedInPlatform._instance){
            return new LinkedInPlatform;
        }else{
            return LinkedInPlatform._instance;
        }
    }
}

