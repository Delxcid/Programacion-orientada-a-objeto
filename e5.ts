abstract class Pago {
    total: string;

    constructor(total: string) {
        this.total = total;
    }

    abstract ProcesarPago(a: string): void;
}


class Efectivo extends Pago {
    ProcesarPago(efectivo: string): void {
        let exec = parseFloat(efectivo) - parseFloat(this.total);
        console.log("Cambio: $" + exec);
    }
}


class Tarjeta extends Pago {
    ProcesarPago(saldo: string): void {
        if (parseFloat(saldo) >= parseFloat(this.total)) {
            let exec = parseFloat(saldo) - parseFloat(this.total);
            let nuevoSaldo = exec;
            console.log("Pago realizado. Nuevo saldo: $" + nuevoSaldo);
        } else {
            console.log("Declinada");
        }
    }
}


class Transferencia extends Pago {
    ProcesarPago(saldo: string): void {
        let exec = parseFloat(saldo) - parseFloat(this.total);
        console.log("Cuenta ahora tiene: $" + exec);
    }
}



let totalCompra = "100";

// efectivo
let p1 = new Efectivo(totalCompra);
p1.ProcesarPago("150");

// tarjeta
let p2 = new Tarjeta(totalCompra);
p2.ProcesarPago("80"); // prueba declinada
p2.ProcesarPago("200"); // aprobada

// transferencia
let p3 = new Transferencia(totalCompra);
p3.ProcesarPago("500");