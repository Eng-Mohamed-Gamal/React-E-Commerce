import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/Header/Header";
import Cart from "./Components/Cart/Cart";
import All from "./Components/All/All";
import Footer from "./common/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<All></All>}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
