import "./output.css";
import ColorBlock from "./ColorBlock";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const opacity = 100;
const colors = {
  0: ["red-", "zinc-", "yellow-"],
  1: ["orange-", "teal-", "cyan-"],
  2: ["rose-", "pink-", "fuchsia-"],
  3: ["violet-", "emerald-", "stone-"],
  4: ["indigo-", "sky-", "lime-"],
};
const colorsKeys = Object.keys(colors);

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    colors[i][j] = `${colors[i][j]}${opacity * (i + 1)}`;
  }
}

// console.log("meow ", colors[0]);
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
