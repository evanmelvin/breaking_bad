import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Share2, Eye } from 'lucide-react';
import mediaAssets from '../assets/mediaAssets';

const GIFs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewedGifs, setViewedGifs] = useState<number[]>([]);

  const gifs = [
    {
      id: 1,
      title: "I am the danger",
      url: mediaAssets.gifs.walter.danger,
      thumbnail: mediaAssets.characters.walter,
      category: "walter",
      description: "Walter's iconic 'I am the danger' speech",
      views: 15420,
      season: 4,
      episode: 6
    },
    {
      id: 2,
      title: "Yeah Science!",
      url: mediaAssets.gifs.jesse.yeahScience,
      thumbnail: mediaAssets.characters.jesse,
      category: "jesse",
      description: "Jesse's enthusiastic reaction to chemistry",
      views: 23410,
      season: 1,
      episode: 7
    },
    {
      id: 3,
      title: "Gus Face Off",
      url: mediaAssets.gifs.gus.faceOff,
      thumbnail: mediaAssets.characters.gus,
      category: "gus",
      description: "Gus adjusting his tie after the explosion",
      views: 18760,
      season: 4,
      episode: 13
    },
    {
      id: 4,
      title: "Better Call Saul",
      url: mediaAssets.gifs.saul.betterCallSaul,
      thumbnail: mediaAssets.characters.saul,
      category: "saul",
      description: "Saul's classic advertising catchphrase",
      views: 32410,
      season: 2,
      episode: 8
    },
    {
      id: 5,
      title: "They're Minerals Marie",
      url: mediaAssets.gifs.hank.minerals,
      thumbnail: mediaAssets.characters.hank,
      category: "hank",
      description: "Hank's passionate defense of his mineral collection",
      views: 45670,
      season: 5,
      episode: 4
    },
    {
      id: 6,
      title: "Skyler's Reaction",
      url: mediaAssets.gifs.skyler.reaction,
      thumbnail: mediaAssets.characters.skyler,
      category: "skyler",
      description: "Skyler's dramatic revelation moment",
      views: 28760,
      season: 3,
      episode: 3
    },
    {
      id: 7,
      title: "Say My Name",
      url: mediaAssets.gifs.walter.sayMyName,
      thumbnail: mediaAssets.characters.walter,
      category: "walter",
      description: "Walter demanding respect from his competitors",
      views: 54320,
      season: 5,
      episode: 7
    },
    {
      id: 8,
      title: "Jesse Pinkman Bitch",
      url: mediaAssets.gifs.jesse.bitch,
      thumbnail: mediaAssets.characters.jesse,
      category: "jesse",
      description: "Jesse's signature catchphrase delivery",
      views: 38760,
      season: 2,
      episode: 2
    },
    {
      id: 9,
      title: "Mike Ehrmantraut",
      url: mediaAssets.gifs.gus.tie,
      thumbnail: mediaAssets.characters.gus,
      category: "other",
      description: "Mike's stoic professional demeanor",
      views: 19870,
      season: 3,
      episode: 12
    }
  ];

  const categories = [
    { name: 'All', color: '#00ff41', count: gifs.length },
    { name: 'walter', color: '#00ff41', count: gifs.filter(g => g.category === 'walter').length },
    { name: 'jesse', color: '#ffd700', count: gifs.filter(g => g.category === 'jesse').length },
    { name: 'gus', color: '#ff8c00', count: gifs.filter(g => g.category === 'gus').length },
    { name: 'saul', color: '#ff6b35', count: gifs.filter(g => g.category === 'saul').length },
    { name: 'hank', color: '#32cd32', count: gifs.filter(g => g.category === 'hank').length },
    { name: 'skyler', color: '#9370db', count: gifs.filter(g => g.category === 'skyler').length },
    { name: 'other', color: '#ff69b4', count: gifs.filter(g => g.category === 'other').length }
  ];

  const filteredGifs = selectedCategory === 'All' 
    ? gifs 
    : gifs.filter(gif => gif.category === selectedCategory);

  const handleGifView = (gifId: number) => {
    if (!viewedGifs.includes(gifId)) {
      setViewedGifs([...viewedGifs, gifId]);
      if ((window as any).addBBPoints) {
        (window as any).addBBPoints(8);
      }
    }
  };

  return (
    <div className="page-transition min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold chemistry-font mb-6">
            <span className="neon-green">Breaking Bad</span> <span className="neon-orange">GIFs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Relive the most iconic moments from Breaking Bad with our curated GIF collection. 
            Each view earns you XP!
          </p>
        </motion.div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="card text-center">
            <div className="text-2xl font-bold chemistry-font neon-green mb-1">{gifs.length}</div>
            <div className="text-sm text-gray-400">Total GIFs</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold chemistry-font neon-yellow mb-1">
              {gifs.reduce((sum, gif) => sum + gif.views, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">Total Views</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold chemistry-font neon-orange mb-1">5</div>
            <div className="text-sm text-gray-400">Seasons</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold chemistry-font neon-green mb-1">{viewedGifs.length}</div>
            <div className="text-sm text-gray-400">Your Views</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 chemistry-font ${
                selectedCategory === category.name
                  ? 'bg-opacity-30 border-opacity-100'
                  : 'bg-opacity-10 border-opacity-50 hover:border-opacity-80'
              }`}
              style={{
                borderColor: category.color,
                backgroundColor: selectedCategory === category.name ? `${category.color}30` : `${category.color}10`,
                color: category.color
              }}
              onClick={() => setSelectedCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)} ({category.count})
            </motion.button>
          ))}
        </div>

        {/* GIFs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGifs.map((gif, index) => (
            <motion.div
              key={gif.id}
              className="card group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* GIF Display */}
              <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-800">
                <img 
                  src={gif.url}
                  alt={gif.title}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => handleGifView(gif.id)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = gif.thumbnail;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* View Indicator */}
                {viewedGifs.includes(gif.id) && (
                  <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                )}

                {/* Episode Info */}
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs">
                  S{gif.season}E{gif.episode}
                </div>
              </div>

              {/* GIF Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold chemistry-font neon-green">
                  {gif.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {gif.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-400">{gif.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="w-4 h-4 text-green-400" />
                      <span className="text-gray-400">GIF</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-green-400 chemistry-font">
                    {viewedGifs.includes(gif.id) ? '✓ Viewed' : '+8 XP'}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <button 
                    className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-green-500 rounded px-3 py-2 text-sm transition-all duration-300 flex items-center justify-center gap-1"
                    onClick={() => handleGifView(gif.id)}
                  >
                    <Play className="w-4 h-4" />
                    Play
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-blue-500 rounded px-3 py-2 text-sm transition-all duration-300">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-purple-500 rounded px-3 py-2 text-sm transition-all duration-300">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collection Status */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="card max-w-md mx-auto">
            <h3 className="text-xl font-bold chemistry-font neon-yellow mb-4">
              Collection Progress
            </h3>
            <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
              <motion.div 
                className="h-3 rounded-full bg-gradient-to-r from-green-400 to-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: `${(viewedGifs.length / gifs.length) * 100}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="text-lg chemistry-font">
              <span className="neon-green">{viewedGifs.length}</span> / <span className="neon-yellow">{gifs.length}</span> GIFs Viewed
            </div>
            <div className="text-sm text-gray-400 mt-2">
              {viewedGifs.length === gifs.length ? 
                "🎉 Collection Complete! You're a true Breaking Bad fan!" :
                `${gifs.length - viewedGifs.length} more to go!`
              }
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GIFs;