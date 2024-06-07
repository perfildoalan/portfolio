import "./Projetos.css";

export default function Projetos() {
  return (
    <div className="projetos">
      <h2>Meus Projetos</h2>
      <ul>
        <li className="oculto">preenchimento</li>
        <li>
          <a href="https://perfildoalan.github.io/dashboardmodular/" target="_black">
            Dashboard Modular
          </a>
        </li>
        <li>
          <a href="https://perfildoalan.github.io/gameboy/" target="_black">
            Gameboy
          </a>
        </li>
        <li>
          <a href="https://perfildoalan.github.io/imc/" target="_blank">
            Cálculo IMC
          </a>
        </li>
        <li>
          <a href="https://perfildoalan.github.io/caraoucoroa/" target="_blank">
            Cara ou coroa
          </a>
        </li>
        <li className="oculto">preenchimento</li>
      </ul>
    </div>
  );
}
