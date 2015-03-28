#autodistract

A quick and goofy project to simulate the average Wikipedia reading session. You start with something you actually want to learn about, then start clicking links and reading for a few hours until suddenly you realize you wasted half the day on random topics.

**Goal:**
*"transfer the job of being distracted from the user to the program, so the user can do something productive with the time they would've otherwise spent reading random pages on Wikipedia"*

**Notes:**
HTML special characters do not output properly at the current time (they display as spaces), and I will likely not fix that. This project is a bit of a one-off.

This does a pretty good job skipping files and special pages, but may get some false-positives or end up on a page which doesn't link anywhere.

*Additionally, do not use too many iterations (say, more than 10-15), each request is roughly the same as opening the page in your browser. Try not to flood Wikipedia with useless requests.*


**Disclaimer:**
*I cannot be held responsible for any unsavory content uncovered by this program. It is entirely random. Use with discression.*

##Using:
####Installation:
* Make sure Node.js and npm are installed.
* Download this repository, cd to it, and run `npm install`

####Usage:
Run `node autodistract.js` (or `npm start`) with the name of the page you want to visit (eg, "Node.js", "GitHub", or "Main_Page") and a number of iterations, (eg. 5 or 10).
Running the script with no arguments defaults to "Node.js" and 5.

**Example (with output):**
```
$ node autodistract.js Node.js 5

--- AutoDistract - v0.1.0 ---
  (1) Time to learn about Node.js...
  (2) Huh, who or what is Python (programming language)?
  (3) I love clicking random links...
  (4) Oops, didn't mean to click on Operator (programming). Ah well...
  (5) KNOWLEDGE IS POWER! ... Even if that knowledge *is* about C (programming language).
---

Not again... I was just reading about Node.js, and ended up on C (programming language) somehow!
---

All in all, I learned all there is to know about:
  Node.js,
  Python (programming language),
  ALGOL 68,
  Operator (programming),
  C (programming language)
---

I read through all 5 of these pages:
  http://en.wikipedia.org/wiki/Node.js,
  http://en.wikipedia.org/wiki/Python_(programming_language),
  http://en.wikipedia.org/wiki/ALGOL_68,
  http://en.wikipedia.org/wiki/Operator_(programming),
  http://en.wikipedia.org/wiki/C_(programming_language)
---

My head is spinning...

```

##License:
```
The MIT License (MIT)

Copyright (c) 2015 Tribex

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
