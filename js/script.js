
// Richiesta informazioni
const nameUser = prompt('Inserisci il tuo nome');
const surnameUser = prompt('Inserisci il tuo cognome');
const colorUser = prompt('Inserisci il tuo colore');

// Bonus
const ageUser = prompt('inserisci la tua età')

// Scrittura su console
console.log(nameUser, surnameUser ,colorUser, ageUser);



// Scrittura su pagina web 

// Nome
document.getElementById("name-user").innerHTML = nameUser
// Cognome
document.getElementById("surname-user").innerHTML = surnameUser
// Colore
document.getElementById("color-user").innerHTML = colorUser
// Età
document.getElementById("age-user").innerHTML = ageUser

// Password
document.getElementById("pw-user").innerHTML = nameUser + surnameUser + colorUser + ageUser