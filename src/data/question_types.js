import smileSvg from "../assets/svg/smile.svg";
import microphoneSvg from "../assets/svg/microphone.svg";
import record from "../assets/svg/record.svg";
import {generateUniqueId} from "./helper";


const jsonData =  [
    {
        id: generateUniqueId(),
        name: "Smiley Rating",
        image: smileSvg,
        type: 'smile'
    },
    {
        id: generateUniqueId(),
        name: "Voice feedback",
        image: microphoneSvg
    },
    {
        id: generateUniqueId(),
        name: "Single Choice",
        image: record
    }
];

export default jsonData;