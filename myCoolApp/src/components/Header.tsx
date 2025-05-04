import { Settings } from 'lucide-react';
import { Activity } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Activity className="header-icon" onClick={() => navigate('/feed')} />
        </div>

        <div className="header-middle">
          <button className={`header-button ${isActive('/feed') ? 'active' : ''}`} onClick={() => navigate('/feed')}>Feed</button>
          <button className={`header-button ${isActive('/agents') ? 'active' : ''}`} onClick={() => navigate('/agents')}>Agents</button>
        </div>

        <div className="header-right">
          <button className="header-icon-button">
            <Settings className="header-icon" onClick={() => navigate('/settings')}/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
