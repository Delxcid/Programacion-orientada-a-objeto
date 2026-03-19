//ejercio 1 
abstract class Animal{
    nombre:string
    constructor(nombre:string){
        this.nombre=nombre
    }

    comer(){
        console.log(this.nombre+ "esta comiedno");
    }
    abstract hacerSonido():void;
}
class Perro extends Animal{
    hacerSonido(): void {
        console.log("Guau")
    }
}
class gato extends Animal{
    hacerSonido(): void {
        console.log("miau");
        
    }
}

const perro = new Perro("Firulais");
perro.comer();
perro.hacerSonido();