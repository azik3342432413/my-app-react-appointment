import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {showLabels, updateLabels} from "../../../redux/slices/dragSlice";
import smiles from "../../../data/smiles";

function SmileLabels(){

    const selected = useSelector((state) => state.drag.selected);

    const handleCheckboxChange = (event) => {
        dispatch(showLabels({id: selected.id}));

    };

    const dispatch = useDispatch();

    const handleChangeText = (e, item) => {

        dispatch(updateLabels({id: selected.id, smile: item.id, text: e.target.value }));
    };

    return (
        <>
            <div className="flex justify-between font-bold w-full">
                <span className="inline-block py-4">Rate labels</span>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" checked={selected.showLabels}
                           onChange={handleCheckboxChange}/>
                    <div
                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>

            <div className="flex flex-col w-full gap-2">
                {selected.activeBlocks.map((item, key) => {
                    const selectedItem = smiles.find(elem => elem.id === item.id);

                    return (
                        <div key={item.id} className="flex w-full">
                              <span
                                  className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                  {selectedItem.image}
                              </span>
                            <input type="text" id="website-admin"
                                   className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   onChange={(e) => handleChangeText(e, item)}
                                   value={item.name}/>
                        </div>
                    )
                })}
            </div>
        </>

    )
}


export default SmileLabels;