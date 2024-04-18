import React, { useState } from 'react';
import classes from "../../../assets/css/left-sidebar.module.css";
import smiles from "../../../data/smiles";
import {changeSmileColumns} from "../../../redux/slices/dragSlice";
import {useDispatch, useSelector} from "react-redux";


function RateOptions(props){

    const selected = useSelector((state) => state.drag.selected);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(changeSmileColumns({columns: parseInt(event.target.value), id: props.id}));

    };
    return (
        <>
            <div className="w-full">
                <p className={`${classes.line} w-full inline-block px-2 py-4 text-gray-300`}>
                    <span>RATE OPTIONS</span>
                </p>
            </div>
            <div className="flex items-center mb-2">
                <input id="default-radio-1" type="radio" value="5" name="default-radio"
                       checked={selected.columns === 5}
                       onChange={handleChange}
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-radio-1"
                       className="ms-2 flex text-sm font-medium text-gray-900 dark:text-gray-300">
                        {smiles.map(item => (
                            <span key={item.id} >{item.image}</span>
                        ))}
                </label>
            </div>

            <div className="flex items-center mb-2">
                <input id="default-radio-2" type="radio" value="4" name="default-radio"
                       checked={selected.columns === 4}
                       onChange={handleChange}
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-radio-2"
                       className="flex ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {smiles.map((item, key) => (
                            (key !== 2) && <span key={item.id} >{item.image}</span>

                        ))}
                </label>
            </div>

            <div className="flex items-center mb-2">
                <input id="default-radio-3" type="radio" value="3" name="default-radio"
                       checked={selected.columns === 3}
                       onChange={handleChange}
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-radio-3"
                       className="flex ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {smiles.map((item, key) => (
                            (key !== 1 && key !== 3) && <span key={item.id} >{item.image}</span>

                        ))}
                </label>
            </div>

            <div className="flex items-center mb-2">
                <input id="default-radio-4" type="radio"
                       name="default-radio"
                       value="2"
                       checked={selected.columns === 2}
                       onChange={handleChange}
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-radio-4"
                       className="flex ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {smiles.map((item, key) => (
                            (key !== 1 && key !==2 && key !== 3) && <span key={item.id} >{item.image}</span>

                        ))}
                </label>
            </div>
        </>

    )
}


export default RateOptions;