// You shouldn't have to touch this to solve the exercise, but you're welcome to
// reference it.

export type CardTemplate = {name: string, image: string};
export type Card = CardTemplate & {id: string};

export default [
  {
    "name": "Adam, Derailer of Meetings",
    "image": "assets/card-adam.webp"
  },
  {
    "name": "Brett, Beloved Leader",
    "image": "assets/card-brett.webp"
  },
  {
    "name": "Jaki, Agricultural Consultant",
    "image": "assets/card-jaki.webp"
  },
  {
    "name": "Megan, Jeep Wrangler",
    "image": "assets/card-megan.webp"
  },
  {
    "name": "Megan, Elder",
    "image": "assets/card-other-megan.webp"
  },
  {
    "name": "James, Team Progenitor",
    "image": "assets/card-james.webp"
  },
  {
    "name": "Sam, UЖ Designer",
    "image": "assets/card-sam.webp"
  },
  {
    "name": "Chatham, One Purpose to Bind Them",
    "image": "assets/card-cf-logo.webp"
  },
] as CardTemplate[];
