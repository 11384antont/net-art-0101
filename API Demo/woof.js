generateMarxistPupper();

async function generateMarxistPupper() {
    const pupperData = await retrieveData(); //get
    generatePupperHTML(pupperData); //feed가 function 안에 들어간 요소인 pupperData
}

//1. pull data from these apis
//random dog api
//local marxist quotes api
async function retrieveData() {
    const DOG_IMG_URL = "https://random.dog/woof.json";
    const dogResponse = await fetch(DOG_IMG_URL);
    const dogData = await dogResponse.json();
    const dogImage = dogData.url;
    console.log(dogData);

    const QUOTE_URL = "./marxist-quotes.json";
    const quoteResponse = await fetch(QUOTE_URL);
    const quoteData = await quoteResponse.json();
    const dogQuote = getRandomQuotes(quoteData);

    const data = {
        image: dogImage,
        quoteText: dogQuote.text,
        quoteSource: dogQuote.source
    }
    return data;
}

//2. put a dog element in our html with data we're pulling
function generatePupperHTML(pupperData) {
    const dogHTML = `
    <div class="dog">
        <div class="dog-quote">
            <p>${pupperData.quoteText}</p>
        </div>
        <div class="dog-img">
            <img src=${pupperData.image}
            alt="woof!">
        </div>
    </div>
`;

    document.querySelector("main").innerHTML += dogHTML;
}

function getRandomQuotes(quotes) {
    return quotes[rng(0, quotes.length)];
}

function rng(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}