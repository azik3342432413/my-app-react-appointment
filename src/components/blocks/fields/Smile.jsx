import React from "react";
import smiles from "../../../data/smiles";
import classes from "../../../assets/css/smile.module.css";
import {useSelector} from "react-redux";

function Smile(props){

    const selected = useSelector((state) => state.drag.selected);

    return (
        <div className="py-5 px-2">
            <div className={`w-full flex items-center ${props.item.position} px-4 ${props.item.border}`} style={{borderColor: props.item.id === selected.id && props.item.color}}>
                {props.item.activeBlocks.map((item, key) => {
                    const selectedItem = smiles.find(elem => elem.id === item.id);

                    const activeClass = "active_"+props.item.id;
                    const styles = `
                        .${activeClass} svg {
                            fill: ${props.item.color};
                        }
                      `;
                    return (
                        <>
                            <div dangerouslySetInnerHTML={{__html: `<style>${styles}</style>`}}></div>
                            <div
                                key={item.id}
                                className={`${classes.smile} ${item.active && activeClass} h-32 w-1/5 py-6 flex flex-col justify-between items-center`}>
                                {selectedItem.image}
                                {props.item.showLabels && <span style={{color: item.active && props.item.color}}
                                                                className="font-medium text-gray-500 ">{item.name}</span>}
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}


export default Smile;