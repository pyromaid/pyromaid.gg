import logo from './logo.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <p>
        <img src={logo} className="App-logo" alt="logo" />
        </p>
	  <h2>Cleaning services that survive tyranny</h2><br />
	  Pyromaid LLC<br />
	  3571 Far West Blvd #3222<br />
	  Austin, TX 78731<br /><br />
	  <a href="tel:+1-512-790-0030">tel:+1-512-790-0030</a>
	  <a href="fax:+1-512-580-3278">fax:+1-512-580-3278</a>
	  <br />
	  <a href="mailto:inquiries@pyromaid.gg">inquiries@pyromaid.gg</a>


      </header>
    </div>
  );
}

export default App;
