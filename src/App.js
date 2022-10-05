import { Header } from "./components/Header";
import "./App.css";
import "antd/dist/antd.min.css";
import Routes from "./routes";

function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;
