import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CharacterBios from './pages/CharacterBios';
import Trivia from './pages/Trivia';
import Memes from './pages/Memes';
import Quiz from './pages/Quiz';
import GIFs from './pages/GIFs';
import RankingSystem from './components/RankingSystem';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
        <Navigation />
        <RankingSystem />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bios" element={<CharacterBios />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/memes" element={<Memes />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/gifs" element={<GIFs />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;