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
import award1 from "../assets/awards/award1.png";
import award2 from "../assets/awards/award2.png";
import award3 from "../assets/awards/award3.png";
import award4 from "../assets/awards/award4.png";
import team1 from "../assets/team/team1.png";
import team2 from "../assets/team/team2.png";
import team3 from "../assets/team/team3.png";
import team4 from "../assets/team/team4.png";
import team5 from "../assets/team/team5.png";
import team6 from "../assets/team/team6.png";
import team7 from "../assets/team/team7.png";
import team8 from "../assets/team/team8.png";
import top_news1 from "../assets/media/top_news1.png";
import top_news2 from "../assets/media/top_news2.png";
import top_news3 from "../assets/media/top_news3.png";
import top_news4 from "../assets/media/top_news4.png";
import top_news5 from "../assets/media/top_news5.png";
import top_news6 from "../assets/media/top_news6.png";

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
        "Guateamla is the most populous country in Central America, and its people are proud of their shared Mayan heritage. The country is diverse, with over 24 languages spoken. Unfortunately, food insecurity and malnutrition are widespread in Guateamla, and 59% of the population live below the national poverty line. Water For People started working in Guateamla in 1997. In 2007 we began to focus our efforts only in the department (or state) of El Quiché, which was selected due to its high level of poverty and high need for water and sanitation services.",
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
  awards: [
    {
      id: 1,
      year: "2021",
      title: "Best NGO Award",
      location: "Berlin, Germany",
      img: award1,
    },
    {
      id: 2,
      year: "2018",
      title: "Global Award",
      location: "New York, USA",
      img: award2,
    },
    {
      id: 3,
      year: "2014",
      title: "Foresto Award",
      location: "New Delhi, India",
      img: award3,
    },
    {
      id: 4,
      year: "2010",
      title: "Earth Saver Award",
      location: "Vienna, Austria",
      img: award4,
    },
  ],
  team: [
    {
      id: 1,
      name: "Leonard John Davies",
      job: "Cofounder, CEO",
      img: team1,
      facebook: "https://www.facebook.com/yahyo.rashid",
      linkedin: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/otabek_sodikov",
    },
    {
      id: 2,
      name: "Francis Weber",
      job: "Vice Chairman",
      img: team2,
      facebook: "https://www.facebook.com/yahyo.rashid",
      linkedin: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/otabek_sodikov",
    },
    {
      id: 3,
      name: "Kyla Obrien",
      job: "Head of Authority",
      img: team3,
      facebook: "https://www.facebook.com/yahyo.rashid",
      linkedin: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/otabek_sodikov",
    },
    {
      id: 4,
      name: "Adrian Dixon",
      job: "Support Executive",
      img: team4,
      facebook: "https://www.facebook.com/yahyo.rashid",
      linkedin: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/otabek_sodikov",
    },
    {
      id: 5,
      name: "Freddy Busby",
      job: "Project Manager",
      img: team5,
      facebook: "https://www.facebook.com/yahyo.rashid",
      linkedin: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/otabek_sodikov",
    },
    {
      id: 6,
      name: "Dale Banks",
      job: "Accountatnt, Finance",
      img: team6,
      facebook: "https://www.facebook.com/yahyo.rashid",
      linkedin: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/otabek_sodikov",
    },
    {
      id: 7,
      name: "Miriam Middleton",
      job: "Cofounder, CEO",
      img: team7,
      facebook: "https://www.facebook.com/yahyo.rashid",
      linkedin: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/otabek_sodikov",
    },
    {
      id: 8,
      name: "Ellen Walton",
      job: "Vice Chairman",
      img: team8,
      facebook: "https://www.facebook.com/yahyo.rashid",
      linkedin: "https://www.linkedin.com/feed/",
      twitter: "https://twitter.com/otabek_sodikov",
    },
  ],
  top_news: [
    {
      id: 1,
      title: "Don’t destroy greenery and don’t spoil scenery.",
      descr:
        "Don’t Destroy Greenery and Don’t Spoil Scenery. Save Mother Earth. Here is the amazing Earth Day notebook it's a great Earth Day present for your girl, son, mom or father. Use it as a record for your adventures, as your personal Earth Day diary or as an Earth Day present for friends and family. Keep track of your adventures, experiences and memories with this Earth Day record and make them last forever.",
      img: top_news1,
    },
    {
      id: 2,
      title: "Why saving wildlife is extremely important",
      descr:
        "Over the past five decades, our field work has helped bring several iconic animals back from the brink of extinction – including white and greater one-horned rhinos, certain populations of African elephants, mountain gorillas, giant pandas and tigers.",
      img: top_news2,
    },
    {
      id: 3,
      title: "Caring for the present is caring for the future",
      descr:
        "This paper identifies a new source that explains environmental behaviour: the presence of future tense marking in language. We predict that languages that grammatically mark the future affect speakers' intertemporal preferences and thereby reduce their willingness to address environmental problems. We first show that speakers of languages with future tense marking are less likely to adopt environmentally responsible behaviours and to support policies to prevent environmental damage. We then document that this effect holds across countries: future tense marking is an important determinant of climate change policies and global environmental cooperation. The results suggest that there may be deep and surprising obstacles for attempts to address climate change.",
      img: top_news3,
    },
    {
      id: 4,
      title: " Is climate change happening faster than expected?",
      descr:
        "NEW YORK (January 11, 2023) – As the world contends with a dual biodiversity and climate crises, a new assessment of land-based biodiversity in North America has identified areas considered to be climate refugia—areas likely to provide viable habitat for their current species—under several warming scenarios. The study's findings show that areas most critical for sustaining species lack current protections or conservation management. ",
      img: top_news4,
    },
    {
      id: 5,
      title: "Our goal is to make water available for everyone",
      descr:
        "Access to safe water, sanitation and hygiene is the most basic human need for health and well-being. Billions of people will lack access to these basic services in 2030 unless progress quadruples. Demand for water is rising owing to rapid population growth, urbanization and increasing water needs from agriculture, industry, and energy sectors.",
      img: top_news5,
    },
    {
      id: 6,
      title: "Ensure access to water and sanitation for all",
      descr:
        "The UN explains: 'Clean water is a basic human need, and one that should be easily accessible to all. There is sufficient fresh water on the planet to achieve this. However, due to poor infrastructure, investment and planning, every year millions of people — most of them children — die from diseases associated with inadequate water supply, sanitation and hygiene.'",
      img: top_news6,
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
