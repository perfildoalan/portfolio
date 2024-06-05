import { useState } from "react";
import Bio from "./Bio";
import Habilidades from "./Habilidades";
import "./Pagina.css";
import Contato from "./Contato";

export default function Pagina() {
  const [paginaAtiva, setPaginaAtiva] = useState("home");

  const handleClick = (event, pagina) => {
    event.preventDefault();
    setPaginaAtiva(pagina);
  };

  const getPagina = () => {
    if (paginaAtiva == "bio") return <Bio />;
    if (paginaAtiva == "habilidades") return <Habilidades />;
    if (paginaAtiva == "contato") return <Contato />;
    return <></>;
  };

  const getClasses = (pagina) => {
    if (paginaAtiva == pagina) {
      return "ativa";
    }

    return "";
  };

  return (
    <>
      <nav className="pagina">
        <a
          href="/"
          onClick={(e) => handleClick(e, "home")}
          className={getClasses("home")}
        >
          Home
        </a>
        |
        <a
          href=""
          onClick={(e) => handleClick(e, "bio")}
          className={getClasses("bio")}
        >
          Bio
        </a>
        |
        <a
          href=""
          onClick={(e) => handleClick(e, "habilidades")}
          className={getClasses("habilidades")}
        >
          Habilidades
        </a>
        |
        <a
          href=""
          onClick={(e) => handleClick(e, "contato")}
          className={getClasses("contato")}
        >
          Contato
        </a>
      </nav>

      {getPagina()}
    </>
  );
}
