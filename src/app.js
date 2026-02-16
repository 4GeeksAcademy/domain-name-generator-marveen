import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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

const domainList = generateDomains(pronoun, adj, noun);

// Select the container
const container = document.getElementById("domains");

// Insert <p> elements dynamically
domainList.forEach(domain => {
  const p = document.createElement("p");
  p.textContent = domain;
  container.appendChild(p);
  p.className= "mx-1 col-sm-12 col-md-4 col-xl-2 fs-4 btn btn-primary object-fit-fill text-truncate"
});

}



