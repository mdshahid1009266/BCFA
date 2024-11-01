import { Link } from "react-router-dom"
export default () => {

    return (
        <div id="home">
            <div className="homeContainer pc maxw">
                <div className="storeLogo flexc">
                    <img src="/images/logo.png" className="w-36 sm:w-56 md:w-80" alt="Burger city frankfurter allee" />
                </div>
                <div className="storeName flexc text-xl sm:text-2xl md:text-6xl font-bold mb-10 sm:mb-14 md:mb-16">
                    <h1>Burger City Frankfurterallee</h1>
                </div>
                <div className="homeActions flexc flex-col md:flex-row flex-wrap gap-5">
                    <div className="actionItem">
                        <Link to={"/view"} className="actionbtn pc sd2 rounded-md">View All</Link>
                    </div>
                    <div className="actionItem">
                        <Link to={"/add"} className="actionbtn pc sd2 rounded-md">Add New</Link>
                    </div>
                    <div className="actionItem">
                        <Link to={"/search"} className="actionbtn pc sd2 rounded-md">Search</Link>
                    </div>
                    <div className="actionItem">
                        <Link to={"/panel"} className="actionbtn pc sd2 rounded-md">Admin Panel</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}