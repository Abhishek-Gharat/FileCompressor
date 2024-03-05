import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "tailwindcss/tailwind.css"
import mainImage from "../assets/main.png"
import vectorImage from "../assets/vector.png"
import spaceImage from "../assets/space.png"
import multipleImage from "../assets/multiple.png"
import iceImage from "../assets/ice.png"

const MainPage = () => {
    const [selectedFiles, setSelectedFiles] = useState([])
    const navigate = useNavigate()

    const handleFileChange = (event) => {
        const files = event.target.files
        setSelectedFiles(files)
    }

    const handleUpload = () => {
        // Implement your upload logic here
        // For demonstration, let's just log the selected files to the console
        console.log("Selected Files:", selectedFiles)
        // You can send the selectedFiles to your backend for further processing

        // Redirect to the DragAndDrop page and pass selectedFiles as state
        navigate("/DragAndDrop", { state: { selectedFiles } })
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div
                    className="text-white text-center bg-cover bg-center bg-no-repeat w-full md:w-1/2 lg:w-1/3 xl:w-4/6"
                    style={{
                        backgroundImage: `url(${mainImage})`,
                        width: "928px",
                        height: "480px",
                    }}
                >
                    <div className="mt-40 p-0 md:p-5  rounded-lg white">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-5 font-bold">
                            Quickly Compress Images
                        </h1>
                        <p className="text-sm md:text-base mb-3">
                            Reduce file size, improve performance
                        </p>
                        <label
                            htmlFor="file-upload"
                            className="file-upload-button"
                        >
                            Select Image
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden" // Hide the default file input
                        />
                        <button
                            onClick={handleUpload}
                            className="upload-button"
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex items-start justify-center">
                <div className="flex flex-col bg-white p-4 shadow-lg rounded-lg mt-4 w-full md:w-3/4 lg:w-1/2 xl:w-4/6">
                    <h2 className="text-2xl text-black font-bold mb-4">
                        Why compress images?
                    </h2>
                    <p className="text-sm text-black mb-5 md:text-base">
                        Large image files can slow down your website, reduce
                        search engine ranking, and increase hosting costs. By
                        compressing images, you can improve performance, save
                        bandwidth, and create a better user experience.
                    </p>
                    <div className="flex flex-col md:flex-row mb-5 md:mb-10 text-black">
                        <div className="md:w-1/2 pr-2 mb-5 md:mb-0">
                            <img
                                src={vectorImage}
                                alt="Optimized Image"
                                className="w-full rounded-lg shadow-md mb-2"
                            />
                            <p className="text-center mt-2">Optimize for web</p>
                            <p className="text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Cum fugiat maiores repellat
                                sequi aliquid nulla vitae? Cum accusamus illo
                                quam! Praesentium, alias.
                            </p>
                        </div>
                        <div className="md:w-1/2 pl-2">
                            <img
                                src={spaceImage}
                                alt="Unoptimized Image"
                                className="w-full rounded-lg shadow-md mb-2"
                            />
                            <p className="text-center mt-2">Reduce file size</p>
                            <p className="text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Cum fugiat maiores repellat
                                sequi aliquid nulla vitae? Cum accusamus illo
                                quam! Praesentium, alias.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row text-black">
                        <div className="md:w-1/2 pr-2 mb-5 md:mb-0">
                            <img
                                src={multipleImage}
                                alt="Optimized Image"
                                className="w-full rounded-lg shadow-md mb-2"
                            />
                            <p className="text-center mt-2">Optimize for web</p>
                            <p className="text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Cum fugiat maiores repellat
                                sequi aliquid nulla vitae? Cum accusamus illo
                                quam! Praesentium, alias.
                            </p>
                        </div>
                        <div className="md:w-1/2 pl-2">
                            <img
                                src={iceImage}
                                alt="Unoptimized Image"
                                className="w-full rounded-lg shadow-md mb-2"
                            />
                            <p className="text-center mt-2">Reduce file size</p>
                            <p className="text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Cum fugiat maiores repellat
                                sequi aliquid nulla vitae? Cum accusamus illo
                                quam! Praesentium, alias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage
