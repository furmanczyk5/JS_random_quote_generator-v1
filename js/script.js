/******************************************
 Author: Tomasz Furmanczyk
project 1 -  Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/

var quotes = [
 
  {
  quote: "This Is Heavy!",
  source: "Marty Mcfly",
  citation: "Back to the Future 1",
  year: "1985"
  },
   {
  quote: "It's supposed to be hard. If it were easy, everyone would do it.",
  source: "Jimmy Dugan",
  citation: "A League of Their Own",
  year: "1993"
  },
  {
  quote: "1.21 Gigawatts!?!",
  source: "Doc Brown",
  citation: "Back to the Future 1",
  year: "1985"
  },
   {
  quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
  source: "Rocky Balboa",
  citation: "Rocky",
  year: "1976"
  },
  {
  quote: "If my calculations are correct, when this baby hits 88 miles per hour, you're gonna see some serious shit!",
  source: "Doc Brown",
  citation: "Back to the Future 1",
  year: "1985"
  },
  {
  quote: "I guess you guys aren’t ready for that yet. But your kids are gonna love it.",
  source: "Marty Mcfly",
  citation: "Back to the Future 1",
  year: "1985"
  },
  {
  quote: "“Roads? Where we’re going, we don’t need roads.”",
  source: "Doc Brown",
  citation: "Back to the Future 2",
  year: "1989"
  },
 
  {
  quote: "It does not do to dwell on dreams and forget to live.",
  source: "Albus Dumbledore", 
  citation: "Harry Potter and the Sorcerer's Stone",
  year: "1997"
  },
 
 
 

];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
   
   var randomNumber = Math.floor(Math.random() * (quotes.length));
   
   var randomQuote = quotes[randomNumber];

  return randomQuote;
} 

/***
 * `printQuote` function
***/

function printQuote () {
    
    var quotes = getRandomQuote();
    var quoteContainer = document.getElementById("quote-box");
    var quoteString = `<p class="quote"> ${quotes.quote}</p><p class="source"> ${quotes.source}`;
        
        if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
        
        if (quotes.year) {quoteString += `<span class="year"> ${quotes.year} </span></p>`}
        
        else {quoteString += '</p>'};
          quoteContainer.innerHTML = quoteString;

          //assigns random color value to document background color 
          document.body.style.backgroundColor = getRandomColor ();
}

/*** 
 * Function that selects random RGB color values
 ****/

function getRandomColor () {
   
   var green = Math.floor(Math.random() * 256 );
   var red = Math.floor(Math.random() * 256 );
   var blue = Math.floor(Math.random() * 256 );
   
   var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  
  return randomColor;
}


/****
 Function that automatically refreshes a quote every 1 minute
 ***/

window.setInterval(function(){printQuote ();}, 60000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);