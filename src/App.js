import { Header } from "./components/Header";
import { Home } from "./components/Home";
import "./App.css";
import "antd/dist/antd.min.css";

function App() {
  return (
    <div style={{ backgroundColor: "#2f3640" }}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
