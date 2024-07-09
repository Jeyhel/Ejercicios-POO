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
            return `Holi, mi nombre es ${this.#nombre} mi edad es ${this.#edad} y mi sexo es ${this.#sexo} y ${persona.esMayorDeEdad(this.getEdad)}`; 
        }
        static esMayorDeEdad (edad){
            if (edad <= 18){
                return "El estudiante es menor de edad"
            }
            else {
                return "El estudiante es mayor de edad"
            }
        }

    }

    let persona1 = new persona ("Angelina", 9, "femenino") ;
    // console.log (persona1.saludar()); 

    document.querySelector ("#resultado").innerHTML = /*html */`
    <h1>saludo1: ${persona1.saludar()}</h1>`


class estudiante extends persona {
    carrera;
    constructor (nombre, edad, sexo, carrera ){
        super (nombre, edad, sexo);
        this.carrera = carrera;  
    }
    set setCarrera (carrera){
        this.carrera = carrera;
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
 <h1>saludo2: ${estudiar1.estudia()}</h1>`
 

//falta la del es mayor de edad
class animal {
    #sonido; 
    #nombre;
    #edad;  
    constructor(sonido,nombre,edad){
        this.#sonido = sonido; 
        this.#nombre = nombre;
        this.#edad = edad; 
   
        }
        set setNombre(nombre){
            this.#nombre = nombre; 
        }
        get getnombre(){
            return this.#nombre;
        }
        set setEdad(edad){
            this.#edad = edad; 
        }
        get getEdad(){
            return this.#edad;
        }
        set setSonido(sonido){
            this.#sonido = sonido; 
        }
        get getSonido (){
            return this.#sonido; 
        }
        hacerSonido ()  {
            return `El sonido del animal es ${this.#sonido}`;
        }
    }
    let sonido1 = new animal ( "guaau"); 
    // console.log (sonido1.hacerSonido()); 
    

    class perro extends animal {
        raza; 
        constructor (sonido,raza, nombre, edad){
            super (sonido, nombre, edad)
            this.raza = raza;
        }
        set setRaza (raza){
            this.raza = raza; 
        }
        get getRaza () {
            return this.raza; 
        }
        moverLaCola () {
            return ` ${this.hacerSonido()} y esta ${this.raza}`
        }
    }
    let raza1 = new perro ("guaau","moviendo la cola"); 
    
    document.querySelector ("#animal").innerHTML = /*html */`
    
    <h1>sonido: ${raza1.hacerSonido()}</h1>
    <h1>movimiento: ${raza1.moverLaCola()}</h1>`


    class figura {
        area;
        color;
        constructor(area, color){
            this.area = area;
            this.color = color; 

        }
        set setArea (area){
            this.area = area;
        }
        get getArea (){
            return this.area;
        }
        set setColor (color){
            this.color = color;
        }
        get getColor (){
            return this.color
        }
        calcular (){
            return `El area de la figura es ${this.area}`
        }
    }
    let calculo = new figura (8);

    
    class circulo extends figura {
        radio;
        constructor(area, radio, color){
            super (area, color)
            this.radio = radio;
        }
        set setRadio (radio) {
            this.radio = radio;
        }
        get getRadio (){
            return this.radio;
        }
        calcularArea () {
            return `${this.calcular()} y el radio es ${this.radio}`
        }
        
    }
    let circulo1 = new circulo (8, 2);
    
    document.querySelector ("#figura").innerHTML = /*html*/`
        
    <h1>area: ${circulo1.calcular()}</h1>
    <h1>radio: ${circulo1.calcularArea()}</h1>
    `
 
    class rectangulo extends figura {
        largo; 
        ancho; 
        constructor(largo, ancho, area, radio, color ){
            super (area, radio, color )
            this.largo = largo; 
            this.ancho = ancho;
        }
        set setLargo (largo){
            this.largo = largo;
        }
        get getLargo (){
            return this.largo;
        }
        set setAmcho (ancho) {
            this.ancho = ancho;
        }
        get getAncho (){
            return this.ancho;
        }
        calcularArea2 (){
            return `El ancho del rectangulo es ${this.ancho} y el largo es ${this.largo} `;
        }
    }
    let rectangulo1 = new re