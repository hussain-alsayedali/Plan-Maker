import "./output.css";
import ColorBlock from "./ColorBlock";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ColorPalette(props) {
  const opacity = 100;
  const colors = {
    0: ["red-", "zinc-", "yellow-"],
    1: ["orange-", "teal-", "cyan-"],
    2: ["rose-", "pink-", "fuchsia-"],
    3: ["violet-", "emerald-", "stone-"],
    4: ["indigo-", "sky-", "lime-"],
  };
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      colors[i][j] = `${colors[i][j]}${opacity * (i + 1)}`;
    }
  }

  // for (let i = 0; i < Object.keys(colors).length; i++) {
  //   let currentColors = colors[i]
  //   for(let i = 0 ; i< currentColors.length ; i++ ){

  //   }
  // }

  function blockChange() {
    console.log("clicked");
  }

  return (
    <div className=" ">
      <h3>
        Select <FontAwesomeIcon icon={faPalette} />
      </h3>
      <div className="grid grid-cols-4 gap-4 w-52">
        <h4></h4>
        <h3>Term 1</h3>
        <h3>Term 2</h3>
        <h3>Summer</h3>
        <h3>year 1</h3>
        <ColorBlock
          hours={6}
          bgColor={colors[0][0]}
          id="0-1"
          // onClick={}
          handleChange={() => props.handleChange("0-1")}
          selected={props.currentTerm === "0-1"}
        />
        <ColorBlock
          hours={3}
          bgColor={colors[0][1]}
          id="0-2"
          handleChange={() => props.handleChange("0-2")}
          selected={props.currentTerm === "0-2"}
        />
        <ColorBlock hours={3} bgColor={colors[0][2]} id="0-3" />
        <h3>year 2</h3>
        <ColorBlock hours={3} bgColor={colors[1][0]} id="1-1" />
        <ColorBlock hours={3} bgColor={colors[1][1]} id="1-2" />
        <ColorBlock hours={3} bgColor={colors[1][2]} id="1-3" />
        <h3>year 3</h3>
        <ColorBlock hours={3} bgColor={colors[2][0]} id="2-1" />
        <ColorBlock hours={3} bgColor={colors[2][1]} id="2-2" />
        <ColorBlock hours={3} bgColor={colors[2][2]} id="2-3" />
        <h3>year 4</h3>
        <ColorBlock hours={3} bgColor={colors[3][0]} id="3-1" />
        <ColorBlock hours={3} bgColor={colors[3][1]} id="3-2" />
        <ColorBlock hours={3} bgColor={colors[3][2]} id="3-3" />
        <h3>year 5</h3>
        <ColorBlock hours={3} bgColor={colors[4][0]} id="4-1" />
        <ColorBlock hours={3} bgColor={colors[4][1]} id="4-2" />
        <ColorBlock hours={3} bgColor={colors[4][2]} id="4-3" />
      </div>
    </div>
  );
}
