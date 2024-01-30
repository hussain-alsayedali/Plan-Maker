import "./output.css";

export default function ColorBlock(props) {
  return (
    <div
      className={`w-12 hover:bg-slate-400 rounded ${
        props.selected && "bg-red-500"
      } `}
      onClick={props.handleChange}
    >
      <div
        className={`w-full h-8 border border-gray-400 rounded bg-${props.bgColor}`}
      ></div>
      <h3>{props.hours}</h3>
    </div>
  );
}
