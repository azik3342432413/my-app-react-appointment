import React from "react";
import closeSvg from "../assets/svg/close.svg";
import appSvg from "../assets/svg/apps.svg";
import mailSvg from "../assets/svg/mail.svg";
import hdrSvg from "../assets/svg/hdr.svg";
import personSvg from "../assets/svg/person.svg";
import classes from "../assets/css/left-sidebar.module.css";
import questionTypes from "../data/question_types";
import BlockField from "./blocks/utils/BlockField";
import RateOptions from "./blocks/utils/RateOptions";
import {useSelector} from "react-redux";
import SmileLabels from "./blocks/utils/SmileLabels";
import SmilePosition from "./blocks/utils/SmilePosition";
import SmileColor from "./blocks/utils/SmileColor";
import SmileBorder from "./blocks/utils/SmileBorder";

function RightSidebar(){

    const selected = useSelector((state) => state.drag.selected);


    return (

        <div
            className="flex flex-col items-start h-32 w-1/3 mx-2 sm:w-1/4 md:w-1/5 lg:w-1/4 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <div className="flex justify-between font-bold w-full">
                <span className="inline-block px-2 py-4">Template editor</span>
                <img src={closeSvg} alt="" style={{transform: 'scale(0.8)'}}/>
            </div>

            <div className="w-full">
                <p className="px-2 py-4 text-left text-gray-400">
                    The cursor property specifies the mouse cursor to be displayed when pointing over an element.
                    Default value: auto. Inherited: yes. Animatable: no.
                </p>
            </div>
            <div className="w-full border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="w-1/3">
                        <a href="#"
                           className="flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                           aria-current="page">
                            <svg className="w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path
                                    d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                            </svg>
                        </a>
                    </li>
                    <li className="w-1/3">
                        <a href="#"
                           className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                            <svg
                                className="w-4 h-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                            </svg>
                        </a>
                    </li>
                    <li className="w-1/3">
                        <a href="#"
                           className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                            <svg
                                className="w-4 h-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 18 20">
                                <path
                                    d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="w-full">
                <p className="px-2 py-4 text-center text-gray-400">
                    Assign or select a field to the page
                </p>
            </div>

            {selected.type === 'smile' &&
                <>
                    <RateOptions id={selected.id}/>
                    <SmileLabels/>
                    <SmilePosition/>
                    <SmileColor/>
                    <SmileBorder/>
                </>
            }


        </div>


    )
}


export default RightSidebar;