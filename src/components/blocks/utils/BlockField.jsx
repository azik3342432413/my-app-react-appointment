import React from "react";
import classes from "../../../assets/css/left-sidebar.module.css";
import appSvg from "../../../assets/svg/apps.svg";
import {  useDispatch } from 'react-redux'
import { increment } from '../../../redux/slices/dragSlice';

function BlockField(props){

    const handleDragStart = (e, el) => {
        e.dataTransfer.setData('text/plain', el);
        dispatch(increment(el));
    };

    const dispatch = useDispatch();

    return (
        <div
            key={props.item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, props.item)}
            className={`${classes.infoTab} justify-center items-center py-2 gap-1 flex flex-col w-1/3 border-2 rounded-md border-gray-300`}>
            <img src={props.item.image} alt=""/>
            <span className="w-full">{props.item.name}</span>
            <img src={appSvg} alt=""/>
        </div>
    )
}


export default BlockField;