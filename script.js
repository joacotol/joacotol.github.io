document.getElementById("cl").style.display = "none";
let date = document.getElementById("currentDate");

let company = document.getElementById("company");
let agency = document.getElementById("agency");

function getDate(dayAndMonth) {
  date.innerHTML = dayAndMonth;
}

function getPosition(initialPosition) {
  let position = document.getElementsByClassName("position");
  for (let i = 0; i < position.length; i++) {
    position[i].innerText = initialPosition;
  }
}

function getCompany(initialCompany) {
  company.innerHTML = initialCompany;
}

function getAgency(initialAgency) {
  agency.innerHTML = initialAgency;
}

function getInfo() {
  let setDate = document.getElementById("iDate").value;
  let setPosition = document.getElementById("iPosition").value;
  let setCompany = document.getElementById("iCompany").value;
  let setAgency = document.getElementById("iAgency").value;

  getDate(setDate);

  getPosition(setPosition);
  getCompany(setCompany);
  getAgency(setAgency);

  document.getElementById("cl").style.display = "block";
  document.getElementById("getQuestion").style.display = "none";
}

document.getElementById("sbmt").addEventListener("click", getInfo);
