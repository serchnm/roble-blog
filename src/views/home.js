import React from "react";
import imgAboutUs from '../assets/images/aboutusimage.jpg';
import '../assets/scss/homePage.scss';

function HomePage() {
    return (
      <div>
        <div className="homePage">
          <p>No hay otro Nombre</p>
        </div>
        <div className="homePage-body">
          <img width="600" src={imgAboutUs} alt="AboutUsImage"/>

        </div>
      </div>
    );
  }

export default HomePage;