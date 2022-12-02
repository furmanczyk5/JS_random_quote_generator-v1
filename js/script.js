/******************************************
 Author: Tomasz Furmanczyk
project 1 -  Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/

let quotes = [
 
  {
  quote: "This Is Heavy!",
  source: "Marty Mcfly",
  citation: "Back to the Future 1",
  year: "1985",
  culture: "American Film"
  },
   {
  quote: "It's supposed to be hard. If it were easy, everyone would do it.",
  source: "Jimmy Dugan",
  citation: "A League of Their Own",
  year: "1993",
  culture: "American Film"
  },
  {
  quote: "1.21 Gigawatts!?!",
  source: "Doc Brown"
 
  },
  {
  quote: "1.21 Gigawatts!?!",
  source: "Doc Brown"
 
  },
  {
  quote: "1.21 Gigawatts!?!",
  source: "Doc Brown"
 
  },
   {
  quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
  source: "Rocky Balboa",
  citation: "Rocky",
  year: "1976",
  culture: "American Film"
  },
  {
  quote: "If my calculations are correct, when this baby hits 88 miles per hour, you're gonna see some serious shit!",
  source: "Doc Brown",
  citation: "Back to the Future 1",
  year: "1985",
  culture: "American Film"
  },
  {
  quote: "I guess you guys aren’t ready for that yet. But your kids are gonna love it.",
  source: "Marty Mcfly",
  citation: "Back to the Future 1",
  year: "1985",
  culture: "American Film"
  },
  {
  quote: "“Roads? Where we’re going, we don’t need roads.”",
  source: "Doc Brown",
  citation: "Back to the Future 2",
  year: "1989",
  culture: "American Film"
  },
 
  {
  quote: "It does not do to dwell on dreams and forget to live.",
  source: "Albus Dumbledore", 
  citation: "Harry Potter and the Sorcerer's Stone",
  year: "1997",
  culture: "UK Film"
  },
 
 
 

];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
   
   //declared variable for a random number
   const randomNumber = Math.floor(Math.random() * (quotes.length));
   // declared variable for a random quote
   const randomQuote = quotes[randomNumber];

   // function returns randomQuote value
  return randomQuote;
} 

/***
 * `printQuote` function
***/

function printQuote () {
    
    // declared quotes variable which calls getRandomQuote function
    var quotes = getRandomQuote();

    // declared a variable for the quote placeholder 
    var quoteContainer = document.getElementById("quote-box");

    // declared quoteString to build all elements for the load-quote action button on the index.html file
    var quoteString = `<p class="quote"> ${quotes.quote}</p><p class="source"> ${quotes.source}`;
        
        if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
        
        if (quotes.year) {quoteString += `<span class="year"> ${quotes.year} </span></p>`}

        if (quotes.culture) {quoteString += `<h2 class="culture"> ${quotes.culture} </h2></p>`}
        
        else {quoteString += '</p>'};
          quoteContainer.innerHTML = quoteString;

          //assigns and then calls the getRandomColor function the waits for the returned RGB value
          document.body.style.backgroundColor = getRandomColor ();
}

/*** 
 * Function that selects random RGB color values
 ****/

function getRandomColor () {
   
   // declares 3 variables for RGB and randomly selects a number which is assigned for each color individually
   const red = Math.floor(Math.random() * 256 );
   const green = Math.floor(Math.random() * 256 );  
   const blue = Math.floor(Math.random() * 256 );
   
   // declares and puts together the entire RGB color value
   const randomColor = `rgb(${red}, ${green}, ${blue})`;
  
  // returns the random RGB color value
  return randomColor;
}


/****
 Function that automatically refreshes a quote every minute
 ***/

window.setInterval(function(){printQuote ();}, 60000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);