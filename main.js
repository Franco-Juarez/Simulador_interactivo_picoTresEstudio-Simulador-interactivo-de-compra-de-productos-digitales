//Registro de usuario en la página de Pico Tres Estudio

class UserRegistration {
    constructor (userName, userEmail, registration) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.registration = registration;
    }
}

function confirmEmail (userEmail, userEmailConfirm) {
    let askAgain = true;
    do {
        userEmail = prompt("Ingrese su correo electrónico");
        userEmailConfirm = prompt("Confirme su correo electrónico");
        if (userEmail === userEmailConfirm) {
            alert ("La compra ha sido registrada con éxito. El producto será enviado a "+userEmail);
            askAgain = false;
            } else {
                alert("Los correos no coinciden");
            }
    } while (askAgain);
    }

const firstUser = new UserRegistration (prompt ("BIENVENIDO PICO TRE ESTUDIO\n Ingrese su nombre y apellido"), confirmEmail ());
console.log(firstUser);


// class Order{
//     constructor (name, price, amount) {
//         this.name = name;
//         this.price = price;
//         this.amount = amount;
//     }
//     price() {
//         let precioProducto = Product.price;
//         let precioDescuento = 0;

//         let precioFinal = restar (sumar (precioProducto, iva(precioProducto)), precioDescuento);
//     }
// }

// const firstOrder = new Product ();

//CREACIÓN DE PEDIDO

// priceOrder();

// function priceOrder() {
//     let productName = 0;
//     let productAmount = 0;
//     let samplePackAmount = 0;
//     let midiPackAmount = 0;
//     let samplePackPrice = 0;
//     let midiPackPrice = 0;
//     let tutorialPrice = 0;
//     let finalSamplePackPrice = 0;
//     let finalMidiPackPrice = 0;
//     let finaltutorialPackPrice = 0;
//     let samplePackOrder = 0;
//     let midiPackOrder = 0;
//     let tutorialOrder = 0;

//     function userOrder(product, amount) {
//         let buyAgain = true;
//         do {
//             productName = prompt("Seleccione el primer producto que desee sumar al carrito:\n-Sample Pack\n-MIDI Pack\n-Tutorial");
//             productAmount = Number(prompt("Ingrese la cantidad de productos que desee sumar al carrito"));
//             if (productName = "Sample Pack" && productAmount > 0) {
//                 samplePackPrice = 1000;
//                 samplePackAmount = productAmount;
//                 finalSamplePackPrice = (samplePackPrice * samplePackAmount);
//                 samplePackOrder = prompt(`Seleccionaste ${samplePackAmount} unidades de Sample Packs. El subtotal es de `+finalSamplePackPrice+"¿Desea sumar otro producto al carrito?\-SI.\-NO.");
//                 if (samplePackOrder === "NO") {
//                     buyAgain = false;
//                 }
//             } else if (productName = "MIDI Pack" && productAmount > 0){
//                 midiPackPrice = 1200;
//                 midiPackAmount = productAmount;
//                 finalMidiPackPrice = (midiPackPrice * midiPackAmount);
//                 midiPackOrder = prompt(`Seleccionaste ${midiPackAmount} unidades de Sample Packs. El subtotal es de `+finalMidiPackPrice+"¿Desea sumar otro producto al carrito?\-SI.\-NO.");
//                 if (midiPackOrder === "NO") {
//                     buyAgain = false;
//                 }
//             } else if (productName = "Tutorial" && productAmount > 0) {
//                 tutorialPrice = 1000;
//                 tutorialAmount = productAmount;
//                 finaltutorialPackPrice = (tutorialPrice * tutorialAmount);
//                 tutorialOrder = prompt(`Seleccionaste ${tutorialAmount} unidades de Sample Packs. El subtotal es de `+finaltutorialPackPrice+"¿Desea sumar otro producto al carrito?\-SI.\-NO.");
//                 if (tutorialOrder === "NO") {
//                     buyAgain = false;
//                 }
//             } else if (productName !== ("Sample Pack", "Tutorial", "MIDI Pack") || productAmount !==Number){
//                 alert("Los valores ingresados no son válidos.")
//             } 
//         } while (buyAgain);

//         const taxOrderPrice = ((finalSamplePackPrice+finalMidiPackPrice+finaltutorialPackPrice)* 0.21);
//         const finalOrderPrice = (taxOrderPrice+(finalSamplePackPrice+finalMidiPackPrice+finaltutorialPackPrice));
//         alert("El precio total es de "+finalOrderPrice);

//     }
//     userOrder(productName,productAmount);
// }




