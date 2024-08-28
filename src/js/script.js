
let adviceId = document.querySelector('h2');
let adviceText = document.querySelector('p');


let boton = document.querySelector('.boton-dado');

boton.addEventListener('click', createAdviceList);
createAdviceList()

async function createAdviceList(){
    const url = "https://api.adviceslip.com/advice"

    try {
        const response = await fetch(url);
        const json = await response.json();

        adviceId.innerText =`Advice # ${json.slip.id}` 
        adviceText.innerText = `"${json.slip.advice}"`

    } catch (error) {
        console.log("Error");
    };
};

