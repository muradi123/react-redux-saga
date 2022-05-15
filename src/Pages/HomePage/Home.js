import React from "react";
import { useSelector } from "react-redux";
import GetFilms from "./Getfilms";
const Home = () => {
  const state = useSelector((state) => state.auth.login);
  if (state === "murad") {
    console.log("murad");
  }
  return (
    <div>
      <GetFilms />
    </div>
  );
};

export default Home;
