// // ===============================
// //        Imports & Exports
// // ===============================
// import { setPaladinStats, paladinHolySmite } from "./heroes.js";
// import {
//   guardHandler,
//   potionHandler,
//   attackBtn,
//   guardBtn,
//   fleeBtn,
//   specialBtn,
//   potionBtn,
// } from "./app.js";

// ===============================
//       Choose Hero Modal
// ===============================

function openChooseHeroModal() {
  document.getElementById("heroChoiceModal").style.display = "block";
}

openChooseHeroModal();



// Event Listeners & Imports
// import {paladinHolySmite} from "./heroes";

attackBtn.addEventListener("click", function () {
  attackHandler(1);
});
guardBtn.addEventListener("click", guardHandler);
specialBtn.addEventListener("click", paladinHolySmite);
// later create a new function that handles
// the special ability checking which hero with an if statement,
potionBtn.addEventListener("click", potionHandler);
// fleeBtn.addEventListener('click', );
