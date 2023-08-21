import React from "react";
import Dentistas from "../../components/dentistas/Dentistas";
import dentista1 from "../../assets/images/medico01.png";
import dentista2 from "../../assets/images/medico02.png";
import dentista3 from "../../assets/images/medico03.png";
import Menu from "../../components/menu/Menu";
import Footer from '../../components/footer/Footer';
function Contato() {
  return (
    <div>
      <Menu />
      <div className="topCtt">
        <h1 className="title">
          HORÁRIOS DE <span className="bold"> ATENDIMENTO</span>
        </h1>
        <p>Agende uma consulta pelo telefone: (21) 3699-9963</p>
      </div>
      <div className="dentistaCliente">
        <Dentistas
          image={dentista1}
          nome={"Dr. Hélio"}
          horario={"Segundas, quartas e sextas das 9:00 às 16:00"}
        />
        <Dentistas
          image={dentista2}
          nome={"Dr. Carlos"}
          horario={"Terças e quintas das 13:00 às 18:00"}
        />
        <Dentistas
          image={dentista3}
          nome={"Dra. Suzana"}
          horario={"Terças, quintas e sábados das 8:00 às 12:00"}
        />
      </div>

      <div className="local">
        <h1 className="title">
          ONDE ESTAMOS <span className="bold"> LOCALIZADOS</span>?
        </h1>
        <p>
          Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP:
          1234-1234
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29385.675969309108!2d-43.384802570898614!3d-22.979322563917293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1611596986401!5m2!1spt-BR!2sbr" width="100%" height="350" ></iframe>
    
      </div>
      <Footer/>
    </div>
  );
}

export default Contato;
