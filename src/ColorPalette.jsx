import "./output.css";
import ColorBlock from "./ColorBlock";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ColorPalette() {
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
        <ColorBlock hours={3} bgColor={colors[0][0]} />
        <ColorBlock hours={3} bgColor={colors[0][1]} />
        <ColorBlock hours={3} bgColor={colors[0][2]} />
        <h3>year 2</h3>
        <ColorBlock hours={3} bgColor={colors[1][0]} />
        <ColorBlock hours={3} bgColor={colors[1][1]} />
        <ColorBlock hours={3} bgColor={colors[1][2]} />
        <h3>year 3</h3>
        <ColorBlock hours={3} bgColor={colors[2][0]} />
        <ColorBlock hours={3} bgColor={colors[2][1]} />
        <ColorBlock hours={3} bgColor={colors[2][2]} />
        <h3>year 4</h3>
        <ColorBlock hours={3} bgColor={colors[3][0]} />
        <ColorBlock hours={3} bgColor={colors[3][1]} />
        <ColorBlock hours={3} bgColor={colors[3][2]} />
        <h3>year 5</h3>
        <ColorBlock hours={3} bgColor={colors[4][0]} />
        <ColorBlock hours={3} bgColor={colors[4][1]} />
        <ColorBlock hours={3} bgColor={colors[4][2]} />
      </div>
    </div>
  );
}
