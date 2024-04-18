import React from "react";
import closeSvg from "../assets/svg/close.svg";
import appSvg from "../assets/svg/apps.svg";
import mailSvg from "../assets/svg/mail.svg";
import hdrSvg from "../assets/svg/hdr.svg";
import personSvg from "../assets/svg/person.svg";
import classes from "../assets/css/left-sidebar.module.css";
import questionTypes from "../data/question_types";
import BlockField from "./blocks/utils/BlockField";

function LeftSidebar(){
    return (

        <div
            className="flex flex-col items-start h-32 w-1/3 mx-2 sm:w-1/5 md:w-1/5 lg:w-1/4 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <div className="flex justify-between font-bold w-full">
                <span className="inline-block px-2 py-4">Feedback template</span>
                <img src={closeSvg} alt="" style={{transform: 'scale(0.8)'}}/>
            </div>

            <div className="w-full">
                <p className={`${classes.line} w-full inline-block px-2 py-4 text-gray-300`}>
                    <span>QUESTION TYPE</span>
                </p>
            </div>
            <div className="flex w-full gap-1 justify-between">
                {questionTypes.map(item => (
                    <BlockField key={item.id} item={item}/>
                ))}
            </div>

            <div className="w-full mt-5">
                <p className={`${classes.line} w-full inline-block px-2 py-4 text-gray-300`}>
                    <span>CUSTOMER INFORMATION</span>
                </p>
            </div>
            <div className="flex w-full gap-1 justify-between">
                <div
                    className={`${classes.infoTab} justify-center items-center py-2 gap-1 flex flex-col w-1/3 border-2 rounded-md border-gray-300`}>
                    <img src={mailSvg} alt=""/>
                    <span className="w-full">Email</span>
                    <img src={appSvg} alt=""/>
                </div>
                <div
                    className={`${classes.infoTab} justify-center items-center py-2 gap-1 flex flex-col w-1/3 border-2 rounded-md border-gray-300`}>
                    <img src={personSvg} alt=""/>
                    <span className="w-full">Fullname</span>
                    <img src={appSvg} alt=""/>
                </div>
                <div
                    className={`${classes.infoTab} justify-center items-center py-2 gap-1 flex flex-col w-1/3 border-2 rounded-md border-gray-300`}>
                    <img src={hdrSvg} alt=""/>
                    <span className="w-full">Age range</span>
                    <img src={appSvg} alt=""/>
                </div>
            </div>
        </div>


    )
}


export default LeftSidebar;