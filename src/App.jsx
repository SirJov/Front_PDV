import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header";
import BodyConfig from "./Components/BodyConfig/BodyConfig";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <BodyConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
