import "./App.css";
import Header from "./components/Header";
import useProductData from "./hooks/useProductsData";

function App() {
  const { data } = useProductData();
  console.log(data);
  return (
    <section className="w-full h-screen">
      <Header />
    </section>
  );
}

export default App;
