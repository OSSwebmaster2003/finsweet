import { Route, Routes } from "react-router";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import "./App.css";
import {
  About,
  Activity,
  Contact,
  Donation,
  FullBlog,
  FullEvent,
  FullProject,
  Home,
  Media,
} from "./pages";
import PlayVideo from "./components/PlayVideo/PlayVideo";

function App() {
  return (
    <div className="app">
      <Header />
      <PlayVideo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/project-read-more/:id" element={<FullProject />} />
        <Route path="/blogs-read-more/:id" element={<FullBlog />} />
        <Route path="/events-read-more/:id" element={<FullEvent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
