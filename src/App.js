import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import {
  injectComponents,
  SidePanelFactory,
  PanelHeaderFactory,
} from "kepler.gl/components";
import CustomSidePanelFactory from "./newSidePanel";

const App = () => {
  const token =
    "pk.eyJ1IjoiZ3VydTEzMzciLCJhIjoiY2txYzd4bjYwMDFkNDJ3cGhxMGN1NTh1byJ9.jBBkvvOX7woXuH5MC55Wyw";
  const height = window.innerHeight;

  const newLogo = PanelHeaderFactory(null, null);
  newLogo.defaultProps.logoComponent = () => {
    return <div style={{color: "white"}}>:)</div>;
  };
  const myCustomHeaderFactory = () => newLogo;

  const KeplerGl = injectComponents([
    [SidePanelFactory, CustomSidePanelFactory],
    [PanelHeaderFactory, myCustomHeaderFactory],
  ]);
  return (
    <Provider store={store}>
      <div className="App">
        <KeplerGl
          id="foo"
          version={""}
          appName={""}
          mapboxApiAccessToken={token}
          height={height}
        />
      </div>
    </Provider>
  );
};

export default App;
