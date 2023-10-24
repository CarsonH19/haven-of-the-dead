// ===============================
//             Log
// ===============================
function writeToLog(event, name, value) {
  let newEntry = document.createElement("li");
  let narration = Math.floor(Math.random() * 10);
  let quote = Math.floor(Math.random() * 10);

  switch (event) {

// ===============================
//        Monster Events
// ===============================

    case LOG_EVENT_MONSTER_ATTACK:

      if (name === 'Crypt Crawler') {
        if (narration === 1) {
          narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
        } else if (narration === 1) {
          narration =  "";
        } else if (narration === 2) {
          narration =  "";
        } else if (narration === 3) {
          narration =  "";
        } else if (narration === 4) {
          narration =  "";
        } else if (narration === 5) {
          narration =  "";
        } else if (narration === 6) {
          narration =  "";
        } else if (narration === 7) {
          narration =  "";
        } else if (narration === 8) {
          narration =  "";
        } else if (narration === 9) {
          narration =  "";
        } else {
          narration = "";
        }
        
      } else if (name === 'Decrepit Skeleton') {
          if (narration === 1) {
            narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
          } else if (narration === 1) {
            narration =  "";
          } else if (narration === 2) {
            narration =  "";
          } else if (narration === 3) {
            narration =  "";
          } else if (narration === 4) {
            narration =  "";
          } else if (narration === 5) {
            narration =  "";
          } else if (narration === 6) {
            narration =  "";
          } else if (narration === 7) {
            narration =  "";
          } else if (narration === 8) {
            narration =  "";
          } else if (narration === 9) {
            narration =  "";
          } else {
            narration = "";
          }

      } else if (name === 'Skeletal Soldier') {
        if (narration === 1) {
          narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
        } else if (narration === 1) {
          narration =  "";
        } else if (narration === 2) {
          narration =  "";
        } else if (narration === 3) {
          narration =  "";
        } else if (narration === 4) {
          narration =  "";
        } else if (narration === 5) {
          narration =  "";
        } else if (narration === 6) {
          narration =  "";
        } else if (narration === 7) {
          narration =  "";
        } else if (narration === 8) {
          narration =  "";
        } else if (narration === 9) {
          narration =  "";
        } else {
          narration = "";
        }

    } else if (name === 'Armored Skeleton') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }

    } else if (name === 'Blazing Skeleton') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }

    } else if (name === 'Draugr') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }

    } else if (name === 'Bone Titan') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }

    } else if (name === 'Flood of Bones') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }

    } else if (name === 'Baron of Bone') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }

    } else if (name === 'Shade') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }

    } else if (name === 'Ghost') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }

    } else if (name === 'Grudge') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }

    } else if (name === 'Gnawer') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }

    } else if (name === 'Coffin Spider') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }

    } else if (name === 'Scoundrel') {
      if (narration === 1) {
        narration = "A sudden jolt of pain shoots through you as the Crypt Crawler's fangs find their mark.";
      } else if (narration === 1) {
        narration =  "";
      } else if (narration === 2) {
        narration =  "";
      } else if (narration === 3) {
        narration =  "";
      } else if (narration === 4) {
        narration =  "";
      } else if (narration === 5) {
        narration =  "";
      } else if (narration === 6) {
        narration =  "";
      } else if (narration === 7) {
        narration =  "";
      } else if (narration === 8) {
        narration =  "";
      } else if (narration === 9) {
        narration =  "";
      } else {
        narration = "";
      }
    }
    newEntry.textContent = `Monster Attack: ${narration} The ${name} dealt ${value} damage to you!`;
    break;

