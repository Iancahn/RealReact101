import Logo from './img/ReactLogo.png'

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="nav">
          <img src={Logo} alt="Base React Logo" id="logo" />
        </div>
        <div className="content">
          <h1>Testing the css</h1>
        </div>
        <div className="list">
          <ul>
            <li>One Item</li>
            <li>One Item</li>
            <li>One Item</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
