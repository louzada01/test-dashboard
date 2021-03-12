import "./App.css";
import Logo from "./assets/logo.png";

import OverviewIcon from "./Icons/OverviewIcon.svg";
import LogoutIcon from "./Icons/LogoutIcon.svg";

function App() {
  return (
    <div className="App">
      <section className="Sidebar">
        <div className="LogoDiv">
          <img src={Logo} alt="Logo da imagem da empresa" />
          <hr />
        </div>
        <div className="OptionsDiv">
          <a onClick={() => console.log("Clicou")} className="OptionsButton">
            <img src={OverviewIcon} />
            <span>Overview</span>
          </a>
          <a onClick={() => console.log("Clicou")} className="OptionsButton">
            <img src={OverviewIcon} />
            <span>Cloud</span>
          </a>
          <a onClick={() => console.log("Clicou")} className="OptionsButton">
            <img src={OverviewIcon} />
            <span>Sketch</span>
          </a>
          <a onClick={() => console.log("Clicou")} className="OptionsButton">
            <img src={OverviewIcon} />
            <span>Experiments</span>
          </a>
          <a onClick={() => console.log("Clicou")} className="OptionsButton">
            <img src={OverviewIcon} />
            <span>Security</span>
          </a>
          <a onClick={() => console.log("Clicou")} className="OptionsButton">
            <img src={OverviewIcon} />
            <span>Ownership</span>
          </a>
          <a onClick={() => console.log("Clicou")} className="OptionsButton">
            <img src={OverviewIcon} />
            <span>A/B Test</span>
          </a>
          <a onClick={() => console.log("Clicou")} className="OptionsButton">
            <img src={OverviewIcon} />
            <span>Colors</span>
          </a>
        </div>
        <div className="LogOutDiv">
          <a
            onClick={() => alert("Você foi deslogado com sucesso.")}
            className="OptionsButton"
          >
            <img src={LogoutIcon} />
            <span>Logout</span>
          </a>
        </div>
      </section>
      <section className="Content">
        <h3>Logout</h3>
      </section>
    </div>
  );
}

export default App;
