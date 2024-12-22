import clsx from "clsx/lite";

export default function LanguagesList(props) {
  return (
    <>
      <ul className="  flex  max-w-sm flex-wrap justify-center gap-1 ">
        {props.languages.map((language, index) => (
          <div key={index} className="relative ">
            <span
              className={`${
                8 - props.availableTries >= index ? "" : "hidden "
              } absolute inset-0 flex items-center justify-center transition-all `}
            >
              🩻
            </span>
            <li
              className={`${clsx(
                language.bg,
                language.color,
                8 - props.availableTries >= index ? "opacity-20" : "opacity-100"
              )} rounded-[3px] p-1  text-lg`}
            >
              {language.name}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
