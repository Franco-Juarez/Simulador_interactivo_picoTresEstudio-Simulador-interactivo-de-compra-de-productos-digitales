//Registro de usuario en la página de Pico Tres Estudio

class UserRegistration {
    constructor (userName, userEmail) {
        this.userName = userName;
        this.userEmail = userEmail;
    }
}

function confirmEmail (userEmail) {
    let askAgain = true;
    do {
        userEmail = prompt("Ingrese su correo electrónico");
        userEmailConfirm = prompt("Confirme su correo electrónico");
        if (userEmail === userEmailConfirm) {
            alert ("La dirección de correo ha sido registrada con éxito. El producto será enviado a "+userEmail);
            askAgain = false;
            } else {
                alert("Los correos no coinciden");
            }
    } while (askAgain);
    return userEmail;
    }

const firstUser = new UserRegistration (prompt ("BIENVENIDO PICO TRES ESTUDIO\n Ingrese su nombre y apellido"), confirmEmail ());
console.log(firstUser);

// CREACIÓN DE PEDIDO

priceOrder();

function priceOrder() {
    let productName = 0;
    let productAmount = 0;
    let samplePackAmount = 0;
    let midiPackAmount = 0;
    let samplePackPrice = 0;
    let midiPackPrice = 0;
    let tutorialPrice = 0;
    let finalSamplePackPrice = 0;
    let finalMidiPackPrice = 0;
    let finalTutorialPackPrice = 0;
    let samplePackOrder = 0;
    let midiPackOrder = 0;
    let tutorialOrder = 0;

    function userOrder(product, amount) {
        let buyAgain = true;
        do {
            productName = prompt("Seleccione el producto que desee sumar al carrito:\n-Sample Pack\n-MIDI Pack\n-Tutorial").toUpperCase();
            productAmount = Number(prompt("Ingrese la cantidad de productos que desee sumar al carrito"));
            if (productName === "SAMPLE PACK" && productAmount > 0) {
                samplePackPrice = 1500;
                samplePackAmount = productAmount;
                finalSamplePackPrice = (samplePackPrice * samplePackAmount);
                samplePackOrder = prompt(`Seleccionaste ${samplePackAmount} unidades de Sample Packs. El subtotal es de `+(finalSamplePackPrice)+"\n¿Desea sumar otro producto al carrito?\n-SI\n-NO").toUpperCase();
                if (samplePackOrder === "NO") {
                    buyAgain = false;
                } 
            } else if (productName === "MIDI PACK" && productAmount > 0){
                midiPackPrice = 1200;
                midiPackAmount = productAmount;
                finalMidiPackPrice = (midiPackPrice * midiPackAmount);
                midiPackOrder = prompt(`Seleccionaste ${midiPackAmount} unidades de MIDI Packs. El subtotal es de `+(finalMidiPackPrice)+"\n¿Desea sumar otro producto al carrito?\n-SI\n-NO").toUpperCase();
                if (midiPackOrder === "NO") {
                    buyAgain = false;
                }
            } else if (productName === "TUTORIAL" && productAmount > 0) {
                tutorialPrice = 1000;
                tutorialAmount = productAmount;
                finalTutorialPackPrice = (tutorialPrice * tutorialAmount);
                tutorialOrder = prompt(`Seleccionaste ${tutorialAmount} unidades de Tutorial Packs. El subtotal es de `+(finalTutorialPackPrice)+"\n¿Desea sumar otro producto al carrito?\n-SI\n-NO").toUpperCase();
                if (tutorialOrder === "NO") {
                    buyAgain = false;
                }
            } else if (productName !== ("SAMPLE PACK", "TUTORIAL", "MIDI PACK") || productAmount !==Number){
                alert("Los valores ingresados no son válidos.")
            } 
        } while (buyAgain);

        console.log(finalSamplePackPrice);
        console.log(finalMidiPackPrice);
        console.log(finalTutorialPackPrice);
        const taxOrderPrice = ((finalSamplePackPrice+finalMidiPackPrice+finalTutorialPackPrice)* 0.21);
        const finalOrderPrice = (taxOrderPrice+(finalSamplePackPrice+finalMidiPackPrice+finalTutorialPackPrice));
        alert("El precio total es de "+finalOrderPrice+"\nLa orden fue enviada a "+firstUser.userEmail+"\nGracias por su compra.");
    }
    userOrder(productName,productAmount);
}