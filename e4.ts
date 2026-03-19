abstract class Empleado {
    salario: string;

    constructor(salario: string) {
        this.salario = salario;
    }

    abstract CalcularSalario(param?: string): void;
}

// Por horas
class Horas extends Empleado {
    CalcularSalario(horas: string): void {
        let sueldo = parseFloat(this.salario) * parseFloat(horas);
        console.log("Sueldo por horas: $" + sueldo);
    }
}

// Fijo
class Fijo extends Empleado {
    CalcularSalario(): void {
        console.log("El empleado gana: $" + this.salario);
    }
}

// Comisión
class Comision extends Empleado {
    CalcularSalario(porcentaje: string): void {
        let sueldo = parseFloat(this.salario) * parseFloat(porcentaje);
        console.log("Sueldo con comisión: $" + sueldo);
    }
}

// PRUEBA
let rand = "200";

let ob1 = new Horas(rand);
ob1.CalcularSalario("5");

let ob2 = new Fijo(rand);
ob2.CalcularSalario();

let ob3 = new Comision(rand);
ob3.CalcularSalario("0.10");


