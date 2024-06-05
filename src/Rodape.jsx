import "./Rodape.css";
import facebook from "../public/facebook.png";
import github from "../public/github.png";
import instagram from "../public/instagram.png";
import whatsapp from "../public/whatsapp.png";

export default function Rodape() {
  return (
    <footer className="rodape">
      <h1>Portfólio</h1>
      <div id="nome">Alan Vicente</div>
      <div id="sociais">
        <ul>
          <li>
            <a href="https://www.facebook.com/perfildoalan" target="_blank">
              <img src={facebook} width="30" height="30" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/perfildoalan/" target="_blank">
              <img src={instagram} width="30" height="30" />
            </a>
          </li>
          <li>
            <a href="https://github.com/perfildoalan" target="_blank">
              <img src={github} width="30" height="30" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5584996658875"
              target="_blank"
            >
              <img src={whatsapp} width="30" height="30" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
