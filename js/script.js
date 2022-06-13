const nameUser = prompt('Inserisci il tuo nome');
const surnameUser = prompt('Inserisci il tuo cognome');
const colorUser = prompt('Inserisci il tuo colore');

console.log(nameUser, surnameUser ,colorUser);


document.getElementById("name-user").innerHTML = nameUser
document.getElementById("surname-user").innerHTML = surnameUser
document.getElementById("color-user").innerHTML = colorUser

