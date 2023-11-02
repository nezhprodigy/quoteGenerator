const quoteText = document.querySelector(".quote");
authorName = document.querySelector(".author");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
shareBtn = document.querySelector(".twitter");
heartBtn = document.querySelector(".heart");

let myQuotes = []

function newQuote(){
    let quote = myQuotes[Math.floor(Math.random()* myQuotes.length)]
    if(!quote.author){
        authorName.textContent = 'Unknown'
    }else{
        authorName.textContent = quote.author
    }
    quoteText.textContent = quote.text
}

async function getQuotes(){
    const apiUrl = 'http://localhost:3000/quotes'
    try{
        const response = await fetch(apiUrl)
        myQuotes = await response.json();
        newQuote()
    }   catch(error){

    }
}
soundBtn.addEventListener("click", () =>{
    let utterance = new SpeechSynthesisUtterance( `${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener("click", () =>{
    navigator.clipboard.writeText(quoteText.innerText);
})

shareBtn.addEventListener("click", () =>{
    let twitter = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(twitter, "_blank");
})

heartBtn.addEventListener("click", like =>{
    if (heartBtn.style.color == `red`) {
        heartBtn.style.color = 'aqua'
    } 
    else {
        heartBtn.style.color = 'red'
    }
})

quoteBtn.addEventListener("click", newQuote);