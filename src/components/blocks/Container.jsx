import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import PageNameEditBlock from "./utils/PageNameEditBlock";
import deleteSvg from "../../assets/svg/delete.svg";
import dragSvg from "../../assets/svg/drag_indicator.svg";
import Smile from "./fields/Smile";
import {addElement, updateElement} from "../../redux/slices/dragSlice";


function Container(){

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const selected = useSelector((state) => state.drag.item);
    const blocks = useSelector((state) => state.drag.blocks);
    const dispatch = useDispatch();

    console.log(blocks);

    const handleDrop = (e, dropId) => {

        dispatch(addElement(selected));


        // const dragId = e.dataTransfer.getData('text/plain');
        // const dragIndex = blocks.findIndex(block => block.id === parseInt(dragId));
        // const dropIndex = blocks.findIndex(block => block.id === parseInt(dropId));
        // const newBlocks = [...blocks];
        // const [dragItem] = newBlocks.splice(dragIndex, 1);
        // newBlocks.splice(dropIndex, 0, dragItem);
        // setBlocks(newBlocks);
    };

    const handleClick = (item) => {
        // // Dispatch the action with the updated object
        dispatch(updateElement(item));
    };


    return (
        <div
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 1)}
            className="flex flex-col justify-center bg-gray-50 items-center border-dashed border-2 rounded-md border-gray-300 mt-5 p-4">
            {
                (blocks.length ?
                        blocks.map(item => (
                            <div key={item.id} onClick={() => handleClick(item)} className="bg-white w-full px-2 rounded">
                                <div className="w-full flex justify-between">
                                    <PageNameEditBlock name={item.name}/>
                                    <div className="gap-1 flex justify-center items-center">
                                        <img src={deleteSvg} alt=""/>
                                        <img src={dragSvg} alt=""/>
                                    </div>
                                </div>
                                {item.type === "smile" ? <Smile item={item}/> : <p></p>}
                            </div>
                        ))
                        :
                        (
                            <p className="text-gray-300 text-lg font-bold">Drag and drop field</p>
                        )
                )
            }
        </div>
    )
}


export default Container;