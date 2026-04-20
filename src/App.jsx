import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import TopMenu from "./components/TopMenu/TopMenu";
import Footer from "./components/Footer/Footer";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
       <TopMenu />
       <Footer />
      <Route path="/menu" element={<Menu />} />
    </>
  );
}

export default App;
