import { ReactComponent as Excellent } from '../assets/svg/mood_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as Good } from '../assets/svg/smile.svg';
import { ReactComponent as Unacceptable } from '../assets/svg/sentiment_very_dissatisfied_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as Bad } from '../assets/svg/mood_bad_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as Neutral } from '../assets/svg/sentiment_neutral_FILL0_wght300_GRAD0_opsz24.svg';
import {generateUniqueId} from "./helper";

const jsonData =  [
    {
        id: generateUniqueId(),
        name: "Excellent",
        image: <Excellent/>,
        active: true
    },
    {
        id: generateUniqueId(),
        name: "Good",
        image: <Good/>
    },
    {
        id: generateUniqueId(),
        name: "Neutral",
        image: <Neutral/>
    },
    {
        id: generateUniqueId(),
        name: "Bad",
        image: <Bad/>
    },
    {
        id: generateUniqueId(),
        name: "Unacceptable",
        image: <Unacceptable/>
    }
];

export default jsonData;