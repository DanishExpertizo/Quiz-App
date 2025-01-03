import './index.css'

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-screen z-50 bg-white flex items-center justify-center">
            <div className="loader">
                {[...Array(4)].map((_, index) => <div key={index} className="circle"></div>)}
            </div>
        </div>
    )
}

export default Loader;