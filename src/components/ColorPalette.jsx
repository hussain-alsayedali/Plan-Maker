import "./output.css";
import ColorBlock from "./ColorBlock";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  0: ["red-100", "zinc-100", "yellow-100"],
  1: ["orange-200", "teal-200", "cyan-200"],
  2: ["rose-300", "pink-300", "fuchsia-300"],
  3: ["violet-400", "emerald-400", "stone-400"],
  4: ["indigo-500", "sky-500", "lime-500"],
};
const colorsKeys = Object.keys(colors);

export default function ColorPalette(props) {
  let colorBlocks = {};
  let clearBlock = (
    <ColorBlock
      hours="clear"
      bgColor="white"
      selected={props.currentTerm === "clear"}
      handleChange={() => props.handleChange("clear")}
      id="clear"
      key="clear"
      width="big"
    />
  );

  for (let i = 0; i < colorsKeys.length; i++) {
    let currentArrayBlocks = [];

    for (let j = 0; j < colors[i].length; j++) {
      let currentBlock = (
        <ColorBlock
          hours={
            props.selectedCourses
              ? props.selectedCourses[`${i}-${j}`].reduce(
                  (accu, currentCourse) => accu + currentCourse["credits"],
                  0
                )
              : 0
          }
          bgColor={colors[i][j]}
          key={`${i}-${j}`}
          id={`${i}-${j}`}
          handleChange={() => props.handleChange(`${i}-${j}`)}
          selected={props.currentTerm === `${i}-${j}`}
        />
      );

      currentArrayBlocks.push(currentBlock);
    }
    colorBlocks[i] = currentArrayBlocks;
  }

  return (
    <div className="ml-8">
      <h3 className="text-center">
        Select <FontAwesomeIcon icon={faPalette} />
      </h3>
      <div className="grid grid-cols-4 gap-4 ">
        <h4></h4>
        <h3 className="text-center">Term 1</h3>
        <h3 className="text-center">Term 2</h3>
        <h3 className="text-center">Summer</h3>
        <h3 className="text-center">Freshman</h3>
        {colorBlocks[0]}

        <h3 className="text-center">Sophmore</h3>
        {colorBlocks[1]}
        <h3 className="text-center">Junior</h3>
        {colorBlocks[2]}

        <h3 className="text-center">Senior</h3>
        {colorBlocks[3]}

        <h3 className="text-center">Extra</h3>
        {colorBlocks[4]}
        <h3 className="text-center">Clear</h3>
        <div className="col-span-3">{clearBlock}</div>
      </div>
    </div>
  );
}
