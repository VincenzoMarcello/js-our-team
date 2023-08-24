//* MI CREO L'ARRAY DI OGGETTI CON LE INFO FORNITE
const myTeam = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    pic: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    pic: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    pic: "img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    pic: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    pic: "img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    pic: "img/barbara-ramos-graphic-designer.jpg",
  },
];
console.log(myTeam);

//* STAMPO LE INFO DI OGNI MEMBRO DEL TEAM
for (const member of myTeam) {
  console.log(member.name);
  console.log(member.role);
  console.log(member.pic);
}

//! STAMPO LE STESSE INFO SUL DOM
//* RECUPERO L'ID DOVE STAMPARE LA CARD
let cardContainer = document.getElementById("card-container");

//* ORGANIZZO I MEMBRI DEL TEAM IN SCHEDE
//* E TRASFORMO LE STRINGHE DELLE IMMAGINI IN FOTO
for (const member of myTeam) {
  cardContainer.innerHTML += `
  <div class="col-4 mb-4">
  <div class="card" style="width: 18rem">
  <img
    src="${member.pic}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${member.name}</h5>
    <p class="card-text">${member.role}
    </p>
  </div>
</div>
</div>`;
}
