class persona {
    #nombre;
    #edad;  
    #sexo;
    constructor(nombre,edad,sexo){
        this.#nombre = nombre;
        this.#edad = edad; 
        this.#sexo = sexo; 
        }
        set setSexo(sexo){
            this.#sexo = sexo; 
        }
        get getSexo(){
            return this.#sexo;
        }
        set setEdad(edad){
            this.#edad = edad;    
        }
        get getEdad (){
            return this.#edad; 
        }
        set setNombre(nombre){
            this.#nombre = nombre; 
        }
        get getNombre (){
            return this.#nombre; 

        }
        saludar (){
            return `Holi, mi nombre es ${this.#nombre} mi edad es ${this.#edad} y mi sexo es ${this.#sexo}`; 
        }

    }
    // let rta = document.querySelector ("#resultado").innerHTML = /*html*/`
    // <h1>nombre: <span> ${persona.saludar()}</span></h1>`;

    let persona1 = new persona ("Angelina", 19, "femenino") ;
    console.log (persona1.saludar()); 



class estudiante extends persona {
    carrera;
    constructor (nombre, edad, sexo, carrera ){
        super (nombre, edad, sexo);
        this.carrera = carrera;  
    }
    set setCarrera (carrera){
        this.carrera = this.carrera;
    }
    get getCarrera (){
        return this.carrera; 
    }
    estudia(){
        return `${this.saludar()}, y estudio ${this.carrera}`; 
    }
}

let estudiar1 = new estudiante ("Angelina", 19, "femenino", "Licenciatura");

document.querySelector ("#estudio").innerHTML = /*html */`
 <h1>carerra: ${estudiar1.getCarrera}</h1> 
 <h1>saludo: ${estudiar1.estudia()}</h1>`
 



