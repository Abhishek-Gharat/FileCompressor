import { useState } from "react"
import "./App.css"
import Compress from "./Component/Compress"
import Processing from "./Component/Processing"
function App() {
    const [progress, setProgress] = useState(30) // Example progress state
    const [estimatedTimeLeft, setEstimatedTimeLeft] = useState("2 min") // Example estimated time left state

    const handlePause = () => {
        // Handle pause functionality
    }

    // Example function for handling cancel
    const handleCancel = () => {
        // Handle cancel functionality
    }

    return (
        <div>
            <Processing
                progress={progress}
                estimatedTimeLeft={estimatedTimeLeft}
                onPause={handlePause}
                onCancel={handleCancel}
            />
            <Compress />
        </div>
    )
}

export default App
