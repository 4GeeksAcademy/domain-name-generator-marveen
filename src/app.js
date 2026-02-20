import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here


  // Generate domains 
function generateDomains(arr1, arr2, arr3) {
  const domains = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        domains.push(arr1[i] + arr2[j] + arr3[k] + ".com");
      }
    }
  }
  
  return domains;
}

let pronoun = ['the', 'our', 'your'];
let adj = ['great', 'big', 'best', 'awesome'];
let noun = ['jogger', 'racoon', 'coder', 'class', 'work'];






const buttonContainer = document.getElementById("domains");
const loadMoreBtn = document.getElementById("loadMoreBtn");

const domains = generateDomains(pronoun, adj, noun);

const batchSize = 6;
let currentIndex = 0;

// Function that renders next batch
function renderButtons() {
  const nextItems = domains.slice(currentIndex, currentIndex + batchSize);

  nextItems.forEach(domain => {
    const btn = document.createElement("button");
    btn.textContent = domain;
    buttonContainer.appendChild(btn);
    btn.className= "col-12 col-sm-12 col-md-4 fs-5 btn btn-primary text-truncate border border-2 border-white"
  });

  currentIndex += batchSize;

  // If no more items left → hide button
  if (currentIndex >= domains.length) {
    loadMoreBtn.style.display = "none";
  }
}

// Initial render (first 9)
renderButtons();

// Click for more
loadMoreBtn.addEventListener("click", renderButtons);

 }



