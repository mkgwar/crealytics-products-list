import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ResetSection from "./components/ResetSection";
import { GlobalContextWrapper } from "./hooks/useGlobalContext";

function App() {
  return (
    <section className="w-full h-screen flex flex-col">
      <GlobalContextWrapper>
        <Header />
        <section className="h-full flex md:flex-row flex-col overflow-y-auto">
          <ResetSection />
          <MainSection />
        </section>
      </GlobalContextWrapper>
    </section>
  );
}

export default App;
