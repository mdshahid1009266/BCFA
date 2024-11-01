export default ({message}) => {
    return (
        <div id="spinner">
            <div className="spinnerContainer flexc flex-col gap-2">
                <div className="loader"></div>
                <p className="text-2xl">{message}</p>
            </div>
        </div>
    )
}