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
        <div className="about-us-card">
            <h4>Sobre Nosotros</h4>
            <p>Roble es un proyecto que surgio de una proposito hacia mi vida, en el mundo se que hay gente que necesita un aliento de vida a su alma y que mejor que conectar a la gente para dejar saber que nadie esta solo, siempre estaras acompañado.</p>
        </div>
        
      </div>
    );
  }

export default HomePage;