import { createSlice } from "@reduxjs/toolkit";
import logo1 from "../assets/supporters/logo1.png";
import logo2 from "../assets/supporters/logo2.png";
import logo3 from "../assets/supporters/logo3.png";
import logo4 from "../assets/supporters/logo4.png";
import logo5 from "../assets/supporters/logo5.png";
import logo6 from "../assets/supporters/logo6.png";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import news1 from "../assets/news/news1.png";
import news2 from "../assets/news/news2.png";
import news3 from "../assets/news/news3.png";
import news4 from "../assets/news/news4.png";

const initialState = {
  supporters: [
    {
      id: 1,
      img: logo1,
    },
    {
      id: 2,
      img: logo2,
    },
    {
      id: 3,
      img: logo3,
    },
    {
      id: 4,
      img: logo4,
    },
    {
      id: 5,
      img: logo5,
    },
    {
      id: 6,
      img: logo6,
    },
  ],
  projects: [
    {
      id: 1,
      title: "Mission 40K: Tree plantation",
      short_desc: "We managed to plant 40K trees in a month",
      bg_img: project1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ab inventore cupiditate repellendus tenetur deserunt eum, voluptate beatae praesentium suscipit cum molestias fugiat qui saepe minima facilis! Minima nemo laboriosam ullam, ipsa fugiat aspernatur obcaecati natus sit illum incidunt assumenda corrupti veritatis tempore consectetur numquam blanditiis accusantium quos eius et!",
    },
    {
      id: 2,
      title: "Weekly cleanliness program in city",
      short_desc: "Nearly 50 cities have been cleared just in a week",
      bg_img: project2,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ab inventore cupiditate repellendus tenetur deserunt eum, voluptate beatae praesentium suscipit cum molestias fugiat qui saepe minima facilis! Minima nemo laboriosam ullam, ipsa fugiat aspernatur obcaecati natus sit illum incidunt assumenda corrupti veritatis tempore consectetur numquam blanditiis accusantium quos eius et!",
    },
    {
      id: 3,
      title: "Wildlife safety program 2023",
      short_desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      bg_img: project3,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ab inventore cupiditate repellendus tenetur deserunt eum, voluptate beatae praesentium suscipit cum molestias fugiat qui saepe minima facilis! Minima nemo laboriosam ullam, ipsa fugiat aspernatur obcaecati natus sit illum incidunt assumenda corrupti veritatis tempore consectetur numquam blanditiis accusantium quos eius et!",
    },
  ],
  news: [
    {
      id: 1,
      title: "Don’t destroy greenery and don’t spoil scenery",
      descr:
        " Deciduous trees are trees that lose their leaves in the wintertime. When planted on the east, west and south sides of the house, their full canopies of leaves can shade your home from the hot summer sun and cut air conditioning costs by 20%-40%. During the winter, the bare branches of these trees allow sunlight to filter through to your home so you can take advantage of some natural solar heating as well.When planting trees, be sure to consider the ultimate spread of the tree so they won't be too close to your house. Large trees should not be planted closer than 15 feet from a house. Smaller deciduous trees may be situated closer, but no less than 10 feet from a house.",
      bg_img: news1,
    },
    {
      id: 2,
      title: "Is climate change happening faster than expected?",
      descr:
        "Millions of people are already suffering from the catastrophic effects of extreme weather disasters exacerbated by climate change – from prolonged drought in sub-Saharan Africa to devastating tropical storms sweeping across Southeast Asia, the Caribbean and the Pacific. Scorching temperatures have caused deadly heatwaves in Europe and wildfires in South Korea, Algeria and Croatia. There has been severe flooding in Pakistan, while a prolonged and intense drought in Madagascar has left 1 million people with very limited access to adequate food",
      bg_img: news2,
    },
    {
      id: 3,
      title: "Top 10 facts about wind farms you didn't know",
      descr:
        "As turbine blades are spun by air flow, the turbines convert the potential energy in the air into the electricity we use to power our homes and businesses. Wind energy is one of the most popular forms of alternative energy and accounts for most new energy plants built in the last year. With their increasing popularity and the rise of offshore wind farming, wind energy is going to play a key component in the switch from fossil fuels to renewable energy. To help you understand the benefits of wind energy, here are 21 things you probably didn’t know:",
      bg_img: news3,
    },
    {
      id: 4,
      title: "Our goal is to make water available for everyone",
      descr:
        "Guatemala is the most populous country in Central America, and its people are proud of their shared Mayan heritage. The country is diverse, with over 24 languages spoken. Unfortunately, food insecurity and malnutrition are widespread in Guatemala, and 59% of the population live below the national poverty line. Water For People started working in Guatemala in 1997. In 2007 we began to focus our efforts only in the department (or state) of El Quiché, which was selected due to its high level of poverty and high need for water and sanitation services.",
      bg_img: news4,
    },
    {
      id: 5,
      title: "Our goal is to fight against deforestation",
      descr:
        "Forest degradation is a related term that indicates when a forest is no longer functioning as a healthy ecosystem: A degraded forest can no longer sustain populations the way it used to. For instance, it might not offer enough quality habitat or food to animals. In other words, when a forest is degraded it still exists, but it can no longer function well. It becomes a shell of its former self. There are four different types of forests worldwide: tropical forests, temperate forests, and boreal forests and plantations. Deforestation is happening around the world with all forest types but occurs mostly in tropical areas. The World Wildlife Fund (WWF) estimates that around 31% of the world’s land is covered by forests. But this forest coverage is under severe threat due to factors including agricultural expansion, infrastructure, and logging. “In 2019, the tropics lost close to 30 soccer fields’ worth of trees every single minute,” according to a WWF report.",
      bg_img: news2,
    },
  ],
  events: [
    {
      id: 1,
      date: "23",
      month: "SEP",
      title: "Say no to plastic usage and save the planet",
      descr:
        "Plastic pollution is a problem that the whole world is facing together. We are finding microplastic pieces in our waterways, in the food we eat, and in the water we drink. Collectively, we need to take action and say no to plastic. Plastic waste does not degrade at a sustainable rate. The more we continue to make, the more waste continues to build up. When plastic waste is not disposed of properly, it ends up in the environment, which is causing devastating impacts. Each single-use plastic item we use today adds to the mass problem of tomorrow (and beyond). But just how bad is it? And how can we reduce the issue? This article explains why we should and how we can say no to plastic, with great alternative options.",
    },
    {
      id: 2,
      date: "25",
      month: "SEP",
      title: "Weekly cleaning program",
      descr:
        "Let's face it: Very few people actually like cleaning. Sure, we like a clean house, but who wouldn't happily shun scrubbing a toilet to hang out with friends or disappear into a good book? Thankfully there are ways to make cleaning less of a chore. By tackling household jobs on a regular schedule, you can keep your home clean without spending all your time with a sponge. This cleaning checklist includes all of the essential chores to tackle, according to the pros. Follow the house cleaning schedule loosely or to a T—either way, you’ll be pleased with the progress and you'll enjoy a cleaner home every day.",
    },
  ],
};

export const articlesSlice = createSlice({
  name: "articlesSlice",
  initialState,
  reducers: {},
});

export const {} = articlesSlice.actions;
export default articlesSlice.reducer;
