var BasicCard = require("./basicCard.js");
var ClozeCard = function(text, cloze) {
  this.fullText = text;
  this.cloze = cloze;
  this.partial = this.fullText.replace(this.cloze, "...");
};

ClozeCard.prototype.check = function() {
  if (this.fullText.search(this.cloze) > -1) {
    console.log("cloze: " + firstPresidentCloze.cloze);
    console.log("partial: " + firstPresidentCloze.partial);
    console.log("fullText: " + firstPresidentCloze.fullText);
  } else {
    console.log("Sorry \"" + this.cloze + "\"" + " doesn't appear in the sentence.");
  }
}

module.exports = ClozeCard;
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log("front: " + firstPresident.front);
console.log("back: " + firstPresident.back);

var firstPresidentCloze = new ClozeCard(
  "George Washington was the first president of the United States.", "Washington");
var secondPresidentCloze = new ClozeCard(
  "George Washington was the first president of the United States.", "test");
  
firstPresidentCloze.check();
console.log("::::::::::::::::::::::::::::")
secondPresidentCloze.check();
