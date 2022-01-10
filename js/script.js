const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// 1. per prima cosa prendo dal HTML il container dove saranno
// contenute le card
// 2. inizio il ciclo for per ciclare i elementi dentro l'array
// 3. prendo il codice della card statica dentro il file index.html
// e per ogni membro lo faccio stampare nel HTML dal .innerHTML
// tramite il back thick fornisco il valore che mi serve di ogni oggetto 

const teamContainer = document.querySelector('.team-container');

for (let i = 0; i < team.length; i++) {
  const membro= team[i];
  teamContainer.innerHTML+=`
    <div div class="team-card" >
      <div class="card-image">
        <img
          src="img/${membro.image}"
          alt="${membro.name}"
        />
      </div>
      <div class="card-text">
        <h3>${membro.name}</h3>
        <p>${membro.role}</p>
      </div>
    </div >
  ` 
}