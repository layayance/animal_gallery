import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchAnimalImage, clearHistory } from "../store/animalSlice";
import { useEffect } from "react";
import "./Dashboard.css";



const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { imageUrl, loading, error, history, animalType, timestamp } = 
    useSelector((state: RootState) => state.animal);

  useEffect(() => {
    if (!imageUrl) dispatch(fetchAnimalImage());
  }, []);

  return (
    <div className="dashboard">
      <main className="main-content">
        <section className="image-section">
          <div className="image-container">
            {loading ? (
              <div className="loading-wrapper">
                <div className="loading-spinner" />
                <p>À la recherche d'un nouvel ami...</p>
              </div>
            ) : error ? (
              <div className="error-container">
                <p className="error-message">{error}</p>
                <button 
                  className="retry-button"
                  onClick={() => dispatch(fetchAnimalImage())}
                >
                  🔄 Réessayer
                </button>
                <p className="error-help">
                  Si le problème persiste, essayez de rafraîchir la page
                </p>
              </div>
            ) : imageUrl && (
              <div className="image-wrapper">
                <img src={imageUrl} alt="Animal mignon" className="animal-image" />
                <div className="image-overlay">
                  <span className="animal-type">{animalType}</span>
                  <span className="timestamp">
                    {new Date(timestamp || "").toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>
          
          <div className="controls">
            <button 
              className="primary-button"
              onClick={() => dispatch(fetchAnimalImage())}
              disabled={loading}
            >
              {loading ? "🔄 Chargement..." : "🎲 Animal suivant"}
            </button>
          </div>
        </section>

        <aside className="sidebar">
          <div className="stats-card">
            <h3>Statistiques</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span>Total d'images</span>
                <strong>{history.length}</strong>
              </div>
              <div className="stat-item">
                <span>Dernier type</span>
                <strong>{animalType || "-"}</strong>
              </div>
            </div>
          </div>

          <div className="history-card">
            <div className="history-header">
              <h3>Historique</h3>
              <button 
                className="clear-button"
                onClick={() => dispatch(clearHistory())}
                disabled={!history.length}
              >
                🗑️ Effacer
              </button>
            </div>
            <div className="history-list">
              {history.map((item, index) => (
                <div key={index} className="history-item">
                  <img src={item.url} alt="Historique" />
                  <span>{item.type}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Dashboard;
