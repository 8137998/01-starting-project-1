import Header from "./components/Header.jsx";
import CoreConceptMain from "./components/CoreConceptMain.jsx";
import Examples from "./components/Examples.jsx";

//formatted the file
function App() {
  
  return (
    // This is the new alternative to fragment element to reduce unnessesary div's in the code
    <>
      <Header />
      <main>
        <CoreConceptMain />
        <Examples />
      </main>
    </>
  );
}

export default App;
