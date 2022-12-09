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
    title: "Lorem ipsum dolor sit amet consectetur",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime incidunt officiis veritatis delectus ex autem cupiditate hic iure assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem.",
    date: new Date("7/24/2021").toDateString(),
  },
  {
    id: 2,
    username: "Kingdom",
    image: user_2,
    title: "Lorem ipsum dolor sit amet consectetur",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime incidunt officiis veritatis delectus ex autem cupiditate hic iure assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem.",
    date: new Date("7/25/2021").toDateString(),
  },
  {
    id: 3,
    username: "Currency",
    image: user_3,
    title: "Lorem ipsum dolor sit amet consectetur",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime incidunt officiis veritatis delectus ex autem cupiditate hic iure assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem.",
    date: new Date("7/26/2021").toDateString(),
  },
  {
    id: 4,
    username: "Shibaby",
    image: user_4,
    title: "Lorem ipsum dolor sit amet consectetur",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime incidunt officiis veritatis delectus ex autem cupiditate hic iure assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem.",
    date: new Date("7/27/2021").toDateString(),
  },
  {
    id: 5,
    username: "Queenie",
    image: user_5,
    title: "Lorem ipsum dolor sit amet consectetur",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime incidunt officiis veritatis delectus ex autem cupiditate hic iure assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem.",
    date: new Date("7/28/2021").toDateString(),
  },
  {
    id: 6,
    username: "Angel",
    image: user_6,
    title: "Lorem ipsum dolor sit amet consectetur",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime incidunt officiis veritatis delectus ex autem cupiditate hic iure assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem.",
    date: new Date("7/29/2021").toDateString(),
  },
  {
    id: 7,
    username: "Nelly",
    image: user_7,
    title: "Lorem ipsum dolor sit amet consectetur",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime incidunt officiis veritatis delectus ex autem cupiditate hic iure assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rem.",
    date: new Date("7/30/2021").toDateString(),
  },
];

export default data;
