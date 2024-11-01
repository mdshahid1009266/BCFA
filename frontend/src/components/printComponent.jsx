export default ({ data }) => {
    return (
        <div id="print" >
            <div className="printContainer px-5 py-3">
                <div className="printTitle flexc flex-col gap-2 border-b-2 pb-2 mb-3 border-black">
                    <h1 className="text-2xl font-medium">Burger City Frankfurterallee</h1>
                    <p className="text-center">Frankfurter allee 255,<br />10365 berlin</p>
                </div>
                <div className="custumarData flex- flex-col gap-2">
                    <div className="number">
                        <h1 className=" font-bold"><span>Tel:</span> <span className="text-center font-normal">{data.number}</span></h1>
                    </div>
                    <div className="id">
                        <h1 className="font-bold">Kunde: <span className="text-center font-normal">{data.id}</span></h1>
                    </div>
                    <div className="name">
                        <h1 className="font-bold"><span className="text-center font-normal">{data.fn} {data.ln}</span></h1>
                    </div>
                    <div className="id">
                        <h1 className="font-bold"><span className="text-center font-normal">{data.sn},  {data.hn} <br /> {data.pc},  {data.city}</span></h1>
                    </div>
                </div>
                <div className="custumarFooter">
                    <h1 className="font-bold"><span className="text-center font-medium">{data.db}</span></h1>
                </div>
            </div>
        </div>
    )
}