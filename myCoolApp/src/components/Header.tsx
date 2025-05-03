import React from 'react';
import { Settings } from 'lucide-react';
import '../Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img src="/logo.svg" alt="Logo" className="header-logo" />
        </div>

        <div className="header-middle">
          <button className="header-button">Feed</button>
          <button className="header-button">Agents</button>
        </div>

        <div className="header-right">
          <button className="header-icon-button">
            <Settings className="header-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
