import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropsTooltip {
  description: string;
  icon: IconProp;
}
export default function Tooltip(props: PropsTooltip) {
  return (
    <div className="relative flex flex-col items-center group p-2 text-pink-800 rounded-md transition hover:-translate-y-0.5 hover:scale-105">
      <FontAwesomeIcon className="w-4 h-4" icon={props.icon} />
      <div className="absolute bottom-3 flex-col items-center hidden mb-6 group-hover:flex">
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md uppercase">
          {props.description}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
      </div>
    </div>
  );
}