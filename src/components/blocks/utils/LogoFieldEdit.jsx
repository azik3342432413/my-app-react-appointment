import React, { useState, useRef } from 'react';

function LogoFieldEdit(){

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const fileInputRef = useRef(null);

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="w-full flex justify-center items-center mt-5">
            <div className="flex flex-col justify-center items-center">
                <p className="inline-block px-2 py-4 font-medium">Survey logo</p>
                {image ? (
                    <div>
                        <img src={image} alt="Selected" style={{maxWidth: '300px'}}/>
                    </div>
                ) : (
                    <>
                        <button onClick={handleFileClick} type="button"
                                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Browse
                        </button>
                        <input style={{display: "none"}} type="file" ref={fileInputRef} onChange={handleChange}/>
                    </>
                )}
            </div>
        </div>
    )
}


export default LogoFieldEdit;