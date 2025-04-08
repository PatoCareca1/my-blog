// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import DevPosts from "./pages/DevPosts";
import FitnessPosts from "./pages/FitnessPosts";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/devposts" element={<DevPosts />} />
          <Route path="/fitnessposts" element={<FitnessPosts />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
