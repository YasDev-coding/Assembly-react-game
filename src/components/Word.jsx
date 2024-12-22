import clsx from "clsx/lite";

export default function Word(props) {
  return (
    <ol className="flex justify-center gap-1 text-center text-2xl font-semibold   ">
      {props.word.map((letter, index) => (
        <li
          key={index}
          className={`border-b-2 border-[#F9F4DA] bg-[#323232] text-[#F9F4DA]   px-[6px] py-2`}
        >
          {
            <div className="w-[40px] h-[40px] p-[6px]  ">
              <p
                className={`${
                  props.guessedLetters.includes(letter) ? "" : "hidden"
                } transition-all`}
              >
                {letter}
              </p>
            </div>
          }
        </li>
      ))}
    </ol>
  );
}
