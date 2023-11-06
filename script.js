const quoteText = document.querySelector(".quote");
authorName = document.querySelector(".author");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
shareBtn = document.querySelector(".twitter");
heartBtn = document.querySelector(".heart");

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
        quoteText.innerText = result.content
        authorName.innerText = result.author
        quoteBtn.innerText = "New quote"
        quoteBtn.classList.remove("loading")
    });
}

soundBtn.addEventListener("click", () =>{
    let utterance = new SpeechSynthesisUtterance( `${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () =>{
    navigator.clipboard.writeText(quoteText.innerText);
    alert("Copied!")
});

shareBtn.addEventListener("click", () =>{
    let twitter = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(twitter, "_blank");
});

heartBtn.addEventListener("click", () => {
   if (heartBtn.style.color == "red") {
    heartBtn.style.color = "purple";
   }else{
    heartBtn.style.color = "red"
   }
});

quoteBtn.addEventListener("click", randomQuote);
