import { DataProps } from "./App.types";

import user_1 from "./assets/images/user-1.jpg";
import user_2 from "./assets/images/user-2.jpg";
import user_3 from "./assets/images/user-3.jpg";
import user_4 from "./assets/images/user-4.jpg";
import user_5 from "./assets/images/user-5.jpg";
import user_6 from "./assets/images/user-6.jpg";
import user_7 from "./assets/images/user-7.jpg";

const data: Array<DataProps> = [
  {
    id: 1,
    username: "Ecady",
    image: user_1,
    title: "If you're going through hell, keep going.",
    comment: `Freedom is what you do with what's been done to you. Some people are born on
    third base and go through life thinking they hit a triple`,
    date: new Date("7/24/2021").toDateString(),
  },
  {
    id: 2,
    username: "Kingdom",
    image: user_2,
    title: "He who talks more is sooner exhausted",
    comment: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of 
    control and at times hard to handle. But if you can't handle me at my worst, then you 
    sure as hell don't deserve me at my best.`,
    date: new Date("7/25/2021").toDateString(),
  },
  {
    id: 3,
    username: "Currency",
    image: user_3,
    title: "No man can succeed in a line of endeavor which he does not like.",
    comment: `You teach best what you most need to learn. I was thrown out of college for 
    cheating on the metaphysics exam; I looked into the soul of the boy sitting next to me.`,
    date: new Date("7/26/2021").toDateString(),
  },
  {
    id: 4,
    username: "Shibaby",
    image: user_4,
    title: "Mistakes are always forgivable, if one has the courage to admit them.",
    comment: `It is the province of knowledge to speak, and it is the privilege of wisdom to listen. 
    A man sees in the world what he carries in his heart.`,
    date: new Date("7/27/2021").toDateString(),
  },
  {
    id: 5,
    username: "Queenie",
    image: user_5,
    title: "When you doubt your power, you give power to doubt.",
    comment: `If you're trying to create a company, it's like baking a cake. You have to have
     all the ingredients in the right proportion.`,
    date: new Date("7/28/2021").toDateString(),
  },
  {
    id: 6,
    username: "Angel",
    image: user_6,
    title: "Never interrupt someone doing what you said couldn't be done",
    comment: `You might well remember that nothing can bring you success but yourself. Imagination 
     is not a talent of some men but is the health of every man.`,
    date: new Date("7/29/2021").toDateString(),
  },
  {
    id: 7,
    username: "Nelly",
    image: user_7,
    title: "It always seems impossible until it's done.",
    comment: `Never put off till tomorrow what you can do today. Good, better, best. Never let it rest. 
    'Til your good is better and your better is best.`,
    date: new Date("7/30/2021").toDateString(),
  },
];

export default data;
