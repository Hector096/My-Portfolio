const menu = document.getElementById('menu1');
const workPopUpCard = document.getElementById('work-popup-section');
const subscribeForm = document.getElementById('subscribe');
const formErrorMessage = document.getElementById('error-message');
const formEmail = document.getElementById('input-email');

const myProjects = [
  {
    name: 'Tonic', detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', github: 'https://www.github.com/Hectors.096', liveDemoLink: 'https://www.github.com/Hectors.096', imgUrl: 'images/SnapshotPortfolio.png',
  },
  {
    name: 'Multi Project', detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', github: 'https://www.github.com/Hectors.096', liveDemoLink: 'https://www.github.com/Hectors.096', imgUrl: 'images/SnapshotPortfolio2.png',
  },
  {
    name: 'Tonic', detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', github: 'https://www.github.com/Hectors.096', liveDemoLink: 'https://www.github.com/Hectors.096', imgUrl: 'images/SnapshotPortfolio3.png',
  },
  {
    name: 'Multi Project', detailDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptates, quaerat in, deserunt cumque odio alias expedita quasi distinctio minima saepe optio, doloribus nisi. Numquam ratione vitae quas sed asperiores dicta voluptatum maiores praesentium ab ad, animi commodi ea. Sit?', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', github: 'https://www.github.com/Hectors.096', liveDemoLink: 'https://www.github.com/Hectors.096', imgUrl: 'images/SnapshotPortfolio4.png',
  },
];

const checkFormInput = () => {
  const email = formEmail.value.trim();
  if (email === email.toLowerCase()) {
    formErrorMessage.style.display = 'none';
    subscribeForm.submit();
  } else {
    formErrorMessage.innerText = 'Email Should be in lowercase.';
    formErrorMessage.style.display = 'inline';
  }
};

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkFormInput();
});

// eslint-disable-next-line no-unused-vars
const closeMenu = () => {
  menu.style.top = '-100vh';
  menu.style.backgroundColor = 'transparent';
  menu.style.display = 'none';
};

// eslint-disable-next-line no-unused-vars
const openMenu = () => {
  menu.style.top = '0';
  menu.style.backgroundColor = '#384af5';
  menu.style.display = 'block';
};

const popUpProject = (popUpdata) => {
  const popUpItem = `<div id="popUp-view">
     <div class="popUp-card">
         <img src="images/close.png" alt="close" id="popUp-Close" onclick="popupClose();">
         <h2 class="card-title">${popUpdata.name}</h2>
         <div class="work-detail-box">
             <ul>
                 <li class=" work-detail canopy">CANOPY </li>
                 <li class="work-detail work-text">Back End Dev </li>
                 <li class="work-detail work-text">2015</li>
             </ul>
         </div>
         <div class="card-image">
             <img class="work-snapshot" src=${popUpdata.imgUrl}
                 alt="snapshot">
         </div>
         <div class="work">
             <p class="work-description">${popUpdata.detailDescription}</p>
             <div>
                 <div class="work-detail-box">
                     <ul>
                         <li class="chips">html</li>
                         <li class="chips">css</li>
                         <li class="chips">javascript</li>
                     </ul>
                 </div>
                 <div id="work-buttons">
                     <div class="work-button"><a class="project-button" href=${popUpdata.liveDemoLink}>See Live <img
                         src="images/live1.png" alt="live" id="live"></a>
                     </div>
                     <div class="work-button"><a class="project-button" href=${popUpdata.github}>See Source <img
                                 src="images/github.png" alt="github" id="pop-github"></a></div>
                 </div>
  
             </div>
  
         </div>
     </div>
  </div>`;
  workPopUpCard.innerHTML = popUpItem;
};

// eslint-disable-next-line no-unused-vars
const popupClose = () => {
  const popUpProject = document.getElementById('popUp-view');
  popUpProject.style.visibility = 'hidden';
};

const myProjectWork = (data) => {
  const workCard = document.getElementById('work-section');
  let workItem;
  for (let i = 0; i < data.length; i += 1) {
    if (i % 2 === 0) {
      workItem = `
            <section class="work-item">
            <div class="work-box">
                <div class="card-image">
                    <img class="work-snapshot" src=${data[i].imgUrl} alt="snapshot${i}">
                </div>
                <div class="work">
                    <h2 class="card-title">${data[i].name}</h2>
                    <div class="work-detail-box">
                        <ul>
                            <li class=" work-detail canopy">CANOPY </li>
                            <li class="work-detail work-text">Back End Dev </li>
                            <li class="work-detail work-text">2015</li>
                        </ul>
                    </div>
                    <p class="work-description">${data[i].description}</p>
                    <div>
                        <div class="work-detail-box">
                            <ul>
                                <li class="chips">html</li>
                                <li class="chips">css</li>
                                <li class="chips">javascript</li>
                            </ul>
                        </div>
                    </div>
                    <div class="work-button"><a class="project-button see-button">See Project</a></div>
                </div>
            </div>
        </section>
            `;
      workCard.innerHTML += workItem;
    } else {
      workItem = `
            <section class="work-item">
            <div class="work-box box1">
                <div class="card-image">
                    <img class="work-snapshot" src=${data[i].imgUrl} alt="snapshot${i}">
                </div>
                <div class="work">
                    <h2 class="card-title">${data[i].name}</h2>
                    <div class="work-detail-box">
                        <ul>
                            <li class=" work-detail canopy">CANOPY </li>
                            <li class="work-detail work-text">Back End Dev </li>
                            <li class="work-detail work-text">2015</li>
                        </ul>
                    </div>
                    <p class="work-description">${data[i].description}</p>
                    <div>
                        <div class="work-detail-box">
                            <ul>
                                <li class="chips">html</li>
                                <li class="chips">css</li>
                                <li class="chips">javascript</li>
                            </ul>
                        </div>
                    </div>
                    <div class="work-button"><a class="project-button see-button">See Project</a></div>
                </div>
            </div>
        </section>
            `;
      workCard.innerHTML += workItem;
    }
  }
  const btn = workCard.querySelectorAll('.see-button');
  btn.forEach((x, idx) => x.addEventListener('click', () => {
    popUpProject(data[idx]);
  }));
};

myProjectWork(myProjects);