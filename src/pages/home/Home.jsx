import React from "react";
// import '../../App.css'
import cliente1 from "../../assets/images/cliente01.png";
import cliente2 from "../../assets/images/cliente02.png";
import cliente3 from "../../assets/images/cliente03.png";
import Clientes from "../../components/clientes/Clientes";
import aparelho from "../../assets/images/aparelho.png";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
import {Link} from 'react-router-dom';
import Servicos from "../../components/servicos/Servicos";
import Melhorias from "../../components/melhorias/Melhorias";
function Home() {
  return (
    <div>
      <Menu />
      <div className="topHome">
        <h1 className="title orange">
          OS MELHORES <span className="bold">APARELHOS DENTÁRIOS</span>!
        </h1>
        <p className="texto">
          Confira abaixo todas as especialidades odontológicas que temos á sua
          disposição!
        </p>
        <Servicos />
      </div>
      <div className="midHome">
        <h2 className="title ">
          POR QUE USAR <span className="bold">APARELHO</span>?
        </h2>
        <div className="imgHome">
          <img className="aparelho" src={aparelho} alt="" />
        </div>
      </div>
      <div className="melhorias">
        <Melhorias
          htitle="Dentes alinhados"
          texto="Dentes desalinhados causam problemas nos dentes podem afetar a digestão dos alimentos e a respiração."
        />
        <Melhorias
          htitle="Melhora a dicção e a higiene dentária"
          texto="Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla."
        />
        <Melhorias
          htitle="Corrige espaço entre os dentes"
          texto="Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos."
        />
      </div>

      <div className="clientes">
        <h2 className="title">
          VEJA O QUE NOSSOS <span className="bold">CLIENTES</span> ESTÃO
          FALANDO...
        </h2>
        <div className="dentistaCliente">
          <Clientes
            image={cliente1}
            nome={"Alberto"}
            exp={"Usei aparelho por 2 anos e agora posso sorrir novamente"}
          />
          <Clientes
            image={cliente2}
            nome={"Eliana"}
            exp={
              "Meus dentes eram espaçados e depois de 1 ano estão no lugar certo."
            }
          />
          <Clientes
            image={cliente3}
            nome={"Carla"}
            exp={"Comecei a usar ano passado e já estou notando diferença."}
          />
        </div>
      </div>

      <div className="botao">
        <button><Link className="color" to="/contato">Entre em contato</Link></button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
