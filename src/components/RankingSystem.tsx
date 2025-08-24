import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RankingSystem = () => {
  const [userRank, setUserRank] = useState('High School Chemistry Student');
  const [points, setPoints] = useState(0);
  const [showLevelUp, setShowLevelUp] = useState(false);

  const ranks = [
    { name: 'High School Chemistry Student', min: 0, color: '#888' },
    { name: 'Los Pollos Hermanos Cook', min: 100, color: '#ffd700' },
    { name: 'RV Cook', min: 250, color: '#ff8c00' },
    { name: 'Lab Assistant', min: 500, color: '#00ff41' },
    { name: 'Methylamine Specialist', min: 750, color: '#32cd32' },
    { name: 'Empire Builder', min: 1000, color: '#ff6b35' },
    { name: 'Heisenberg', min: 1500, color: '#ff0000' },
  ];

  const getCurrentRank = (points: number) => {
    for (let i = ranks.length - 1; i >= 0; i--) {
      if (points >= ranks[i].min) {
        return ranks[i];
      }
    }
    return ranks[0];
  };

  const addPoints = (amount: number) => {
    const newPoints = points + amount;
    const oldRank = getCurrentRank(points);
    const newRank = getCurrentRank(newPoints);
    
    setPoints(newPoints);
    
    if (oldRank.name !== newRank.name) {
      setUserRank(newRank.name);
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 3000);
    }
    
    localStorage.setItem('bb-points', newPoints.toString());
    localStorage.setItem('bb-rank', newRank.name);
  };

  useEffect(() => {
    const savedPoints = localStorage.getItem('bb-points');
    const savedRank = localStorage.getItem('bb-rank');
    
    if (savedPoints) {
      const pts = parseInt(savedPoints);
      setPoints(pts);
      setUserRank(getCurrentRank(pts).name);
    }
  }, []);

  // Expose addPoints to global scope for other components to use
  useEffect(() => {
    (window as any).addBBPoints = addPoints;
  }, [points]);

  const currentRank = getCurrentRank(points);
  const nextRank = ranks.find(r => r.min > points);
  const progress = nextRank 
    ? ((points - currentRank.min) / (nextRank.min - currentRank.min)) * 100 
    : 100;

  return (
    <>
      <div className="fixed top-20 right-4 z-40 bg-black bg-opacity-80 backdrop-blur-md p-3 rounded-lg border border-green-500 border-opacity-30 max-w-xs">
        <div className="text-center">
          <div className="text-xs text-gray-300 mb-1">Current Rank</div>
          <div className="text-sm font-bold chemistry-font" style={{ color: currentRank.color }}>
            {userRank}
          </div>
          <div className="text-xs text-gray-400 mt-1">Points: {points}</div>
          
          {nextRank && (
            <div className="mt-2">
              <div className="text-xs text-gray-300 mb-1">
                Next: {nextRank.name} ({nextRank.min} pts)
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div 
                  className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showLevelUp && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-green-900 to-black p-8 rounded-lg text-center border border-green-400 shadow-2xl"
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 10 }}
            >
              <div className="text-3xl font-bold chemistry-font neon-green mb-4">
                LEVEL UP!
              </div>
              <div className="text-xl text-yellow-400 mb-2">
                You are now a
              </div>
              <div className="text-2xl font-bold chemistry-font" style={{ color: currentRank.color }}>
                {userRank}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RankingSystem;