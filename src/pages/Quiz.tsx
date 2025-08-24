import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Award } from 'lucide-react';
import mediaAssets from '../assets/mediaAssets';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [characterScores, setCharacterScores] = useState({
    walter: 0,
    jesse: 0,
    gus: 0,
    saul: 0,
    hank: 0,
    skyler: 0
  });

  const questions = [
    {
      question: "What's your approach to solving problems?",
      options: [
        { text: "Methodical and scientific", character: 'walter' },
        { text: "Wing it and hope for the best", character: 'jesse' },
        { text: "Plan everything in advance", character: 'gus' },
        { text: "Find a legal loophole", character: 'saul' },
        { text: "Follow the rules and procedure", character: 'hank' },
        { text: "Try to maintain family harmony", character: 'skyler' }
      ]
    },
    {
      question: "How do you handle stress?",
      options: [
        { text: "Become obsessively focused", character: 'walter' },
        { text: "Panic and make impulsive decisions", character: 'jesse' },
        { text: "Stay calm and composed", character: 'gus' },
        { text: "Make jokes and deflect", character: 'saul' },
        { text: "Work out or drink beer", character: 'hank' },
        { text: "Smoke and worry quietly", character: 'skyler' }
      ]
    },
    {
      question: "What motivates you most?",
      options: [
        { text: "Providing for family", character: 'walter' },
        { text: "Wanting to be respected", character: 'jesse' },
        { text: "Building an empire", character: 'gus' },
        { text: "Making money", character: 'saul' },
        { text: "Justice and law", character: 'hank' },
        { text: "Protecting loved ones", character: 'skyler' }
      ]
    },
    {
      question: "How do you dress?",
      options: [
        { text: "Practical and understated", character: 'walter' },
        { text: "Casual and comfortable", character: 'jesse' },
        { text: "Professional and precise", character: 'gus' },
        { text: "Flashy and colorful", character: 'saul' },
        { text: "Standard and uniform-like", character: 'hank' },
        { text: "Conservative and neat", character: 'skyler' }
      ]
    },
    {
      question: "What's your biggest flaw?",
      options: [
        { text: "Pride and ego", character: 'walter' },
        { text: "Impulsiveness", character: 'jesse' },
        { text: "Ruthlessness", character: 'gus' },
        { text: "Greed", character: 'saul' },
        { text: "Stubbornness", character: 'hank' },
        { text: "Enabling bad behavior", character: 'skyler' }
      ]
    }
  ];

  const characterResults = {
    walter: {
      name: "Walter White",
      alias: "Heisenberg",
      description: "You're methodical, intelligent, and driven by a desire to provide for your family. But be careful - your pride might be your downfall.",
      image: mediaAssets.characters.walter,
      color: "#00ff41",
      points: 50
    },
    jesse: {
      name: "Jesse Pinkman",
      alias: "Cap'n Cook", 
      description: "You're impulsive and emotional, but you have a good heart. You might make mistakes, but you learn from them.",
      image: mediaAssets.characters.jesse,
      color: "#ffd700",
      points: 40
    },
    gus: {
      name: "Gustavo Fring",
      alias: "The Chicken Man",
      description: "You're calculated, patient, and always thinking ten steps ahead. You present a calm exterior while harboring deep ambitions.",
      image: mediaAssets.characters.gus,
      color: "#ff8c00",
      points: 60
    },
    saul: {
      name: "Saul Goodman",
      alias: "Better Call Saul",
      description: "You're resourceful, charismatic, and always looking for an angle. You can talk your way out of almost anything.",
      image: mediaAssets.characters.saul,
      color: "#ff6b35",
      points: 45
    },
    hank: {
      name: "Hank Schrader",
      alias: "ASAC Schrader",
      description: "You're loyal, determined, and believe in doing the right thing. You might be rough around the edges, but you have integrity.",
      image: mediaAssets.characters.hank,
      color: "#32cd32",
      points: 35
    },
    skyler: {
      name: "Skyler White",
      alias: "The Accountant",
      description: "You're practical, protective, and willing to make difficult choices for your family. You're stronger than people give you credit for.",
      image: mediaAssets.characters.skyler,
      color: "#9370db",
      points: 30
    }
  };

  const handleAnswer = (option: any) => {
    const newAnswers = [...answers, option.character];
    setAnswers(newAnswers);

    const newScores = { ...characterScores };
    newScores[option.character as keyof typeof characterScores]++;
    setCharacterScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const maxScore = Math.max(...Object.values(newScores));
      const resultCharacter = Object.keys(newScores).find(
        key => newScores[key as keyof typeof newScores] === maxScore
      ) as keyof typeof characterResults;

      setShowResult(true);
      
      // Award points
      if ((window as any).addBBPoints) {
        (window as any).addBBPoints(characterResults[resultCharacter].points);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setCharacterScores({ walter: 0, jesse: 0, gus: 0, saul: 0, hank: 0, skyler: 0 });
  };

  const getResult = () => {
    const maxScore = Math.max(...Object.values(characterScores));
    const resultCharacter = Object.keys(characterScores).find(
      key => characterScores[key as keyof typeof characterScores] === maxScore
    ) as keyof typeof characterResults;
    return characterResults[resultCharacter];
  };

  return (
    <div className="page-transition min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold chemistry-font mb-6">
            <span className="neon-green">Character</span> <span className="neon-yellow">Quiz</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Which Breaking Bad character are you? Answer these questions to find out!
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              className="card max-w-2xl mx-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-yellow-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold chemistry-font neon-green mb-8 text-center">
                {questions[currentQuestion].question}
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    className="p-4 text-left bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-green-500 rounded-lg transition-all duration-300 group"
                    onClick={() => handleAnswer(option)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg group-hover:text-green-400 transition-colors duration-300">
                      {option.text}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="card max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <Award className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                <h2 className="text-3xl font-bold chemistry-font neon-yellow mb-2">
                  Your Result
                </h2>
              </div>

              {(() => {
                const result = getResult();
                return (
                  <div>
                    <div 
                      className="w-32 h-32 mx-auto mb-6 rounded-full bg-cover bg-center border-4 border-green-500"
                      style={{ backgroundImage: `url(${result.image})` }}
                    />
                    <h3 className="text-3xl font-bold chemistry-font mb-2" style={{ color: result.color }}>
                      {result.name}
                    </h3>
                    <p className="text-xl text-yellow-400 mb-6">
                      "{result.alias}"
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                      {result.description}
                    </p>
                    <div className="bg-gradient-to-r from-green-900/30 to-yellow-900/30 p-4 rounded-lg border border-green-500/30 mb-8">
                      <span className="text-green-400 chemistry-font text-lg">
                        +{result.points} XP Earned!
                      </span>
                    </div>
                  </div>
                );
              })()}

              <button
                onClick={resetQuiz}
                className="btn-chemistry inline-flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Take Quiz Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;