import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExpeditionDetail from "./pages/ExpeditionDetail";
import { buildWhatsAppLink } from "./lib/whatsapp";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expedicao/:slug" element={<ExpeditionDetail />} />
        </Routes>
      </main>
      <Footer />

      {/* conversão persistente no mobile — a direção é imersiva, mas o zap nunca some */}
      <div className="zap-bar">
        <a
          className="btn btn--zap"
          href={buildWhatsAppLink("Oi Pedro! Quero saber das próximas expedições 🌍")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com o Pedro
        </a>
      </div>
    </div>
  );
}

export default App;
