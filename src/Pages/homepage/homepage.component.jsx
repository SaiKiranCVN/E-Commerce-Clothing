import React from "react";
import "./homepage.styles.scss";
import "../../Components/directory/directory.component";
import Directory from "../../Components/directory/directory.component";

const HomePage = () => (
  <div className='homepage'>
    <Directory />
  </div>
);

export default HomePage;
