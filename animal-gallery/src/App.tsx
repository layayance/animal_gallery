import Dashboard from "./components/dashboard";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <nav className="app-nav">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-icon">🐾</span>
            <h1>Galerie Animaux</h1>
          </div>
          <div className="nav-links">
            <span className="nav-item active">Galerie</span>
          </div>
        </div>
      </nav>

      <main className="app-main">
        <Dashboard />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>Créé par Yaya Fane </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

