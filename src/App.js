import Header from "./component/Header";
import CardsBody from "./component/CardsBody";

import "./App.css";

import { WheatherProvider } from "./context/WheatherContext";

function App() {
  return (
    <WheatherProvider>
      <div className="App">
        <Header />
        <CardsBody />
      </div>
    </WheatherProvider>
  );
}

export default App;
