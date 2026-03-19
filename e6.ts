abstract class Notificacion {

    mensaje: string;

    constructor(mensaje: string) {
        this.mensaje = mensaje;
    }

    abstract enviar(a?: string): void;
}

class Email extends Notificacion {

    enviar(): void {
        console.log("Email: " + this.mensaje)
    }
}

class SMS extends Notificacion {

    enviar(): void {
        console.log("SMS: " + this.mensaje)
    }
}

class WhatsApp extends Notificacion {

    enviar(): void {
        console.log("WhatsApp: " + this.mensaje)
    }
}

let texto = "Hola";

let obj1 = new Email(texto);
let obj2 = new SMS(texto);
let obj3 = new WhatsApp(texto);

obj1.enviar();
obj2.enviar();
obj3.enviar();