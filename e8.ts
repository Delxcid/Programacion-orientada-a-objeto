abstract class Producto{

    nombre:string;
    precio:string;

    constructor(nombre:string, precio:string){
        this.nombre = nombre
        this.precio = precio
    }

    abstract calcularPrecioFinal():void;
    abstract mostrarInformacion():void;
}

class Electronico extends Producto{

    calcularPrecioFinal(): void {
        const total = parseFloat(this.precio) * 1.15;
        console.log(total)
    }

    mostrarInformacion(): void {
        console.log(this.nombre)
    }
}

class Ropa extends Producto{

    calcularPrecioFinal(): void {
        const total = parseFloat(this.precio) * 0.9;
        console.log(total)
    }

    mostrarInformacion(): void {
        console.log(this.nombre)
    }
}

class Alimento extends Producto{

    calcularPrecioFinal(): void {
        const total = parseFloat(this.precio) * 1.05;
        console.log(total)
    }

    mostrarInformacion(): void {
        console.log(this.nombre)
    }
}

let nom = "Laptop";
let precio = "1000";

let obj1 = new Electronico(nom, precio);
let obj2 = new Ropa(nom, precio);
let obj3 = new Alimento(nom, precio);

obj1.mostrarInformacion();
obj1.calcularPrecioFinal();

obj2.mostrarInformacion();
obj2.calcularPrecioFinal();

obj3.mostrarInformacion();
obj3.calcularPrecioFinal();