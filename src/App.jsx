import Header from './components/Header.jsx'
import TabButton from './components/TabButton.jsx'

function App() {
  function handleClick() {
    console.log(`Button clicked: from APP`);
  }
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
     
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
        <TabButton onSelect={handleClick}>Component</TabButton>
        <TabButton onSelect={handleClick}>JSX</TabButton>
        <TabButton onSelect={handleClick}>Props</TabButton>
        <TabButton onSelect={handleClick}>State</TabButton>
        </menu>
      </section>
      </main>
    </div>
    
  );
}

export default App;
