import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Landing Page</h3>
            </div>
            <div className="item-menu">
              <a href="#" className="">
                Login
              </a>
            </div>
          </div>

          <div>
            <h2>Entre em contato!</h2>
            <form className="form">
              <div className="items-form">
                <input type="text" className="form-control"></input>
                <input type="text" className="form-control"></input>
                <input type="text" className="form-control"></input>
                <input type="submit"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
