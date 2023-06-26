import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header";
import BodyConfig from "./Components/BodyConfig/BodyConfig";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <BodyConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
