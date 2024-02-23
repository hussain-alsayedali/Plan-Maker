import "./output.css";

export default function ColorBlock(props) {
  return (
    <div
      className={` ${
        props.width ? "w-full" : "w-12"
      } hover:bg-slate-400 rounded duration-300 ${
        props.selected && "bg-sky-500"
      } `}
      onClick={props.handleChange}
    >
      <div
        className={`w-full h-8 border border-gray-400 rounded bg-${props.bgColor}`}
      ></div>
      <h3 className="text-center">{props.hours}</h3>
    </div>
  );
}
