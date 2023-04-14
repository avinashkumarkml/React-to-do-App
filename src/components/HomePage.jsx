import React from "react";
import SideContainer from "./SideContainer/SideContainer";
import MainContainer from "./MainContainer/MainContainer";
import Header from "./Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideContainer />
        <MainContainer />
      </div>
    </div>
  );
};

export default HomePage;
