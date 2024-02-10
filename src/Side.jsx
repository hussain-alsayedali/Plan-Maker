import "./output.css";
import html2canvas from "html2canvas";

export default function Side(props) {
  return (
    <aside className="flex justify-center align-middle mt-10">
      <h4>sice</h4>
      <button className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded">
        Button
      </button>
    </aside>
  );
}
