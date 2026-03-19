abstract class Vehiculo{
    dato:string
    constructor(dato:string){
        this.dato=dato
    }
    abstract mover():void;
}

class Carro extends Vehiculo{
    mover():void{
        console.log("el carro de moueve a 100km/hr");
        
    }
}
class Moto extends Vehiculo{
    mover():void
    {console.log("La moto se deplaza a 20 km.hr");} 
}

const carrito = new Carro("Honda")
carrito.mover();