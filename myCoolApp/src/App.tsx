import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Header from './components/Header'


const FeedPage: React.FC = () => <div className="content">Feed page</div>;
const AgentsPage: React.FC = () => <div className="content">Agents page</div>;
const SettingsPage: React.FC = () => <div className="content">Settings page</div>;

const App: React.FC = () => {

  return (
    <Router>
      <Header />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Navigate to="/feed" />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
