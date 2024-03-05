// variabili
let userName = prompt('Come ti chiami?');
let userSurname = prompt('Dimmi anche il tuo cognome');
let userColor = prompt('... E il tuo colore preferito.');

let userPassword = userName + userSurname + userColor + '23';

document.getElementById('generator').innerHTML = 'La password che ti (s)consigliamo è: ' + userPassword;