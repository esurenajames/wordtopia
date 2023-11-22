const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h4>${inpWord}</h4>
                    
                </div>
                <div class="details">
                <p11>${data[0].meanings[0].partOfSpeech}&nbsp&nbsp ${data[0].phonetic}
                <button onclick="playSound()">
                    <i class="fas fa-volume-up"></i>
                </button>
            </p11>
            
                  
                </div>
                <p9 class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}     
                  
                </p>
                <p9 class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                    
                </p>
            </p>`;


                
            sound.setAttribute("src", `https://d1qx7pbj0dvboc.cloudfront.net/${inpWord}.mp3`);
        })
        .catch(() => {
            
            result.innerHTML = `<h3 class="error">Please Search A Word.</h3>`;
        });
});
function playSound() {
    sound.play();
}

let navbar = document.querySelector('.header .navbar');
let subMenu = document.querySelector('.header .navbar ul li ul');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

function adjustMenu() {
    if (window.innerWidth <= 778) {
        subMenu.style.display = "block";
    } else {
        subMenu.style.display = "";
    }
}
// Call adjustMenu on page load
document.addEventListener('DOMContentLoaded', () => {
    adjustMenu();
});

// Call adjustMenu on window resize
window.addEventListener('resize', () => {
    adjustMenu();
});


let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});

document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}