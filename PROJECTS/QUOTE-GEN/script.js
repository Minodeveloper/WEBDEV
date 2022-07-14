let apiQuotes = [];
let currentTweet = {
    tweet:document.querySelector('#quote').textContent,
    author:document.querySelector('#author').textContent
};
function tweetQuote()
{
    const twitterURL = `https://twitter.com/intent/tweet?text=${currentTweet.tweet} - ${currentTweet.author} %23quoteGenerator %23projectWORK`;
    window.open(twitterURL, '_blank');
}

function newQuote(){
    
    const quoteText = document.querySelector('#quote');
    const authorText = document.querySelector('#author');
    let randomINDEX = Math.floor(Math.random() * 1600);
    quoteText.textContent = apiQuotes[randomINDEX].text;
    currentTweet.tweet = apiQuotes[randomINDEX].text;

    if (!apiQuotes[randomINDEX].author) {
        currentTweet.author = 'UNKNOWN';
        authorText.textContent = 'UNKNOWN'
    } else {
        currentTweet.author = apiQuotes[randomINDEX].author;
        authorText.textContent = apiQuotes[randomINDEX].author;
    }
   
 }


async function getQuotes(){
    
    const apiURL = "https://type.fit/api/quotes";

    try{

        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        

    }catch(error){
        alert(error);
    }
}


getQuotes();
const tweetBtton = document.querySelector('#twitter');
const quoteButton = document.querySelector('#new-quote');
quoteButton.addEventListener('click', newQuote);
tweetBtton.addEventListener('click', tweetQuote);

// quote container

const quoteContainer = document.querySelector('#quote-container');
const loader = document.querySelector('#loader');

// function loading() {
//     loader.hidden = false;
//     quoteContainer.hidden = true;
//   }
  
//   // Remove Loading Spinner
//   function complete() {
//     quoteContainer.hidden = false;
//     loader.hidden = true;
//   }