import Footer from "./Components/Footer";
import Topbar from "./Components/Topbar";
import ControlCard from "./Components/ControlCard";

function App() {
  const titleArray = ["banking", "logistic", "e-commerce", "computer"];
  return (
    <div>
      <Topbar appTitle='IARC Devboard' />
      {titleArray.map((titleElement) => (
        <ControlCard title={titleElement} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
