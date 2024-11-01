import { Link } from "react-router-dom"
export default ()=>{
    return(
        <div id="notfound">
            <div className="notFoundContainer flexc flex-col">
                <div className="notfoundImg">
                    <img src="images/nothingfound.png" alt="" />
                </div>
                <div className="notfoundTitle text-center">
                    <h1 className="text-3xl">Its look like you are lost. <br /> Click <Link to={"/"} className="underline">Home</Link></h1>
                </div>

            </div>
        </div>
    )
}