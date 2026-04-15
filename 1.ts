import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class Paciente {
  constructor(
    public nombre: string,
    public edad: number,
    public codigo: string
  ) {}

  descuento(): number {
    return parseInt(this.codigo.slice(-2));
  }
}

class general extends Paciente {
    mostrar(sintomas : string): void {
        let total = 50 - this.descuento();

        console.log("\nPaciente: " + this.nombre);
        console.log("edad: " + this.edad);
        console.log("sintomas: " + sintomas);
        console.log("consulta general");
        console.log("total: $" + total);
    }
}

class especialista extends Paciente {
    mostrar(sintomas: string): void {
        let extra = 90 * 0.03;
        let total = 90 - this.descuento() + extra;

        console.log("\nPaciente: " + this.nombre);
        console.log("edad: " + this.edad);
        console.log("sintomas: " + sintomas);
        console.log("consulta Especialidad");
        console.log("total: $" + total.toFixed(2));
    }
}

rl.question('Ingrese el nombre del paciente: ', (nombre) => {
 rl.question('Ingrese la edad del paciente: ', (edad) => {
 rl.question('Ingrese el codigo del paciente: ', (codigo) => {
rl.question('Ingrese los sintomas del paciente: ', (sintomas) => {
rl.question('Ingrese el tipo de consulta (general/especialista): ', (op) => {

    if (op == "1"){
        let p1 = new general(nombre, parseInt(edad), codigo);
        p1.mostrar(sintomas);
    } else{
        let p2 = new especialista(nombre, parseInt(edad), codigo);
        p2.mostrar(sintomas);
    }

    rl.close();
});
});
});
});
});

            