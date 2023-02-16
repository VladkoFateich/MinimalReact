import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/footerContent/Footer";
import { Header } from "./components/headerContent/Header";
// import { Main } from "./components/mainContent/Main";
import { Сriterion } from "./components/mainContent/Сriterion";
import { Project } from "./components/mainContent/Project";
import { Team } from "./components/mainContent/Team";
import { Review } from "./components/mainContent/Review";

import "./styles.css";

export default function App(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Header
        logoData={props.minimalData.logoData}
        navigationData={props.minimalData.navigationData}
        banerData={props.minimalData.banerData}
        open={open}
        setOpen={setOpen}
      />
      <Routes>
        <Route
          path="/process"
          element={
            <Сriterion criterionData={props.minimalData.criterionData} />
          }
        />
        <Route
          path="/projects"
          element={<Project projectsData={props.minimalData.projectsData} />}
        />
        <Route
          path="/team"
          element={<Team teamData={props.minimalData.teamData} />}
        />
        <Route
          path="/contact"
          element={<Review reviewsData={props.minimalData.reviewsData} />}
        />
      </Routes>
      <Footer
        contactsData={props.minimalData.contactsData}
        socialData={props.minimalData.socialData}
      />
    </div>
  );
}
