import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {showLabels, updateColor, updateLabels, updatePosition} from "../../../redux/slices/dragSlice";

import classes from "../../../assets/css/left-sidebar.module.css";


function SmileColor(){

    const selected = useSelector((state) => state.drag.selected);

    const dispatch = useDispatch();

    const handleChange = (e) => {

        dispatch(updateColor({id: selected.id, color: e.target.value }));
    };

    return (
        <>
            <div className="w-full mt-5">
                <p className={`${classes.line} w-full inline-block px-2 py-4 text-gray-300`}>
                    <span>STROKE COLOR</span>
                </p>
            </div>
            <div className="w-full pb-5 flex justify-center">
                <input type="color"
                       onChange={handleChange}
                       className="p-1 h-12 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                       id="hs-color-input" value={selected.color} title="Choose your color"/>
            </div>
        </>

    )
}


export default SmileColor;