import React from 'react';
import { motion } from 'framer-motion';
import mediaAssets from '../assets/mediaAssets';

const CharacterBios = () => {
  const characters = [
    {
      name: 'Walter White',
      alias: 'Heisenberg',
      image: mediaAssets.characters.walter,
      description: 'A high school chemistry teacher turned methamphetamine manufacturer. Walt\'s transformation from mild-mannered educator to ruthless drug kingpin forms the show\'s central narrative.',
      element: 'W',
      atomicNumber: '74',
      quote: 'I am not in danger, Skyler. I am the danger!',
      gif: mediaAssets.gifs.walter.danger
    },
    {
      name: 'Jesse Pinkman',
      alias: 'Cap\'n Cook',
      image: mediaAssets.characters.jesse,
      description: 'Walt\'s former student and cooking partner. Jesse brings street knowledge and raw emotion to their dangerous partnership.',
      element: 'J',
      atomicNumber: '10',
      quote: 'Yeah, science!',
      gif: mediaAssets.gifs.jesse.yeahScience
    },
    {
      name: 'Gustavo Fring',
      alias: 'The Chicken Man',
      image: mediaAssets.characters.gus,
      description: 'The composed and calculating drug kingpin who operates behind the facade of a successful chicken restaurant chain.',
      element: 'Gu',
      atomicNumber: '31',
      quote: 'A man provides. And he does it even when he\'s not appreciated.',
      gif: mediaAssets.gifs.gus.faceOff
    },
    {
      name: 'Skyler White',
      alias: 'The Wife',
      image: mediaAssets.characters.skyler,
      description: 'Walter\'s wife who becomes increasingly suspicious of her husband\'s activities and eventually becomes complicit in his crimes.',
      element: 'Sk',
      atomicNumber: '21',
      quote: 'I fucked Ted.',
      gif: mediaAssets.gifs.skyler.reaction
    },
    {
      name: 'Hank Schrader',
      alias: 'ASAC Schrader',
      image: mediaAssets.characters.hank,
      description: 'Walt\'s DEA agent brother-in-law who unknowingly hunts the very man sitting at his dinner table.',
      element: 'Ha',
      atomicNumber: '72',
      quote: 'They\'re minerals, Marie!',
      gif: mediaAssets.gifs.hank.minerals
    },
    {
      name: 'Saul Goodman',
      alias: 'Better Call Saul',
      image: mediaAssets.characters.saul,
      description: 'The flamboyant criminal lawyer who helps Walt and Jesse navigate the legal and illegal aspects of their business.',
      element: 'Sa',
      atomicNumber: '11',
      quote: 'Better call Saul!',
      gif: mediaAssets.gifs.saul.betterCallSaul
    }
  ];

  const handleCharacterView = () => {
    if ((window as any).addBBPoints) {
      (window as any).addBBPoints(10);
    }
  };

  return (
    <div className="page-transition min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold chemistry-font mb-6">
            <span className="neon-yellow">Character</span> <span className="neon-green">Profiles</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the complex characters that made Breaking Bad a masterpiece of television drama.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={handleCharacterView}
            >
              {/* Character Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="periodic-element chemistry-font flex-shrink-0">
                  <span className="number">{character.atomicNumber}</span>
                  <span className="symbol">{character.element}</span>
                </div>
                
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold chemistry-font neon-green mb-1">
                    {character.name}
                  </h2>
                  <p className="text-lg text-yellow-400 mb-2">
                    "{character.alias}"
                  </p>
                </div>

                <div 
                  className="w-20 h-20 rounded-lg bg-cover bg-center border-2 border-green-500 border-opacity-50 group-hover:border-opacity-100 transition-all duration-300"
                  style={{ backgroundImage: `url(${character.image})` }}
                />
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-4">
                {character.description}
              </p>

              {/* Quote */}
              <div className="bg-gradient-to-r from-green-900/30 to-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-400 mb-4">
                <p className="italic text-yellow-200">
                  "{character.quote}"
                </p>
              </div>

              {/* GIF */}
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={character.gif} 
                  alt={`${character.name} GIF`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Points Indicator */}
              <div className="mt-4 text-center">
                <span className="text-xs text-green-400 chemistry-font">
                  +10 XP for viewing character
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chemistry Lab Aesthetic Elements */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-green-900/20 to-black/40 rounded-full border border-green-500/30">
            <div className="periodic-element chemistry-font">
              <span className="number">92</span>
              <span className="symbol">Ch</span>
            </div>
            <span className="chemistry-font text-lg neon-green">Chemistry Complete</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CharacterBios;