"use strict";
(function () {
  window.addEventListener("load", init);

  function init() {
    let insectes = qsa("#insecte-container img");
    for (let i = 0; i < insectes.length; i++) {
      insectes[i].addEventListener("click", exter_insect);
    }
  }

  function exter_insect(event) {
  	let targetElement = event.currentTarget;
  	 if (targetElement.src === "insecte-mort.png") {
  	 return;
  	 }
  	targetElement.src = "insecte-mort.png";
  	
  	// Supprime l'événement "click" de l'élément cible
  	 targetElement.removeEventListener("click", exter_insect);
  	
  	 // Récupère le compteur d'insectes exterminés
    	let scoreElement = document.getElementById("score");
  	// Convertit le compteur en entier
  	let score = parseInt(document.getElementById("score").textContent);
  	
    	 score += 1;
  	 scoreElement.innerHTML = score;
  	 
  	  // Récupère le nombre d'insectes encore présents sur la page
 	let remainingInsects = document.querySelectorAll("#insecte-container img").length;
 	//document.querySelectorAll("#insecte-container img[src='insecte.png']").length;
 	
 	if (score === remainingInsects ) {
    		let scoreElement = document.getElementById("score");
    let pElement = scoreElement.parentNode;
    pElement.innerHTML = "Tous les insectes ont été exterminés !";
  }
   	
  	  
  	  
    // vous ne devez toucher qu'ici
    // event voir ici : https://developer.mozilla.org/fr/docs/Web/API/Event/currentTarget
  }

  function id(name) {
    return document.getElementById(name);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
