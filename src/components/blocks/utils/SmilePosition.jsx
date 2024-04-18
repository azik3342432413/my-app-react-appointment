import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {showLabels, updateLabels, updatePosition} from "../../../redux/slices/dragSlice";
import classesSmile from "../../../assets/css/smile.module.css";

import classes from "../../../assets/css/left-sidebar.module.css";
import {ReactComponent as Left} from "../../../assets/svg/move_selection_left_FILL0_wght400_GRAD0_opsz24.svg";
import {ReactComponent as Right} from "../../../assets/svg/move_selection_right_FILL0_wght400_GRAD0_opsz24.svg";
import {ReactComponent as Center} from "../../../assets/svg/picture_in_picture_center_FILL0_wght400_GRAD0_opsz24.svg";


function SmilePosition(){

    const selected = useSelector((state) => state.drag.selected);

    const dispatch = useDispatch();

    const changePosition = (type) => {

        dispatch(updatePosition({id: selected.id, position: type }));
    };

    return (
        <>
            <div className="w-full mt-5">
                <p className={`${classes.line} w-full inline-block px-2 py-4 text-gray-300`}>
                    <span>SMILE POSITION</span>
                </p>
            </div>

            <div className={`${classesSmile.position} flex flex-row gap-5 justify-center w-full`}>
                <Left onClick={(e) => changePosition('justify-start')} className={`${selected.position === 'justify-start' && classesSmile.active}`}/>
                <Center onClick={(e) => changePosition('justify-center')} className={`${selected.position === 'justify-center' && classesSmile.active}`}/>
                <Right onClick={(e) => changePosition('justify-end')} className={`${selected.position === 'justify-end' && classesSmile.active}`}/>
            </div>
        </>

    )
}


export default SmilePosition;