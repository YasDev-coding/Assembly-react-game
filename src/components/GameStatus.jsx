import clsx from "clsx/lite";
import { getFarewellText } from "../utils";
export default function GameStatus(props) {
  let bgStyle;
  const msg = { h2: "", p: "" };

  if (props.gameStatus) {
    bgStyle = clsx(" bg-[#10A95B]");
    msg.h2 = "You Won!";
    msg.p = "Well done! 🎉";
  } else if (props.tries.availableTries <= 1) {
    bgStyle = clsx(" bg-[#BA2A2A]");
    msg.h2 = "Game over!";
    msg.p = "Better start learning Assembly 😭";
  } else if (props.tries.availableTries <= 8) {
    bgStyle = clsx(
      " bg-[#7A5EA7] border-2  border-dashed border-[#323232] italic"
    );
    msg.h2 = getFarewellText(
      props.languagesNames[8 - props.tries.availableTries]
    );
  }

  return (
    <div
      className={` ${bgStyle} text-[#F9F4DA] py-4 px-24 text-xl  transition-all  text-center rounded mb-5`}
    >
      <h2>{msg.h2}</h2>
      <p>{msg.p}</p>
    </div>
  );
}
