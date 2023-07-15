import Navbar from "./components/Navbar";
import Journal from "./components/Journal";
import Data from "./data";

function App() {
  const journalComponent = Data.map((d) => {
    return <Journal key={d.key} {...d} />;
  });

  return (
    <>
      {/* <Navbar /> */}
      {journalComponent}
    </>
  );
}

export default App;
