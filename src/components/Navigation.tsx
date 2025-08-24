import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', symbol: 'Br', number: '35', name: 'Breaking', color: '#00ff41' },
    { path: '/bios', symbol: 'Ba', number: '56', name: 'Bios', color: '#ffd700' },
    { path: '/trivia', symbol: 'Tr', number: '43', name: 'Trivia', color: '#ff8c00' },
    { path: '/memes', symbol: 'Me', number: '25', name: 'Memes', color: '#00ff41' },
    { path: '/quiz', symbol: 'Qu', number: '87', name: 'Quiz', color: '#ffd700' },
    { path: '/gifs', symbol: 'Gi', number: '31', name: 'GIFs', color: '#ff8c00' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-green-500 border-opacity-30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="periodic-element chemistry-font">
              <span className="number">35</span>
              <span className="symbol">Br</span>
            </div>
            <span className="text-xl font-bold chemistry-font neon-green">METH LAB</span>
          </Link>

          <div className="flex space-x-2 md:space-x-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  className={`periodic-element chemistry-font ${
                    location.pathname === item.path ? 'bg-opacity-30' : ''
                  }`}
                  style={{
                    borderColor: item.color,
                    backgroundColor: location.pathname === item.path 
                      ? `${item.color}30` 
                      : `${item.color}10`
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="number" style={{ color: '#ffd700' }}>{item.number}</span>
                  <span className="symbol" style={{ color: item.color }}>{item.symbol}</span>
                  <span className="text-xs mt-1 hidden md:block">{item.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;