// ===============================
//        Player Events
// ===============================

    case LOG_EVENT_PLAYER_ATTACK: 
      if (heroChoice === 'PALADIN') {
        if (narration === 1) {
          narration = "";
        } else if (narration === 1) {
          narration =  "";
        } else if (narration === 2) {
          narration =  "";
        } else if (narration === 3) {
          narration =  "";
        } else if (narration === 4) {
          narration =  "";
        } else if (narration === 5) {
          narration =  "";
        } else if (narration === 6) {
          narration =  "";
        } else if (narration === 7) {
          narration =  "";
        } else if (narration === 8) {
          narration =  "";
        } else if (narration === 9) {
          narration =  "";
        } else {
          narration = "";
        }
        
      } else if (heroChoice === 'ROGUE') {
        if (narration === 1) {
          narration = "";
        } else if (narration === 1) {
          narration =  "";
        } else if (narration === 2) {
          narration =  "";
        } else if (narration === 3) {
          narration =  "";
        } else if (narration === 4) {
          narration =  "";
        } else if (narration === 5) {
          narration =  "";
        } else if (narration === 6) {
          narration =  "";
        } else if (narration === 7) {
          narration =  "";
        } else if (narration === 8) {
          narration =  "";
        } else if (narration === 9) {
          narration =  "";
        } else {
          narration = "";
        }

      } else if (heroChoice === 'PRIESTESS') {
        if (narration === 1) {
          narration = "";
        } else if (narration === 1) {
          narration =  "";
        } else if (narration === 2) {
          narration =  "";
        } else if (narration === 3) {
          narration =  "";
        } else if (narration === 4) {
          narration =  "";
        } else if (narration === 5) {
          narration =  "";
        } else if (narration === 6) {
          narration =  "";
        } else if (narration === 7) {
          narration =  "";
        } else if (narration === 8) {
          narration =  "";
        } else if (narration === 9) {
          narration =  "";
        } else {
          narration = "";
        }
      }   

      newEntry.textContent = `Attack: "${quote}" You dealt ${value} damage to the ${name}!`
      break;

    case LOG_EVENT_PLAYER_CRITICAL:
      if (heroChoice === 'PALADIN') {
        if (narration === 1) {
          narration = "";
        } else if (narration === 1) {
          narration =  "";
        } else if (narration === 2) {
          narration =  "";
        } else if (narration === 3) {
          narration =  "";
        } else if (narration === 4) {
          narration =  "";
        } else if (narration === 5) {
          narration =  "";
        } else if (narration === 6) {
          narration =  "";
        } else if (narration === 7) {
          narration =  "";
        } else if (narration === 8) {
          narration =  "";
        } else if (narration === 9) {
          narration =  "";
        } else {
          narration = "";
        }
        
      } else if (heroChoice === 'ROGUE') {
        if (narration === 1) {
          narration = "";
        } else if (narration === 1) {
          narration =  "";
        } else if (narration === 2) {
          narration =  "";
        } else if (narration === 3) {
          narration =  "";
        } else if (narration === 4) {
          narration =  "";
        } else if (narration === 5) {
          narration =  "";
        } else if (narration === 6) {
          narration =  "";
        } else if (narration === 7) {
          narration =  "";
        } else if (narration === 8) {
          narration =  "";
        } else if (narration === 9) {
          narration =  "";
        } else {
          narration = "";
        }

      } else if (heroChoice === 'PRIESTESS') {
        if (narration === 1) {
          narration = "";
        } else if (narration === 1) {
          narration =  "";
        } else if (narration === 2) {
          narration =  "";
        } else if (narration === 3) {
          narration =  "";
        } else if (narration === 4) {
          narration =  "";
        } else if (narration === 5) {
          narration =  "";
        } else if (narration === 6) {
          narration =  "";
        } else if (narration === 7) {
          narration =  "";
        } else if (narration === 8) {
          narration =  "";
        } else if (narration === 9) {
          narration =  "";
        } else {
          narration = "";
        }
      }   

      newEntry.textContent = `Critical Attack: "${quote}" You dealt ${value} damage to the ${name}!`
      break;

    case LOG_EVENT_GUARD:
      if (heroChoice === 'PALADIN') {
        if (narration === 1) {
          narration = "";
        } else if (narration === 1) {
          narration =  "";
        } else if (narration === 2) {
          narration =  "";
        } else if (narration === 3) {
          narration =  "";
        } else if (narration === 4) {
          narration =  "";
        } else if (narration === 5) {
          narration =  "";
        } else if (narration === 6) {
          narration =  "";
        } else if (narration === 7) {
          narration =  "";
        } else if (narration === 8) {
          narration =  "";
        } else if (narration === 9) {
          narration =  "";
        } else {
          narration = "";
        }
        
      } else if (heroChoice === 'ROGUE') {
        if (narration === 1) {
          narration = "";
        } else if (narration === 1) {
          narration =  "";
        } else if (narration === 2) {
          narration =  "";
        } else if (narration === 3) {
          narration =  "";
        } else if (narration === 4) {
          narration =  "";
        } else if (narration === 5) {
          narration =  "";
        } else if (narration === 6) {
          narration =  "";
        } else if (narration === 7) {
          narration =  "";
        } else if (narration === 8) {
          narration =  "";
        } else if (narration === 9) {
          narration =  "";
        } else {
          narration = "";
        }

      } else if (heroChoice === 'PRIESTESS') {
        if (narration === 1) {
          narration = "";
        } else if (narration === 1) {
          narration =  "";
        } else if (narration === 2) {
          narration =  "";
        } else if (narration === 3) {
          narration =  "";
        } else if (narration === 4) {
          narration =  "";
        } else if (narration === 5) {
          narration =  "";
        } else if (narration === 6) {
          narration =  "";
        } else if (narration === 7) {
          narration =  "";
        } else if (narration === 8) {
          narration =  "";
        } else if (narration === 9) {
          narration =  "";
        } else {
          narration = "";
        }
      }   
      newEntry.textContent = `Guard: You mitigate ${value} damage from the ${name}!`
      break;

    case LOG_EVENT_POTION:
      newEntry.textContent = `Potion: ${name} restore ${value} health after drinking a potion!`
      break;
    // case LOG_EVENT_FLEE:
    // case LOG_EVENT_LEVEL:
    // case LOG_EVENT_NEW_ROOM:
      
