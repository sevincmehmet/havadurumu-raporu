import Header from "./component/Header";
import CardsBody from "./component/CardsBody";

import "./App.css";

import { APIContextProvider } from "./context/apiContext";

function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <Header />
        <CardsBody />
      </div>
    </APIContextProvider>
  );
}

export default App;
