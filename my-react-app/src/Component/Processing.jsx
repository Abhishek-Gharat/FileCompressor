const Processing = ({ progress, estimatedTimeLeft, onPause, onCancel }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full md:w-[900px] h-[400px] flex flex-col justify-between">
                <h2 className="text-2xl font-bold ">Compressing Images</h2>
                <div className="relative w-full bg-gray-200 h-4 rounded-full overflow-hidden mb-4">
                    <div
                        className="absolute top-0 left-0 bg-blue-500 h-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                    <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                        <span className="text-black font-bold">
                            {progress}%
                        </span>
                    </div>
                </div>
                <p className="text-xl font-bold text-black-600 mb-4">
                    Estimated Time Left: {estimatedTimeLeft}
                </p>
                <div className="flex justify-between items-center ">
                    <div className="flex-grow"></div>
                    <button
                        className="bg-gray-300 text-black rounded-full px-8 py-2 hover:bg-gray-400 transition duration-300"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <div className="flex-grow"></div>{" "}
                    <button
                        className="bg-blue-500 text-white rounded-full px-8 py-2 hover:bg-blue-600 transition duration-300"
                        onClick={onPause}
                    >
                        Pause
                    </button>
                    <div className="flex-grow"></div>
                </div>
            </div>
        </div>
    )
}

export default Processing
