import React, { useState } from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react';

export default function App() {
  // ===== EDIT THESE SECTIONS =====
  const birthdayName = "Firizza";
  
  const birthdayWish = `Happy Birthday frfrfr.

You somehow make even the most random moments fun, your unhinged jokes and whimsical demeanor cheer me up every time, without fail. From late-night conversations to spontaneous plans that don’t always make sense, every memory with you ends up meaning more than I expect.

Thank you for being kind, for showing up, and for being you. I’m really glad you’re in my life.

Here’s to more laughs, more memories, and whatever chaos comes next.

kurang sincere,
Ming `;

  const storyText = `Your love for collecting Pop Mart blind boxes is really sweet, I love seeing how excited you get with each new figure, may you never lose this part of yourself.

And I hope you know that you’re allowed to take up space just as you are, without having to apologise or make yourself smaller. You deserve to ask for what you need, to be seen, and to exist comfortably in your own skin. When you live honestly and stay true to yourself, the right people will always make room for you. You’re never too much in the spaces where you’re truly meant to be.`;

  // Blind box prizes - add image paths for each box
  const blindBoxPrizes = [
    { name: "Fir in the wild", image: `${import.meta.env.BASE_URL}fir1.jpeg`, rarity: "Common" },
    { name: "Last Bite", image: `${import.meta.env.BASE_URL}fir2.jpeg`, rarity: "Vintage" },
    { name: "Frostfall Hour", image: `${import.meta.env.BASE_URL}fir3.jpeg`, rarity: "Common" },
    { name: "Damsel in Distress", image: `${import.meta.env.BASE_URL}fir4.jpeg`, rarity: "Super Rare" },
    { name: "Transcendental Beauty", image: `${import.meta.env.BASE_URL}fir6.jpeg`, rarity: "Secret" },
    { name: "Waiting", image: `${import.meta.env.BASE_URL}fir5.jpeg`, rarity: "Rare" },
  ];


  const [isOpen, setIsOpen] = useState(false);
  const [openedBoxes, setOpenedBoxes] = useState([]);
  const [currentReveal, setCurrentReveal] = useState(null);

  const openBlindBox = (index) => {
    if (openedBoxes.includes(index)) return;
    
    setCurrentReveal(index);
    setTimeout(() => {
      setOpenedBoxes([...openedBoxes, index]);
      setCurrentReveal(null);
    }, 2000); // Increased from 1500 to 2000ms to see the full tear animation
  };

  const getRarityColor = (rarity) => {
    switch(rarity) {
      case "Common": return "text-gray-600";
      case "Rare": return "text-blue-600";
      case "Super Rare": return "text-purple-600";
      case "Ultra Rare": return "text-brown-600";
      case "Secret": return "text-pink-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 p-2 sm:p-4 flex items-center justify-center">
      {!isOpen ? (
        // Landing Page - Cover
        <div
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl shadow-2xl p-8 sm:p-12 w-full max-w-sm sm:w-96 aspect-square flex flex-col items-center justify-center cursor-pointer transform transition-all active:scale-95 sm:hover:scale-105 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  fontSize: `${Math.random() * 30 + 30}px`
                }}
              >
                🦩
              </div>
            ))}
          </div>
          
          <div className="text-5xl sm:text-6xl mb-4 animate-bounce relative z-10">🦩</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center relative z-10">
            Happy Birthday!
          </h1>
          <p className="text-lg sm:text-xl text-pink-100 animate-pulse relative z-10">
            Click to open
          </p>
          <div className="absolute top-4 right-4 animate-spin-slow">
            <Sparkles className="text-yellow-300 w-8 h-8" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Heart className="text-red-300 w-8 h-8 animate-pulse" />
          </div>
        </div>
      ) : (
        // Full Card Content - Scrollable
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header Section - Birthday Wish */}
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      fontSize: `${Math.random() * 25 + 20}px`
                    }}
                  >
                    🦩
                  </div>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 relative z-10 animate-slideDown px-2">
                Happy Birthday, {birthdayName}! 🎉
              </h1>
              <p className="text-xl sm:text-2xl text-pink-100 relative z-10 animate-slideDown px-2" style={{animationDelay: '0.2s'}}>
                Let's celebrate YOU!
              </p>
            </div>

            {/* Birthday Wish Section */}
            <div className="p-4 sm:p-8 animate-slideUp">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden">
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-3xl sm:text-4xl opacity-20">🦩</div>
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-3xl sm:text-4xl opacity-20">🦩</div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-wrap relative z-10">
                  {birthdayWish}
                </p>
              </div>
            </div>

            {/* Story Section */}
            <div className="p-4 sm:p-8 animate-slideUp" style={{animationDelay: '0.2s'}}>
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-3 sm:mb-4">
                  My pov of you
                </h2>
                <div className="flex justify-center gap-2 mb-4">
                  <span className="text-3xl sm:text-4xl animate-bounce">🦩</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 relative overflow-hidden">
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-3xl sm:text-4xl opacity-20 animate-spin-slow">🦩</div>
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-3xl sm:text-4xl opacity-20 animate-pulse">🐰</div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-wrap relative z-10">
                  {storyText}
                </p>
              </div>
            </div>

            {/* Blind Box Game Section */}
            <div className="p-4 sm:p-8 bg-gradient-to-br from-purple-50 to-pink-50 animate-slideUp" style={{animationDelay: '0.4s'}}>
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-3 sm:mb-4">
                  Blind Box mace popmart
                </h2>
                <p className="text-gray-700 text-base sm:text-lg mb-2 px-2">
                  moga moga dapat secret fir
                </p>
                <p className="text-pink-600 font-semibold text-base sm:text-lg">
                  {openedBoxes.length} / {blindBoxPrizes.length} boxes opened
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
                {blindBoxPrizes.map((prize, idx) => (
                  <div
                    key={idx}
                    className="relative animate-fadeInUp"
                    style={{animationDelay: `${idx * 0.1}s`}}
                  >
                    {!openedBoxes.includes(idx) && currentReveal !== idx ? (
                      // Unopened Box - Pop Mart Style
                      <button
                        onClick={() => openBlindBox(idx)}
                        className="w-full aspect-square bg-white rounded-xl sm:rounded-2xl shadow-lg transform transition-all active:scale-95 sm:hover:scale-105 sm:hover:shadow-xl cursor-pointer flex flex-col items-center justify-center relative overflow-hidden border-2 border-gray-200"
                      >
                        <img 
                          src={`${import.meta.env.BASE_URL}box-hirono-new.png`}
                          alt="Pop Mart Box"
                          className="w-full h-full object-contain p-1 sm:p-2"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 text-center">
                          <p className="text-gray-700 font-bold text-xs sm:text-sm bg-white/80 px-1 sm:px-2 py-1 rounded mx-1 sm:mx-2">
                            Click to open!
                          </p>
                        </div>
                      </button>
                    ) : currentReveal === idx ? (
                      // Opening Animation - Tearing Effect
                      <div className="w-full aspect-square relative rounded-xl sm:rounded-2xl shadow-lg overflow-hidden bg-white">
                        <div className="absolute inset-0">
                          <img 
                            src={`${import.meta.env.BASE_URL}box-hirono-new.png`}
                            alt="Pop Mart Box"
                            className="w-full h-full object-contain animate-tear-top"
                            style={{
                              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-3xl sm:text-4xl animate-pulse">✨</div>
                        </div>
                      </div>
                    ) : (
                      // Revealed Prize
                      <div className="w-full aspect-square bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border-4 border-pink-300 animate-popIn">
                        <img
                          src={prize.image}
                          alt={prize.name}
                          className="w-full h-3/4 object-cover"
                        />
                        <div className="p-1 sm:p-2 bg-gradient-to-r from-pink-100 to-purple-100 text-center">
                          <p className="font-bold text-gray-800 text-xs sm:text-sm">{prize.name}</p>
                          <p className={`text-xs font-semibold ${getRarityColor(prize.rarity)}`}>
                            {prize.rarity}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {openedBoxes.length === blindBoxPrizes.length && (
                <div className="text-center bg-gradient-to-r from-pink-400 to-purple-500 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl animate-popIn">
                  <p className="text-xl sm:text-2xl font-bold mb-2">🎊 Yayy mantap siaw 🎊</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 sm:p-8 text-center animate-slideUp" style={{animationDelay: '0.6s'}}>
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 animate-bounce">🎂</div>
              <p className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4 px-2">
                Make a wish, {birthdayName}!
              </p>
              <p className="text-pink-100 text-base sm:text-lg mb-4 sm:mb-6 px-2">
                Semoga tahun ni lebih baik dari tahun sebelum-nya! 🌟
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-white text-pink-600 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-pink-50 active:scale-95 transition-all transform sm:hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Close Card
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes tear-top {
          0% { 
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          20% {
            clip-path: polygon(0 0, 100% 0, 98% 8%, 95% 12%, 92% 9%, 88% 13%, 85% 10%, 80% 14%, 75% 11%, 70% 15%, 65% 12%, 60% 16%, 55% 13%, 50% 17%, 45% 14%, 40% 18%, 35% 15%, 30% 19%, 25% 16%, 20% 20%, 15% 17%, 10% 21%, 5% 18%, 2% 22%, 0 20%);
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            clip-path: polygon(0 0, 100% 0, 98% 8%, 95% 12%, 92% 9%, 88% 13%, 85% 10%, 80% 14%, 75% 11%, 70% 15%, 65% 12%, 60% 16%, 55% 13%, 50% 17%, 45% 14%, 40% 18%, 35% 15%, 30% 19%, 25% 16%, 20% 20%, 15% 17%, 10% 21%, 5% 18%, 2% 22%, 0 20%);
            transform: translateY(-20px) rotate(-3deg);
            opacity: 1;
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 98% 8%, 95% 12%, 92% 9%, 88% 13%, 85% 10%, 80% 14%, 75% 11%, 70% 15%, 65% 12%, 60% 16%, 55% 13%, 50% 17%, 45% 14%, 40% 18%, 35% 15%, 30% 19%, 25% 16%, 20% 20%, 15% 17%, 10% 21%, 5% 18%, 2% 22%, 0 20%);
            transform: translateY(-150%) rotate(-12deg);
            opacity: 0;
          }
        }
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        @keyframes unbox {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
          100% { transform: translateY(-100%) scale(0.8); }
        }
        @keyframes reveal {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        @keyframes popIn {
          0% { transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
        .animate-spin-fast {
          animation: spin 0.5s linear infinite;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
        .animate-tear-top {
          animation: tear-top 2s ease-out forwards;
        }
        .animate-popIn {
          animation: popIn 0.5s ease-out;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}