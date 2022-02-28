import AppBar from "./modules/AppBar";
import "./App.css";
import List from "./modules/List";
import Crear from "./modules/Form";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={AppBar} />
      <Route exact path="/" component={List} />
      <Route exact path="/crear" component={Crear} />
    </div>
  );
}

export default App;
