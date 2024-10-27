"use client"
import Image from "next/image";
import { Hero } from "./components/hero";
import Fotter  from "./components/fotter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./pages/home";
export default function Home() {
  return (
    <div className="container w-full md:w-1/2">
      <Router>
        <Hero />
        <Routes>
          <Route path="/" element={<Page />} />
        </Routes>
        <Fotter />
      </Router>
   </div>
  );
}
