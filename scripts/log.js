// ===============================
//             Log
// ===============================
function writeToLog(event, name, value) {
  const log = document.getElementById("log");
  let newEntry = document.createElement("li");

  switch (event) {
    case LOG_EVENT_MONSTER_ATTACK:
      newEntry.textContent = `The ${name} dealt ${value} damage to you!`;
      break;

    case LOG_EVENT_SMITE_CRITICAL:
      let quote = Math.floor(Math.random() * 10);
      if (quote === 1) {
        quote = "In the blazing name of the sun, I smite you, let its fire cleanse your soul!";
      } else if (quote === 2 ) {
        quote = "By the searing light of the sun, I reduce your wickedness to cinders!";
      } else if (quote === 3) {
        quote = "The sun's wrath is an inferno, and you shall be consumed!";
      } else if (quote === 4) {
        quote = "May the sun's fire consume your wickedness, leaving only ashes!";
      } else if (quote === 5) {
        quote = "By the sun's radiant might, I sear your malevolence!";
      } else if (quote === 6) {
        quote = "Feel the scorching embrace of the sun's fury, wretched foe!";
      } else if (quote === 7) {
        quote = "In the sun's brilliant embrace, I strike you down, leaving only embers!";
      } else if (quote === 8) {
        quote = "By the fiery embrace of the sun, I brand you with holy fury!";
      } else if (quote === 9) {
        quote = "In the name of the sun, I command you to burn in righteous fire!";
      } else {
        quote = "From the sun's heart, a torrent of flames to consume your wickedness!"
      }
  
      newEntry.textContent = `Critical Smite: "${quote}" You dealt ${value} damage to the ${name}!`
      break;
    }
  

  log.insertBefore(newEntry, log.firstChild);
}