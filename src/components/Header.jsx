import editSvg from '../assets/svg/edit.svg';
import React from "react";

function Header(){
    return (
        <div className="flex justify-center items-flex-start px-8 py-4">
            <div className="flex items-start w-1/3 mx-2 sm:w-1/4 md:w-1/5 lg:w-1/3 w-1/3 mx-2 sm:w-1/4 md:w-1/5 lg:w-1/3 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <span className="inline-block px-2 py-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300">Task Template</span>
                <img className="py-4" style={{transform: 'scale(0.8)'}} src={editSvg} alt=""/>
            </div>
            <div
                className=" w-1/3 mx-2 sm:w-1/4 md:w-1/5 lg:w-1/3 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex justify-center flex-wrap -mb-px">
                    <li className="me-2">
                        <a href="#"
                           className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                           aria-current="page">WIDGET</a>
                    </li>
                    <li className="me-2">
                        <a href="#"
                           className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">FLOW</a>
                    </li>
                    <li className="me-2">
                        <a href="#"
                           className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">PREVIEW</a>
                    </li>
                </ul>
            </div>
            <div className="w-1/3 mx-2 sm:w-1/4 md:w-1/5 lg:w-1/3 ">
                <button type="button"
                        className="float-right py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Dublicate
                </button>
                <button type="button"
                        className="float-right py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Save Preview
                </button>
                <button type="button"
                        className="float-right py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Save
                </button>
            </div>
        </div>
    )
}


export default Header;