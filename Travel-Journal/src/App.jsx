import Navbar from "./components/Navbar";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import Data from "./data";

function App() {
  const journalComponent = Data.map((d) => {
    return (
      <>
        <Journal key={d.key} {...d} />
        {
          Data.indexOf(d) + 1 !== Data.length && (
            <hr />
          ) /*Insert horizontal line between data enteries */
        }
      </>
    );
  });

  return (
    <>
      <Navbar />
      <div className="main">{journalComponent}</div>
      <Footer />
    </>
  );
}

export default App;
