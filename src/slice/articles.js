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
};

export const articlesSlice = createSlice({
  name: "articlesSlice",
  initialState,
  reducers: {},
});

export const {} = articlesSlice.actions;
export default articlesSlice.reducer;