// ===============================
//        Paladin Events
// ===============================

    case LOG_EVENT_SMITE:
      quote = Math.floor(Math.random() * 10);
      if (quote === 1) {
        quote = "";
      } else if (quote === 2 ) {
        quote = "";
      } else if (quote === 3) {
        quote = "";
      } else if (quote === 4) {
        quote = "";
      } else if (quote === 5) {
        quote = "";
      } else if (quote === 6) {
        quote = "";
      } else if (quote === 7) {
        quote = "";
      } else if (quote === 8) {
        quote = "";
      } else if (quote === 9) {
        quote = "";
      } else {
        quote = "";
      }
      newEntry.textContent = `Holy Smite: "${quote}" You dealt ${value} damage to the ${name}!`
      break;

    case LOG_EVENT_SMITE_CRITICAL:
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
    
    case LOG_EVENT_RADIANT_AURA: 
      quote = Math.floor(Math.random() * 5);
      if (quote === 1) {
        quote = "";
      } else if (quote === 2 ) {
        quote = "";
      } else if (quote === 3) {
        quote = "";
      } else if (quote === 4) {
        quote = "";
      } else {
        quote = ""
      }
      newEntry.textContent = `Radiant Aura: "${quote}" You dealt ${value} damage to the ${name}!`
      break
    
// ===============================
//          Rogue Events
// =============================== 
    case LOG_EVENT_SHADOW_STRIKE:
      if (quote === 1) {
        quote = "";
      } else if (quote === 2 ) {
        quote = "";
      } else if (quote === 3) {
        quote = "";
      } else if (quote === 4) {
        quote = "";
      } else if (quote === 5) {
        quote = "";
      } else if (quote === 6) {
        quote = "";
      } else if (quote === 7) {
        quote = "";
      } else if (quote === 8) {
        quote = "";
      } else if (quote === 9) {
        quote = "";
      } else {
        quote = "";
      }
      newEntry.textContent = `Shadow Strike: "${quote}" You dealt ${value} damage to the ${name}!`
      break;

    case LOG_EVENT_EVASION:
      quote = Math.floor(Math.random() * 5);
      if (quote === 1) {
        quote = "";
      } else if (quote === 2 ) {
        quote = "";
      } else if (quote === 3) {
        quote = "";
      } else if (quote === 4) {
        quote = "";
      } else {
        quote = ""
      }
      newEntry.textContent = `Evasion: "${quote}" You evaded ${value} damage from the ${name}!`
      break

// ===============================
//        Priestess Events
// ===============================

  case LOG_EVENT_GREATER_PRAYER: 
      if (quote === 1) {
        quote = "";
      } else if (quote === 2 ) {
        quote = "";
      } else if (quote === 3) {
        quote = "";
      } else if (quote === 4) {
        quote = "";
      } else if (quote === 5) {
        quote = "";
      } else if (quote === 6) {
        quote = "";
      } else if (quote === 7) {
        quote = "";
      } else if (quote === 8) {
        quote = "";
      } else if (quote === 9) {
        quote = "";
      } else {
        quote = "";
      }
      newEntry.textContent = `Greater Prayer: "${quote}" ${name} restored ${value} health!`
      break;
      
  case LOG_EVENT_BURNING_RADIANCE: 
    quote = Math.floor(Math.random() * 5);
    if (quote === 1) {
      quote = "";
    } else if (quote === 2 ) {
      quote = "";
    } else if (quote === 3) {
      quote = "";
    } else if (quote === 4) {
      quote = "";
    } else {
      quote = ""
    }
    newEntry.textContent = `Evasion: "${quote}" You evaded ${value} damage from the ${name}!`
    break

  }

  log.insertBefore(newEntry, log.firstChild);
  checkListSize();
}


function checkListSize() {
  if (log.children.length >= 50) {
    log.removeChild(log.lastElementChild);
  }
}