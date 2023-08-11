import image1 from "src/assets/level1.jpg";
import image2 from "src/assets/level2.jpg";
import image3 from "src/assets/level3.jpg";
import image4 from "src/assets/level4.jpg";

import { GymClassType } from "src/utility/types";

const GymClassesData: GymClassType[] = [
  {
    name: "level1",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "level2",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image2,
  },
  {
    name: "level3",
    image: image3,
  },
  {
    name: "level4",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },

];

export default GymClassesData;
