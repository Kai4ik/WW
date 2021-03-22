import "./App.css";
import { WW } from "./components/ww";
import { Route } from "react-router-dom";

function App() {
  return <Route exact path="/" render={() => <WW />} />;
}

export default App;
