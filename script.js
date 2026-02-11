function checkRisk() {
  let score = document.getElementById("scoreInput").value;
  let pet = document.getElementById("petType").value;

  if(pet == "cat" && score > 60) {
    document.getElementById("result").innerText = "High Risk: Cats are sensitive!";
  }
  else if(score < 30) {
    document.getElementById("result").innerText = "Low Risk";
  } 
  else if(score <= 60) {
    document.getElementById("result").innerText = "Medium Risk";
  } 
  else {
    document.getElementById("result").innerText = "High Risk";
  }
}