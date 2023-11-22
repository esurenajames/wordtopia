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
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p11>${data[0].meanings[0].partOfSpeech}&nbsp&nbsp ${data[0].phonetic}</p>
                  
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