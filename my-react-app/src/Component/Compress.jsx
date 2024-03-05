import { useEffect, useState } from "react"
import "./Compress.css"
import { useLocation } from "react-router-dom"

function Compress() {
    const location = useLocation()
    const [compressionLevel, setCompressionLevel] = useState(85)
    const [outputFormat, setOutputFormat] = useState("jpg")
    const [images, setImages] = useState([]) // Array of imported images

    useEffect(() => {
        // Check if there are selectedFiles in the location state
        if (location.state && location.state.images) {
            handleImages(location.state.images)
        }
    }, [location.state])

    const handleCompressionChange = (event) => {
        const value = event.target.value
        setCompressionLevel(value)
    }

    const handlePresetChange = (event) => {
        const value = event.target.value
        setCompressionLevel(parseInt(value))
    }

    const handleFormatChange = (format) => {
        setOutputFormat(format)
    }

    const handleImages = (files) => {
        const allowedTypes = [
            "image/png",
            "image/jpeg",
            "image/gif",
            "image/svg+xml",
            "image/webp",
            "image/heic",
        ]
        const selectedImages = []
        for (let i = 0; i < files.length; i++) {
            if (allowedTypes.includes(files[i].type)) {
                selectedImages.push(files[i])
            }
        }
        setImages(selectedImages)
    }

    const handleRemoveImage = (id) => {
        setImages(images.filter((image) => image.id !== id))
    }

    const handleSubmit = () => {
        console.log("Compression level:", compressionLevel)
        console.log("Output format:", outputFormat)
    }

    return (
        <div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Compress JPG
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Quickly compress JPG images to reduce file size.
                            Perfect for optimizing images for the web.
                        </p>
                    </div>

                    <div className="flex items-center justify-center mt-8">
                        <div className="w-3/4 lg:w-1/2">
                            <h2 className="text-2xl font-bold text-gray-700 mb-2">
                                Compression Level
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-8">
                        <div className="w-3/4 lg:w-1/2">
                            <div className="flex items-center justify-between">
                                <label className="text-lg font-semibold text-gray-700 mb-2">
                                    Quality: {compressionLevel}
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={compressionLevel}
                                    onChange={handleCompressionChange}
                                    className="w-full"
                                    style={{
                                        webkitAppearance: "none",
                                        width: "100%",
                                        height: "4px",
                                        background: "#ccc",
                                        outline: "none",
                                        borderRadius: "5px",
                                    }}
                                />
                            </div>
                            <div className="image-grid">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative inline-block"
                                    >
                                        <button
                                            className="absolute top- right-4 z-10 p-0.5 bg-red-500 text-white rounded-full"
                                            onClick={() =>
                                                handleRemoveImage(image.id)
                                            }
                                        >
                                            X
                                        </button>
                                        <img
                                            alt={`Image ${index + 1}`}
                                            src={URL.createObjectURL(image)}
                                            className="grid-image"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Quality{" "}
                                </label>
                                <select
                                    className="w-full bg-gray-200 rounded-lg p-2"
                                    onChange={handlePresetChange}
                                    value={compressionLevel}
                                >
                                    <option value="25">Low (25)</option>
                                    <option value="50">Medium (50)</option>
                                    <option value="85">
                                        Web Quality (85) is recommended in most
                                        cases
                                    </option>
                                    <option value="93">
                                        For images with text, logos and
                                        illustrations, use higher quality (90+).
                                    </option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Output Format
                                </label>
                                <div className="flex justify-start">
                                    <button
                                        className="border border-gray-500 text-gray-500 rounded-lg px-4 py-2 mr-4"
                                        onClick={() =>
                                            handleFormatChange("jpg")
                                        }
                                    >
                                        JPG
                                    </button>
                                    <button
                                        className="border border-gray-500 text-gray-500 rounded-lg px-4 py-2"
                                        onClick={() =>
                                            handleFormatChange("png")
                                        }
                                    >
                                        PNG
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center mt-8">
                                <button
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-full"
                                    onClick={handleSubmit}
                                >
                                    Compress Image
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compress
