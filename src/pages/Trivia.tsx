import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import mediaAssets from '../assets/mediaAssets';

const Trivia = () => {
  const [currentTrivia, setCurrentTrivia] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);

  const triviaData = [
    {
      question: "What is the street name of the blue methamphetamine produced by Walter and Jesse?",
      options: ["Blue Sky", "Crystal Blue", "Blue Magic", "Blue Diamond"],
      correct: 0,
      explanation: "Blue Sky was the street name for their high-purity blue methamphetamine.",
      gif: mediaAssets.gifs.walter.danger,
      points: 15
    },
    {
      question: "What is Walter White's middle name?",
      options: ["Henry", "Hartwell", "Harold", "Hamilton"],
      correct: 1,
      explanation: "Walter Hartwell White is his full name, as revealed throughout the series.",
      gif: mediaAssets.gifs.walter.sayMyName,
      points: 20
    },
    {
      question: "What does 'Los Pollos Hermanos' mean in English?",
      options: ["The Chicken Brothers", "The Fried Chicken", "The Two Chickens", "The Brother Chickens"],
      correct: 0,
      explanation: "Los Pollos Hermanos translates to 'The Chicken Brothers' in English.",
      gif: mediaAssets.gifs.gus.tie,
      points: 10
    },
    {
      question: "What is the name of Jesse's on-and-off girlfriend who dies from a drug overdose?",
      options: ["Andrea", "Jane", "Wendy", "Carmen"],
      correct: 1,
      explanation: "Jane Margolis dies from a heroin overdose while Walter watches.",
      gif: mediaAssets.gifs.jesse.bitch,
      points: 15
    },
    {
      question: "What is the purity percentage of Walter and Jesse's methamphetamine?",
      options: ["96%", "99%", "98%", "97%"],
      correct: 1,
      explanation: "Their methamphetamine consistently tested at 99% purity, making it highly sought after.",
      gif: mediaAssets.gifs.hank.dea,
      points: 25
    },
    {
      question: "What car does Walter buy for his son Walt Jr.?",
      options: ["Dodge Challenger", "Chrysler 300", "Pontiac Aztec", "Dodge Charger"],
      correct: 0,
      explanation: "Walter buys Walt Jr. a red Dodge Challenger, which Skyler makes him return.",
      gif: mediaAssets.gifs.skyler.ted,
      points: 20
    }
  ];

  const handleAnswer = (selectedIndex: number) => {
    const isCorrect = selectedIndex === triviaData[currentTrivia].correct;
    const newAnswers = [...userAnswers, isCorrect];
    setUserAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
      if ((window as any).addBBPoints) {
        (window as any).addBBPoints(triviaData[currentTrivia].points);
      }
    }
    
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    if (currentTrivia < triviaData.length - 1) {
      setCurrentTrivia(currentTrivia + 1);
      setShowAnswer(false);
    }
  };

  const resetTrivia = () => {
    setCurrentTrivia(0);
    setShowAnswer(false);
    setScore(0);
    setUserAnswers([]);
  };

  const currentQ = triviaData[currentTrivia];
  const isLastQuestion = currentTrivia === triviaData.length - 1;
  const isComplete = showAnswer && isLastQuestion;

  return (
    <div className="page-transition min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold chemistry-font mb-6">
            <span className="neon-orange">Breaking Bad</span> <span className="neon-green">Trivia</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Test your knowledge of the greatest TV show ever made. Each correct answer earns you XP!
          </p>
        </motion.div>

        {/* Score Display */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-green-900/30 to-yellow-900/30 px-6 py-3 rounded-full border border-green-500/30">
            <div className="flex items-center gap-4 chemistry-font">
              <Brain className="w-6 h-6 text-green-400" />
              <span className="text-lg">Score: {score}/{triviaData.length}</span>
              <span className="text-sm text-gray-400">Question {currentTrivia + 1}/{triviaData.length}</span>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={currentTrivia}
              className="card max-w-3xl mx-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="h-2 rounded-full bg-gradient-to-r from-orange-400 to-green-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentTrivia + 1) / triviaData.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold chemistry-font neon-orange mb-8 text-center">
                {currentQ.question}
              </h2>

              {!showAnswer ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQ.options.map((option, index) => (
                    <motion.button
                      key={index}
                      className="p-4 text-left bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-orange-500 rounded-lg transition-all duration-300 group"
                      onClick={() => handleAnswer(index)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-lg group-hover:text-orange-400 transition-colors duration-300">
                        {String.fromCharCode(65 + index)}. {option}
                      </span>
                    </motion.button>
                  ))}
                </div>
              ) : (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Answer Result */}
                  <div className="mb-6">
                    {userAnswers[currentTrivia] ? (
                      <div className="flex items-center justify-center gap-2 text-green-400 text-2xl font-bold mb-4">
                        <CheckCircle className="w-8 h-8" />
                        Correct! +{currentQ.points} XP
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2 text-red-400 text-2xl font-bold mb-4">
                        <XCircle className="w-8 h-8" />
                        Wrong Answer
                      </div>
                    )}
                    
                    <div className="bg-gradient-to-r from-green-900/30 to-orange-900/30 p-6 rounded-lg border-l-4 border-orange-400 mb-6">
                      <p className="text-lg text-orange-200 mb-4">
                        <strong>Correct Answer:</strong> {currentQ.options[currentQ.correct]}
                      </p>
                      <p className="text-gray-300">
                        {currentQ.explanation}
                      </p>
                    </div>

                    {/* GIF */}
                    <div className="mb-6">
                      <img 
                        src={currentQ.gif} 
                        alt="Breaking Bad GIF"
                        className="w-full max-w-md mx-auto rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {!isLastQuestion ? (
                    <button
                      onClick={nextQuestion}
                      className="btn-desert"
                    >
                      Next Question
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowAnswer(true)}
                      className="btn-chemistry"
                    >
                      See Final Results
                    </button>
                  )}
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              className="card max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <Brain className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                <h2 className="text-3xl font-bold chemistry-font neon-orange mb-4">
                  Trivia Complete!
                </h2>
                
                <div className="text-6xl font-bold chemistry-font neon-green mb-4">
                  {score}/{triviaData.length}
                </div>
                
                <div className="text-xl text-gray-300 mb-6">
                  {score === triviaData.length ? "Perfect! You're a true Heisenberg!" :
                   score >= triviaData.length * 0.8 ? "Excellent! You know your Breaking Bad!" :
                   score >= triviaData.length * 0.6 ? "Good job! Time for a rewatch?" :
                   "Time to binge-watch Breaking Bad again!"}
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-orange-900/30 p-6 rounded-lg border border-green-500/30 mb-8">
                  <span className="text-green-400 chemistry-font text-lg">
                    Total XP Earned: {userAnswers.reduce((total, isCorrect, index) => 
                      total + (isCorrect ? triviaData[index].points : 0), 0
                    )}
                  </span>
                </div>
              </div>

              <button
                onClick={resetTrivia}
                className="btn-chemistry inline-flex items-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Trivia;