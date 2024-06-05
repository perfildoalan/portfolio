import { useRef, useState } from "react";
import "./Contato.css";
import imgSucesso from "../public/enviado.gif";
import imgErro from "../public/dino.gif";

function Sucesso() {
  return (
    <>
      <img src={imgSucesso} alt="Email enviado com sucesso!" />
    </>
  );
}

function Erro() {
  return (
    <div className="erro">
      <img src={imgErro} />
      <div>
        Ocorreu um <span>erro</span>.
      </div>
    </div>
  );
}

export default function Contato() {
  const refNome = useRef("");
  const refEmail = useRef("");
  const refMensagem = useRef("");

  const [statusEnvio, setStatusEnvio] = useState("nao-enviado");

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: new Headers({
        Authorization: "Basic UUwxOC1XSkIyLU1MOU0tT08yNjpteWtsYW4=",
      }),
      body: new URLSearchParams({
        Field1: refNome.current.value,
        Field5: refEmail.current.value,
        Field7: refMensagem.current.value,
      }),
    };

    console.log(requestOptions);

    // setStatusEnvio("sucesso");

    const apiUrl =
      "https://perfildoalan.wufoo.com/api/v3/forms/z1gwpfr70xcvlg5/entries.json";

    try {
      const response = await fetch(apiUrl, requestOptions);
      const resultado = await response?.json();

      console.log(resultado);

      if (resultado?.Success == 1) {
        setStatusEnvio("sucesso");
      } else {
        setStatusEnvio("erro");
      }
    } catch {
      setStatusEnvio("erro");
    }
  };

  const Form = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome: </label>
            <input id="nome" ref={refNome} />
          </div>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input id="email" ref={refEmail} />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem: </label>
            <textarea
              id="mensagem"
              ref={refMensagem}
              rows="6"
              cols="35"
            ></textarea>
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
        <div className="email">
          Se preferir: <strong>enviarparaalan@gmail.com</strong>
        </div>
      </>
    );
  };

  const handleStatusEnvio = () => {
    if (statusEnvio == "sucesso") {
      return <Sucesso />;
    }
    if (statusEnvio == "erro") {
      return <Erro />;
    }
    return <Form />;
  };

  return <div className="pagina contato">{handleStatusEnvio()}</div>;
}
