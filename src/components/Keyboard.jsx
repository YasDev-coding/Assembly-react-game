import clsx from "clsx/lite";
import GameStatus from "./GameStatus";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function Keyboard(props) {
  return (
    <ol className="mt-[28px] flex   flex-wrap justify-center gap-x-2 gap-y-3 text-center text-2xl font-semibold max-w-[680px] ">
      {alphabet.map((letter) => (
        <li key={letter}>
          <button
            onClick={(event) => {
              props.addGuessedLetter(letter);
              if (props.word.includes(letter)) {
                event.currentTarget.classList.add("bg-[#10A95B]");
                event.currentTarget.classList.remove("bg-[#FCBA29]");
              } else {
                event.currentTarget.classList.add(
                  "bg-[#EC5D49]",
                  "disabled:opacity-50"
                );
                event.currentTarget.classList.remove("bg-[#FCBA29]");
              }

              event.currentTarget.disabled = true;
            }}
            className={` bg-[#FCBA29]   border-[1.6px] border-[#D7D7D7]  p-3  w-[60px] h-[60px] rounded ${
              props.gameStatus || props.availableTries <= 1
                ? ""
                : "cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300"
            }     `}
            disabled={props.gameStatus || props.availableTries <= 1}
          >
            {letter}
          </button>
        </li>
      ))}
    </ol>
  );
}
