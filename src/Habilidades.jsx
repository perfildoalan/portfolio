import "./Habilidades.css";
import logoHtml from "../public/logo-html.png";
import logoCss from "../public/logo-css.png";
import logoJs from "../public/logo-js.png";
import logoReact from "../public/logo-react.png";

export default function Habilidades() {
  return (
    <div className="pagina">
      <ul className="habilidades">
        <li>
          <span className="logo">
            <img src={logoHtml} height="40" />
          </span>
          <span className="descricao">HTML</span>
        </li>
        <li>
          <span className="logo">
            <img src={logoCss} height="40" />
          </span>
          <span className="descricao">CSS</span>
        </li>
        <li>
          <span className="logo">
            <img src={logoJs} height="40" />
          </span>
          <span className="descricao">JavaScript</span>
        </li>
        <li>
          <span className="logo">
            <img src={logoReact} height="40" />
          </span>
          <span className="descricao">ReactS</span>
        </li>
      </ul>
    </div>
  );
}
