import { createSlice } from "@reduxjs/toolkit";
import logo1 from "../assets/supporters/logo1.png";
import logo2 from "../assets/supporters/logo2.png";
import logo3 from "../assets/supporters/logo3.png";
import logo4 from "../assets/supporters/logo4.png";
import logo5 from "../assets/supporters/logo5.png";
import logo6 from "../assets/supporters/logo6.png";

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
};

export const articlesSlice = createSlice({
  name: "articlesSlice",
  initialState,
  reducers: {},
});

export const {} = articlesSlice.actions;
export default articlesSlice.reducer;
