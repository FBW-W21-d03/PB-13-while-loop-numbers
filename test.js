/* 
Wiederholung zu IF-Statement
Szenario: Ein Raum ist offen oder geschlossen.
Falls er offen ist, werden Nutzer akzeptiert, sonst abgelehnt.
*/
// Raum ist offen

// FALLS EINE BEDINGUNG ERFÜLLT, ...
let isOpen = false;
if (isOpen) {
    // Der Raum ist offen
    console.log("Willkommen");
    // TODO: Nutzer im Array hinterlegen
} else {
    // der Raum ist geschlossen
    console.log("Leider voll!");
}

/*
While-Schleifen: SOLANGE EINE BEDINGUNG ERFÜLLT IST
Beispiel: Ein Raum hat 20 Plätze. Solange ein Raum noch Platz hat, füge Nutzer hinzu
*/
// 20 Plätze übrig
let spotsRemaining = 0;
while(spotsRemaining > 0){
    // TODO: Füge einen Nutzer hinzu
    console.log("Willkommen");
    // die Zahl der übrigen Plätze reduziert sich um eins.
    spotsRemaining = spotsRemaining - 1;
}


/*
Beispiel: Einkaufskorb mit Nahrungsmitteln
Solange etwas im Einkaufskorb ist, nehme ein Nahrungsmittel heraus und schreibe es heraus.
*/
const einkaufskorb = ["Apfel", "Birne", "Mandarine", "Kürbis", "Tomate"];
while (einkaufskorb.length > 0) {
    let lastItem = einkaufskorb[einkaufskorb.length - 1];
    console.log("ich nehme ein item heraus:", lastItem);
    einkaufskorb.pop();
    console.log(einkaufskorb);
} 
console.log("das array ist jetzt leer")

let index = 20;
while (index > 10) {
    console.log(index);
    index--;
}