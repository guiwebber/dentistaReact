import React from "react";
import dente from "../../assets/images/dente.png";
function Serviços() {
  return (
    <div className="box4">
      <div className="boxL">
        <div className="box">
          <img src={dente} alt="" />
          <p className="bold">Pré avaliação</p>
        </div>
        <div className="box">
          <img src={dente} alt="" />
          <p className="bold">Raio-x digital</p>
        </div>
      </div>
      <div className="boxR">
        <div className="box">
          <img src={dente} alt="" />
          <p className="bold">Aparelhos dentários</p>
        </div>
        <div className="box">
          <img src={dente} alt="" />
          <p className="bold">Clareamento dental</p>
        </div>
      </div>
    </div>
  );
}

export default Serviços;
