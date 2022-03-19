import React from "react";
import { Link } from "react-router-dom";

const CresObject = () => {
  return (
    <div className="CresObject">
      <div className="container CresObject">
        <div className="row">
          <div className="col-4">
            <h3>MISSION</h3>
            <p>
              Que les jeunes scientifiques soient des principaux acteurs du
              chan-gement voulu.
            </p>
          </div>
          <div className="col-4">
            <h3>VISION</h3>
            <p>
              Developper la sous-region du Kivu par application des methodes
              sci-entifiques dans la recherche de solutions aux problemes de la
              population
            </p>
          </div>
        </div>
        <div>
          <h3>OBJECTIFS</h3>
          <ol>
            <li>
              {" "}
              Offrir un cadre proprice de recherche technique et scientifique
              pour trouver des solutions adaptees aux problemes de notre
              société;
            </li>
            <li>
              Assurer un accompagnement juridique et technique aux membres
              chercheurs du centre;
            </li>
            <li>
              {" "}
              Creer des techniques de developpement qui valorisent l'humain et
              l'environnement;
            </li>
            <li>
              S'assurer que les resultats de nos recherches seront benefiques a
              la societe en facilitant l'obtention du financement pour leurs
              executions.
            </li>
          </ol>
        </div>
        <div>
          <h3>VALUERS</h3>
          <div className="row">
            <div className="col-3">
              <h4>Valeur</h4>
              <p>
                Developper la sous-region du Kivu par application des methodes
                sci-entifiques dans la recherche de solutions aux problemes de
                la population
              </p>
            </div>
            <div className="col-3">
              <h4>Valeur</h4>
              <p>
                Developper la sous-region du Kivu par application des methodes
                sci-entifiques dans la recherche de solutions aux problemes de
                la population
              </p>
            </div>
            <div className="col-3">
              <h4>Valeur</h4>
              <p>
                Developper la sous-region du Kivu par application des methodes
                sci-entifiques dans la recherche de solutions aux problemes de
                la population
              </p>
            </div>
            <div className="col-3">
              <h4>Valeur</h4>
              <p>
                Developper la sous-region du Kivu par application des methodes
                sci-entifiques dans la recherche de solutions aux problemes de
                la population
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CresObject;
