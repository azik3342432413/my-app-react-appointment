import React from "react";
import LeftSidebar from "./LeftSidebar";
import ViewMode from "./ViewMode";
import RightSidebar from "./RightSidebar";

function Workspace(){
    return (
        <div className="flex items-flex-start px-8 py-4">
            <LeftSidebar/>
            <ViewMode/>
            <RightSidebar/>
        </div>
    )
}


export default Workspace;