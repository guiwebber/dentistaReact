import React from "react";
import "./menu.css";
import imgDente from "../../assets/images/dente.png";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menuTopo">
      <div className="logo">
        <img className="imgLogo" src={imgDente} alt="" />
        <h2 className="titleLogo">Dentes Saudáveis</h2>
      </div>
      <nav>
        <Link className="linkNav" to="/">Home</Link>
        <Link className="linkNav" to="/contato">Contato</Link>
      </nav>
    </div>
  );
}

export default Menu;
