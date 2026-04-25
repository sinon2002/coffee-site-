import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import TopMenu from "./components/TopMenu/TopMenu";
import Footer from "./components/Footer/Footer";
import Menu from "./pages/Menu";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cards />
              <TopMenu />
            </>
          }
        />

        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
      <Cart />
    </Router>
  );
}

export default App;
