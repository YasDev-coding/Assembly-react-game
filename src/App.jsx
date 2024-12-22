import { useEffect, useRef, useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguagesList from "./components/LanguagesList";
import Word from "./components/Word";
import { languages } from "./models/languages";
import { getRandomWord } from "./utils";

export default function App() {
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [tries, setTries] = useState({ availableTries: 9, rightTries: 0 });
  const [gameStatus, setGameStatus] = useState(false);

  const newGameBtnRef = useRef(null);

  useEffect(() => {
    if (newGameBtnRef.current) {
      newGameBtnRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [gameStatus]);

  useEffect(() => {
    if (currentWord.length === tries.rightTries) {
      setGameStatus(true);
    }
  }, [tries]);

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );

    currentWord.forEach((wordLetter) => {
      if (wordLetter === letter) {
        setTries((prevTries) => ({
          ...prevTries,
          rightTries: prevTries.rightTries + 1,
        }));
      }
    });
    if (!currentWord.includes(letter)) {
      setTries((prevTries) => ({
        ...prevTries,
        availableTries: prevTries.availableTries - 1,
      }));
    }
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-9 mb-[75px]">
        <GameStatus
          gameStatus={gameStatus}
          tries={tries}
          languagesNames={languages.map((language) => language.name)}
        />
        <LanguagesList
          languages={languages}
          availableTries={tries.availableTries}
        />
        <Word word={currentWord} guessedLetters={guessedLetters} />
        <Keyboard
          addGuessedLetter={addGuessedLetter}
          word={currentWord}
          gameStatus={gameStatus}
          availableTries={tries.availableTries}
        />

        {(gameStatus || tries.availableTries <= 1) && (
          <button
            ref={newGameBtnRef}
            onClick={() => window.location.reload()}
            className="bg-[#11B5E5] py-3 px-20 rounded  border-[1.6px] border-[#D7D7D7] text-2xl font-semibold"
          >
            New Game
          </button>
        )}
      </main>
    </>
  );
}
