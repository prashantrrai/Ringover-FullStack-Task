import './App.css';

function App() {
  return (
    <>
      <h1>UEFA Champions League Analysis and Visualisation</h1>
      <div className="showheatmap">
        <form action="get" id='playername'>
          <label htmlFor="name">Search items from Database</label>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
    </>
  );
}

export default App;
