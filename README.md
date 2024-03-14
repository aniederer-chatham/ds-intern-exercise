# Design Systems Intern Exercise

If you're reading this, congrats on making it to this round of interviews! We
hope this exercise will be a quick and fun way to test your skills, using the
same technology you'll be using on the job.

## System Dependencies

You will need node, npm, and a browser to complete this exercise. I used
Chromium/Chrome, but Firefox, Edge, and Safari should work as well.

## Getting Started

You can install the dependencies of the project, start your dev server, and open
the app in your browser with the following commands:

```
$ git clone https://github.com/aniederer-chatham/ds-intern-exercise
$ cd ds-intern-exercise
$ npm ci
$ npm run start
$ chromium http://localhost:3333
```

## Exercise Description & Requirements

You are finishing up an implementation of a match-2 game component. Another
engineer has already implemented the following requirements:

- The game starts with an even number of cards, all blue-side-up
- Clicking a card when there are no other selected card flips it white-side-up and "selects" the card
- "Selected" cards must have a light blue border

To finish the game, you must implement the following requirements:

- Clicking an unselected and unmatched card when there is one other selected card also flips it white-side-up and "selects" it, and then does one of two things:
  - If both "selected" cards have the same picture and text, they stay white-side-up, and are considered "matched"
  - If both "selected" cards do not have the same picture or text, after 500ms, they are "deselected" and flipped blue-side-up
- Once all cards are "matched", the game component emits an event containing how many pairs of cards the user had to select over the course of the game. (don't worry about resetting the game)
- "Matched" cards must must have a light green border

You will want to view the files in `/src/components/` and edit the files in
`/src/components/cf-match-game/` to craft your solution. Make sure your code is
well-factored, and that your solution is as accessible as possible. Good luck!

## Submitting Your Solution

Once you're happy with your solution, create a commit with your changes to the
code. Then, zip or tar up the folder containing this respository, and email the
zip/tar file to your recruiter.

```
$ git commit -am "Solution"
$ rm -rf node_modules www .stencil # (rm builds/logs/deps so it isn't too big to email)
$ cd ..
$ zip -r solution-$YOUR_NAME.zip ds-intern-exercise # or...
$ tar -cJf solution-$YOUR_NAME.tar.xz ds-intern-exercise
```

## Time Requirements & Deadline

There is no time limit, but we expect this to take around an hour to complete
for somebody familiar with React or Angular but not Stencil. Please submit the
exercise at least one business day before your interview, so we have time to
look over it in advance.

## Validated Configurations

This exercise has been fully tested using OpenSUSE Tumbleweed (WSL) and the
following dependencies:

```
$ node --version
v20.5.0
$ npm --version
9.8.0
$ chromium --version
Chromium 120.0.6099.224 stable
```

and Windows 10 with the following dependencies:

```
$ node --version
v20.5.1
$ npm --version
9.8.0
Chrome Version:
Version 121.0.6167.161 (Official Build) (64-bit)
```
