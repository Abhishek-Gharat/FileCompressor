import { useState, useEffect } from "react"
import "./Content.css" // Import the CSS file
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Content = () => {
    const location = useLocation()
    const [images, setImages] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        // Check if there are selectedFiles in the location state
        if (location.state && location.state.selectedFiles) {
            handleImages(location.state.selectedFiles)
        }
    }, [location.state])

    const handleImageDrop = (e) => {
        e.preventDefault()
        const files = e.dataTransfer.files
        handleImages(files)
    }

    const handleImageSelect = (e) => {
        const files = e.target.files
        handleImages(files)
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

    const compressImages = () => {
        // Logic to compress images
        navigate("/Compress", { state: { images } })
    }

    return (
        <div
            className="content-container"
            onDrop={handleImageDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            <h2>Drag and drop your image here</h2>
            <p>Or use the button below to select an image from your computer</p>
            <label htmlFor="file-select" className="file-select-label">
                Select Image
            </label>
            <input
                id="file-select"
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden" // Hide the default file input
            />

            <p>Supported image formats: PNG, JPEG, GIF, SVG, WEBP, HEIC</p>
            <div className="image-grid">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Image ${index + 1}`}
                        className="grid-image"
                    />
                ))}
            </div>
            {images.length > 0 && (
                <button className="compress-button" onClick={compressImages}>
                    Compress Images
                </button>
            )}
        </div>
    )
}

export default Content
