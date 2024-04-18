import React from "react";
import PageNameEditBlock from "./blocks/utils/PageNameEditBlock";
import LogoFieldEdit from "./blocks/utils/LogoFieldEdit";
import Container from "./blocks/Container";
import DragDrop from "./blocks/DragDrop";

function ViewMode(){
    return (
        <div className="w-full flex justify-center h-screen pt-10">
            <div className="w-5/6">
                <div className="w-full flex justify-center items-center bg-gray-200">
                    <PageNameEditBlock name="Page 1"/>
                </div>

                <LogoFieldEdit/>
                <Container/>
            </div>

        </div>
    )
}


export default ViewMode;