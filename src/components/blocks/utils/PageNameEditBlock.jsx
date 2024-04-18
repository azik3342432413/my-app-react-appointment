import React, { useState } from 'react';
import editSvg from "../../../assets/svg/edit.svg";

function PageNameEditBlock(props){

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(props.name); // Initial text

    const handleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    return (
        <div className="flex justify-center items-center">
            {isEditing ? (
                <div className="inline-block px-2 py-4 font-medium">
                    <input
                        className="border-1 border-black"
                        type="text"
                        value={text}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>

            ) : (
                <>
                    <span onClick={handleClick} className="inline-block px-2 py-4 font-medium">{text}</span>
                    <img className="py-4" style={{transform: 'scale(0.8)'}} src={editSvg} alt=""/>
                </>
            )}
        </div>
    )
}


export default PageNameEditBlock;