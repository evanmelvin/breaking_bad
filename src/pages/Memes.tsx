import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, Heart, Share2 } from 'lucide-react';
import mediaAssets from '../assets/mediaAssets';

const Memes = () => {
  const [selectedMeme, setSelectedMeme] = useState<number | null>(null);

  const memes = [
    {
      id: 1,
      title: "I am the one who knocks",
      image: mediaAssets.memes.walterKnocks,
      caption: "When someone asks who's at the door",
      likes: 1547,
      category: "walter",
      gif: mediaAssets.gifs.walter.danger
    },
    {
      id: 2,
      title: "Yeah, Science!",
      image: mediaAssets.memes.jesseScience,
      caption: "When the chemistry experiment actually works",
      likes: 2341,
      category: "jesse",
      gif: mediaAssets.gifs.jesse.yeahScience
    },
    {
      id: 3,
      title: "Los Pollos Hermanos",
      image: mediaAssets.memes.gusFring,
      caption: "When your chicken restaurant is actually a front",
      likes: 1876,
      category: "gus",
      gif: mediaAssets.gifs.gus.faceOff
    },
    {
      id: 4,
      title: "Better Call Saul",
      image: mediaAssets.memes.saulGoodman,
      caption: "When you need a criminal lawyer",
      likes: 3241,
      category: "saul",
      gif: mediaAssets.gifs.saul.betterCallSaul
    },
    {
      id: 5,
      title: "They're Minerals!",
      image: mediaAssets.memes.hankMinerals,
      caption: "When someone calls your rocks 'stones'",
      likes: 4567,
      category: "hank",
      gif: mediaAssets.gifs.hank.minerals
    },
    {
      id: 6,
      title: "I Fucked Ted",
      image: mediaAssets.memes.skylerTed,
      caption: "When you drop the ultimate bombshell",
      likes: 2876,
      category: "skyler",
      gif: mediaAssets.gifs.skyler.reaction
    },
    {
      id: 7,
      title: "Say My Name",
      image: mediaAssets.memes.walterKnocks,
      caption: "When you demand respect",
      likes: 5432,
      category: "walter",
      gif: mediaAssets.gifs.walter.sayMyName
    },
    {
      id: 8,
      title: "Bitch!",
      image: mediaAssets.memes.jesseScience,
      caption: "Jesse's favorite word in any situation",
      likes: 3876,
      category: "jesse",
      gif: mediaAssets.gifs.jesse.bitch
    }
  ];

  const handleMemeClick = (memeId: number) => {
    setSelectedMeme(memeId === selectedMeme ? null : memeId);
    if ((window as any).addBBPoints) {
      (window as any).addBBPoints(5);
    }
  };

  const categories = [
    { name: 'All', color: '#00ff41' },
    { name: 'walter', color: '#00ff41' },
    { name: 'jesse', color: '#ffd700' },
    { name: 'gus', color: '#ff8c00' },
    { name: 'saul', color: '#ff6b35' },
    { name: 'hank', color: '#32cd32' },
    { name: 'skyler', color: '#9370db' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMemes = selectedCategory === 'All' 
    ? memes 
    : memes.filter(meme => meme.category === selectedCategory);

  return (
    <div className="page-transition min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold chemistry-font mb-6">
            <span className="neon-green">Breaking Bad</span> <span className="neon-yellow">Memes</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The funniest moments and most iconic scenes turned into memes. Click to view GIFs!
          </p>
        </motion.div>

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
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Memes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemes.map((meme, index) => (
            <motion.div
              key={meme.id}
              className="card group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleMemeClick(meme.id)}
            >
              {/* Meme Image/GIF */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                {selectedMeme === meme.id ? (
                  <img 
                    src={meme.gif}
                    alt={meme.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = meme.image;
                    }}
                  />
                ) : (
                  <img 
                    src={meme.image}
                    alt={meme.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold chemistry-font neon-green mb-1">
                    {meme.title}
                  </h3>
                </div>

                {/* Play indicator */}
                {selectedMeme !== meme.id && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <Smile className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                )}
              </div>

              {/* Meme Caption */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {meme.caption}
              </p>

              {/* Meme Stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span className="text-sm text-gray-400">{meme.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-400">Share</span>
                  </div>
                </div>
                <div className="text-xs text-green-400 chemistry-font">
                  +5 XP
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <div className="text-3xl font-bold chemistry-font neon-green mb-2">
                {memes.length}
              </div>
              <div className="text-gray-300">Total Memes</div>
            </div>
            <div className="card">
              <div className="text-3xl font-bold chemistry-font neon-yellow mb-2">
                {memes.reduce((sum, meme) => sum + meme.likes, 0).toLocaleString()}
              </div>
              <div className="text-gray-300">Total Likes</div>
            </div>
            <div className="card">
              <div className="text-3xl font-bold chemistry-font neon-orange mb-2">
                6
              </div>
              <div className="text-gray-300">Characters</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Memes;