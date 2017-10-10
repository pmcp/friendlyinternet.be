// With options



let startBaffle = function(name, letter) {
  let theClass = "." + name;

  
  let theLetter = baffle(theClass, {
    characters: [
      letter,
            letter,
            letter,
      '\uD83D\uDE00',
      '\uD83D\uDE09',
      '\uD83D\uDE0D',
      '\uD83D\uDE05'
    ]
});

theLetter.start()
    .set({ speed: 100 })
    .text(text => letter);
    // .reveal(1000, 2000);


};


var letters = {
  "one": "F",
  "two": "R",
  "three": "I",
    "four": "E",
  "five": "N",
  "six": "D",
    "seven": "L",
  "eight": "Y",
  "nine": "I",
    "ten": "N",
  "eleven": "T",
  "twelve": "E",
    "thirteen": "R",
    "fourteen": "N",
    "fifteen": "E",
    "sixteen": "T",
};

for (var prop in letters) {
  if (letters.hasOwnProperty(prop)) { 

    startBaffle(prop, letters[prop])
    

  }
}


