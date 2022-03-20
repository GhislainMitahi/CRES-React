import React from "react";
import { Link } from "react-router-dom";
import team1 from "../Images/team1.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Equipe2 = () => {
  return (
    <div className="equipe2">
      <div className="container pt-5 pb-5">
        <div>
          <p>
            Le conseil d'administration est elu chaque cinq and par lAssemblee
            Generale
          </p>
        </div>
        <div className="row">
          <OwlCarousel className='owl-theme' 
          items={3}
          autoplay
          nav
          dots
          loop>
          <div className="team2 item">
            <img src={team1} />
            <p className="title5">Pascal Byumanine</p>
            <p className="details5">Coordinateur</p>
          </div>
          <div className="team2 item">
            <img src={team1} />
            <p className="title5">Pascal Byumanine</p>
            <p className="details5">Coordinateur</p>
          </div>
          <div className="team2 item">
            <img src={team1} />
            <p className="title5">Pascal Byumanine</p>
            <p className="details5">Coordinateur</p>
          </div>
          <div className="team2 item">
            <img src={team1} />
            <p className="title5">Pascal Byumanine</p>
            <p className="details5">Coordinateur</p>
          </div>
          <div className="team2 item">
            <img src={team1} />
            <p className="title5">Pascal Byumanine</p>
            <p className="details5">Coordinateur</p>
          </div>
          <div className="team2 item">
            <img src={team1} />
            <p className="title5">Pascal Byumanine</p>
            <p className="details5">Coordinateur</p>
          </div>
          <div className="team2 item">
            <img src={team1} />
            <p className="title5">Pascal Byumanine</p>
            <p className="details5">Coordinateur</p>
          </div>
          <div className="team2 item">
            <img src={team1} />
            <p className="title5">Pascal Byumanine</p>
            <p className="details5">Coordinateur</p>
          </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};
export default Equipe2;
