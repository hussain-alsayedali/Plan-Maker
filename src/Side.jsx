import "./output.css";
import html2canvas from "html2canvas";
import domToImage from "dom-to-image";

export default function Side(props) {
  const capturePlan = () => {
    const planElement = document.getElementById("plan-container");

    domToImage.toPng(planElement).then(function (dataUrl) {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "myPlan.png";
      link.click();
    });
  };
  return (
    <aside className="flex justify-center align-middle mt-10">
      <h4>sice</h4>
      <button
        onClick={capturePlan}
        className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded"
      >
        Button
      </button>
    </aside>
  );
}
