let team = [
    {nome: 'Wayne Barnett', ruolo: 'Founder & CEO', foto: './img/wayne-barnett-founder-ceo.jpg'},
    {nome: 'Angela Caroll', ruolo: 'Chief Editor', foto: './img/angela-caroll-chief-editor.jpg'},
    {nome: 'Walter Gordon', ruolo: 'Office Manager', foto: './img/walter-gordon-office-manager.jpg'},
    {nome: 'Angela Lopez', ruolo: 'Social Media Manager', foto: './img/angela-lopez-social-media-manager.jpg'},
    {nome: 'Scott Estrada', ruolo: 'Developer', foto: './img/scott-estrada-developer.jpg'},
    {nome: 'Barbara Ramos', ruolo: 'Graphic Designer', foto: './img/barbara-ramos-graphic-designer.jpg'}
]
for (let i = 0; i < team.length; i++) {
    let teamContainer = document.getElementById("teamContainer");
    let cards = document.createElement("div");
    cards.classList.add("card");
    let member = team[i];
    cards.innerHTML = `<img src="${member.foto}" class="card-img-top">
    <h3>${member.nome}</h3>
    <p>${member.ruolo}</p>`;
    teamContainer.appendChild(cards);
    console.log(member);
}