#!/usr/bin/node

var request = require('request');
var cheerio = require('cheerio');

var args = process.argv.slice(2);

var startPage = args[0] ? args[0] : "Node.js";
var maxIterations = args[1] ? +args[1] : 5;
var iterations = 0;
var visitedPages = [];

console.log("--- AutoDistract - v0.1.0 ---");
console.log("  (1) Time to learn about "+startPage+"...");
browsePage(startPage);

function browsePage(page) {
  iterations++;
  visitedPages.push(page);
  
  if(iterations == maxIterations) {
    console.log("---\n");
    console.log("Not again... I was just reading about "+startPage
    +", and ended up on "+prettifyUrl(visitedPages[visitedPages.length-1])+" somehow!");
    console.log("---");
    console.log("\nAll in all, I learned all there is to know about:");
    console.log("  "+prettifyUrl(visitedPages.join(",\n  ")));
    console.log("---");
    console.log("\nI read through all "+iterations+" of these pages:");
    console.log("  "+"http://en.wikipedia.org/wiki/"+visitedPages.join(",\n  http://en.wikipedia.org/wiki/"));
    console.log("---");
    console.log("\n"+getRandomEndMessage());
    process.exit(0);
  }
  
  request("http://en.wikipedia.org/wiki/"+page, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var usablePages = parseLinks(body);
      var selectedPage = selectRandomPage(usablePages);
      console.log("  ("+(iterations+1)+") "+getRandomPageMessage(selectedPage));
      browsePage(selectedPage);
    } else {
      console.log(error);
      return;
    }
  });
}

var unusablePages = [
  'Wikipedia:',
  'Special:',
  'Template:',
  'Template_talk:',
  'Talk:',
  'Category:',
  'Portal:',
  'Help:',
  'Talk:',
  'File:',
  'Main_Page',
];

function parseLinks(pageHTML) {
  var $ = cheerio.load(pageHTML);
  var allLinks = $('a');
  
  var usablePages = [];
  for(var i = 0; i < allLinks.length; i++) {
    var url = allLinks[i].attribs.href;
    if(url && url.indexOf("/wiki/") == 0) {
      var url = url.split("/wiki/")[1];
      if(urlIsUsable(url, usablePages)) {
        usablePages.push(url);
      }
    }
  }
  return usablePages;
}

function urlIsUsable(url, usedPages) {
  for(var i = 0; i < unusablePages.length; i++) {
    if(url.indexOf(unusablePages[i]) != -1 || usedPages.indexOf(url) != -1 || visitedPages.indexOf(url) != -1) {
      return false;
    }
  }
  return true;
}

function selectRandomPage(pageList) {
  return pageList[Math.floor(Math.random() * (pageList.length - 0) + 0)];
}

var pageMessages = [
  "Ooh, {page} looks interesting!",
  "I wonder what there is to know about {page}?",
  "I love clicking random links...",
  "Huh, who or what is {page}?",
  "Oops, didn't mean to click on {page}. Ah well...",
  "Ah, {page}, one of my favorite topics.",
  "I'll get back to work right after I read about {page}.",
  "I've always wanted to know what {page} is all about!",
  "My brain hurts. I'll stop once I finish reading about {page}.",
  "KNOWLEDGE IS POWER! ... Even if that knowledge *is* about {page}.",
];

var endMessages = [
  'Where does time go...',
  'I really need to focus...',
  'How do I get distracted so easily?',
  'Why is it so hard to stay on track?',
  'I hope I don\'t get fired...',
  'Ooh, a butterfly!',
  'So... Much... Information...',
  'My head is spinning...',
  'Now to do something useful...',
  'I wonder what else there is to know?',
];

function getRandomPageMessage(page) {
  return pageMessages[Math.floor(Math.random() * (pageMessages.length - 0) + 0)].replace("{page}", prettifyUrl(page));
}

function getRandomEndMessage() {
  return endMessages[Math.floor(Math.random() * (endMessages.length - 0) + 0)];
}

function prettifyUrl(url) {
  return url.split("_").join(" ").replace(/%../g, " ");
}
