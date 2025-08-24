import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Users, Brain, Image, HelpCircle, Zap } from 'lucide-react';
import mediaAssets from '../assets/mediaAssets';

const HomePage = () => {
  useEffect(() => {
    // Create chemical bubbles with better performance
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'chemical-bubble';
      bubble.style.left = Math.random() * 100 + 'vw';
      bubble.style.width = bubble.style.height = Math.random() * 60 + 20 + 'px';
      bubble.style.animationDelay = Math.random() * 3 + 's';
      bubble.style.animationDuration = (6 + Math.random() * 4) + 's';
      document.body.appendChild(bubble);

      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.remove();
        }
      }, 10000);
    };

    const intervalId = setInterval(createBubble, 3000);
    
    // Cleanup function
    return () => {
      clearInterval(intervalId);
      // Remove any remaining bubbles
      const bubbles = document.querySelectorAll('.chemical-bubble');
      bubbles.forEach(bubble => bubble.remove());
    };
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Character Bios',
      description: 'Explore detailed profiles of Walter, Jesse, Gus, and more',
      link: '/bios',
      color: '#ffd700'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Trivia',
      description: 'Test your Breaking Bad knowledge with curated facts',
      link: '/trivia',
      color: '#ff8c00'
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Memes',
      description: 'Laugh at the best Breaking Bad memes and moments',
      link: '/memes',
      color: '#00ff41'
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'Quiz',
      description: 'Which Breaking Bad character are you?',
      link: '/quiz',
      color: '#ffd700'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'GIFs',
      description: 'Animated moments from the greatest show ever',
      link: '/gifs',
      color: '#ff8c00'
    }
  ];

  return (
    <div className="page-transition min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${mediaAssets.backgrounds.heroDesert})`,
            filter: 'brightness(0.3) contrast(1.2)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
        
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="hero-text mb-8 chemistry-font"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(0, 255, 65, 0.5)",
                "0 0 40px rgba(0, 255, 65, 0.8), 0 0 60px rgba(255, 215, 0, 0.3)",
                "0 0 20px rgba(0, 255, 65, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Welcome to<br />Meth Lab
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            The ultimate Breaking Bad fan experience. Dive deep into the world of 
            <span className="neon-yellow"> Walter White</span>, explore character bios, 
            test your knowledge, and discover the chemistry that made this show legendary.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link to="/quiz">
              <button className="btn-chemistry inline-flex items-center gap-2">
                <Play className="w-5 h-5" />
                Start Quiz
              </button>
            </Link>
            <Link to="/bios">
              <button className="btn-desert inline-flex items-center gap-2">
                <Users className="w-5 h-5" />
                Meet the Characters
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 chemistry-font"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="neon-green">Explore</span> the <span className="neon-yellow">Universe</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={feature.link}>
                  <div className="card h-full group cursor-pointer">
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        backgroundColor: `${feature.color}20`,
                        border: `2px solid ${feature.color}50`
                      }}
                    >
                      <div style={{ color: feature.color }}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 chemistry-font" style={{ color: feature.color }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-900/20 to-yellow-900/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '62', label: 'Episodes' },
              { number: '5', label: 'Seasons' },
              { number: '16', label: 'Emmy Wins' },
              { number: '99.1%', label: 'Purity' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold chemistry-font neon-green mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 uppercase text-sm tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;