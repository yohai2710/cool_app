import React from 'react';
import { Settings } from 'lucide-react';
import { Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../Header.css';

const Header: React.FC = () => {

    const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Activity className="header-icon" onClick={() => navigate('/feed')} />
        </div>

        <div className="header-middle">
          <button className="header-button" onClick={() => navigate('/feed')}>Feed</button>
          <button className="header-button" onClick={() => navigate('/agents')}>Agents</button>
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
