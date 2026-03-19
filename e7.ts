abstract class Transporte {

    distancia: string;

    constructor(distancia: string) {
        this.distancia = distancia;
    }

    abstract calcularCosto(a?: string): void;
}

class Taxi extends Transporte {

    calcularCosto(): void {
        const costo = parseFloat(this.distancia) * 2;
        console.log(costo)
    }
}

class Autobus extends Transporte {

    calcularCosto(): void {
        const costo = parseFloat(this.distancia) * 1;
        console.log(costo)
    }
}

class Uber extends Transporte {

    calcularCosto(): void {
        const costo = parseFloat(this.distancia) * 3;
        console.log(costo)
    }
}

let km = "10";

let obj1 = new Taxi(km);
let obj2 = new Autobus(km);
let obj3 = new Uber(km);

obj1.calcularCosto();
obj2.calcularCosto();
obj3.calcularCosto();