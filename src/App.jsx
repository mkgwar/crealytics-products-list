import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { GlobalContextWrapper } from "./hooks/useGlobalContext";

function App() {
  return (
    <section className="w-full h-screen flex flex-col">
      <GlobalContextWrapper>
        <Header />
        <MainSection />
      </GlobalContextWrapper>
    </section>
  );
}

export default App;
