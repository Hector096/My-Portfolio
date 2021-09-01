const menu = document.getElementById('menu1');
const workPopUpCard = document.getElementById('work-popup-section');

// eslint-disable-next-line no-unused-vars
function closeMenu() {
    menu.style.top = '-100vh';
    menu.style.backgroundColor = 'transparent';
    menu.style.display = 'none';
}

// eslint-disable-next-line no-unused-vars
function openMenu() {
    menu.style.top = '0';
    menu.style.backgroundColor = '#384af5';
    menu.style.display = 'block';
}

var myProjects = [
    { 'name': 'Tonic', 'description': 'A daily selection of privately personalized reads; no accounts or sign-ups required.', 'stack': ['html', 'css', 'Javascript'], 'github': 'https://www.github.com/Hectors.096', 'liveDemoLink': 'https://www.github.com/Hectors.096', 'imgUrl': 'images/SnapshotPortfolio.png' },
    { 'name': 'Multi Project', 'description': 'A daily selection of privately personalized reads; no accounts or sign-ups required.', 'stack': ['html', 'css', 'Javascript'], 'github': 'https://www.github.com/Hectors.096', 'liveDemoLink': 'https://www.github.com/Hectors.096', 'imgUrl': 'images/SnapshotPortfolio2.png' },
    { 'name': 'Tonic', 'description': 'A daily selection of privately personalized reads; no accounts or sign-ups required.', 'stack': ['html', 'css', 'Javascript'], 'github': 'https://www.github.com/Hectors.096', 'liveDemoLink': 'https://www.github.com/Hectors.096', 'imgUrl': 'images/SnapshotPortfolio3.png' },
    { 'name': 'Multi Project', 'description': 'A daily selection of privately personalized reads; no accounts or sign-ups required.', 'stack': ['html', 'css', 'Javascript'], 'github': 'https://www.github.com/Hectors.096', 'liveDemoLink': 'https://www.github.com/Hectors.096', 'imgUrl': 'images/SnapshotPortfolio4.png' }
];

myProjectWork(myProjects);

function myProjectWork(data) {
    var workCard = document.getElementById('work-section');

    for (var i = 0; i < data.length; i++) {
        var workItem;
        if (i % 2 == 0) {
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
                    <div class="work-button"><a class="project-button" onclick="popUpProject(${data[i]});">See Project</a></div>
                </div>
            </div>
        </section>
            `
            workCard.innerHTML += workItem
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
                    <div class="work-button"><button class="project-button" onclick="popUpProject(${data[i]});">See Project</button></div>
                </div>
            </div>
        </section>
            `
            workCard.innerHTML += workItem

        }


    }

}

function popUpProject(popUpdata){
   var popUpItem = `<div class="popUp-view" id= "work-popUp">
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
           <p class="work-description">${popUpdata.description}</p>
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
</div>`

workPopUpCard.innerHTML += popUpItem;
}

function openPopUp(){
const popUpProject = document.getElementById('work-popUp');
popUpProject.style.visibility = visible;
}