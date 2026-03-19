abstract class Figura{

    abstract area(a:string, b:string):void;
    // abstract perimetro():void;
}

class Regtangulo extends Figura{

    area(base:string, Altura:string): void {
        const area = parseFloat(base) * parseFloat(Altura);
        console.log(area)
    }
}

class Circulo extends Figura{

    area(pi:string, r:string): void {
        const area = parseFloat(pi) * parseFloat(r)*parseFloat(r)
        console.log(area);
        
    }
}

class Cuadrado extends Figura{

    area(l:string): void {
        const area = parseFloat(l) * parseFloat(l);
        console.log(area);
        
    }
}
const rec = new Regtangulo();
rec.area('10','10');

const cir = new Circulo();
cir.area('10','5')

const cua = new Cuadrado();
cua.area('40')