import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Header from './components/Header.tsx'
import Feed from './components/Feed.tsx'
import Agents from './components/Agents.tsx'
import Settings from './components/Settings.tsx'


const FeedPage = () => <Feed />;
const AgentsPage = () => <Agents />;
const SettingsPage = () => <Settings />;

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
