import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {showLabels, updateBorder, updateLabels, updatePosition} from "../../../redux/slices/dragSlice";
import classesSmile from "../../../assets/css/smile.module.css";

import classes from "../../../assets/css/left-sidebar.module.css";
import {ReactComponent as Left} from "../../../assets/svg/border_left_FILL0_wght400_GRAD0_opsz24.svg";
import {ReactComponent as Right} from "../../../assets/svg/border_right_FILL0_wght400_GRAD0_opsz24.svg";
import {ReactComponent as Center} from "../../../assets/svg/border_inner_FILL0_wght400_GRAD0_opsz24.svg";
import {ReactComponent as Top} from "../../../assets/svg/border_top_FILL0_wght400_GRAD0_opsz24.svg";
import {ReactComponent as Bottom} from "../../../assets/svg/border_bottom_FILL0_wght400_GRAD0_opsz24.svg";


function SmileBorder(){

    const selected = useSelector((state) => state.drag.selected);

    const dispatch = useDispatch();

    const changePosition = (type) => {

        dispatch(updateBorder({id: selected.id, position: type }));
    };

    return (
        <>
            <div className="w-full">
                <p className={`${classes.line} w-full inline-block px-2 py-4 text-gray-300`}>
                    <span>STROKE POSITION</span>
                </p>
            </div>

            <div className={`${classesSmile.position} flex flex-row pb-5 gap-5 justify-center w-full`}>
                <Left onClick={(e) => changePosition('border-l-8')} className={`${selected.border === 'border-l-8' && classesSmile.active}`}/>
                <Center onClick={(e) => changePosition('border-8')} className={`${selected.border === 'border-8' && classesSmile.active}`}/>
                <Right onClick={(e) => changePosition('border-r-8')} className={`${selected.border === 'border-r-8' && classesSmile.active}`}/>
                <Top onClick={(e) => changePosition('border-t-8')} className={`${selected.border === 'border-t-8' && classesSmile.active}`}/>
                <Bottom onClick={(e) => changePosition('border-b-8')} className={`${selected.border === 'border-b-8' && classesSmile.active}`}/>

            </div>
        </>

    )
}


export default SmileBorder;