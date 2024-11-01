export default ({ message, onClose }) => {
    return (
        <div id="modal">
            <div className="modalContainer">
                <div
                    className="inset-0 z-[999] w-dvw h-dvh grid place-items-center backdrop-blur-sm transition-opacity duration-300"
                >
                    <div
                        data-dialog="modal"
                        className="relative m-4 p-4 min-w-[40%] max-w-[80%] rounded-lg bg-white shadow-md"
                    >
                        <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
                            {message}
                        </div>
                        <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
                            <button data-dialog-close="true" className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={onClose}>
                                Cancel
                            </button>
                            <button data-dialog-close="true" className="rounded-md bg-[#2e7df4] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-[#2e7df4] focus:shadow-none active:bg[#2e7df4] hover:bg[#2e7df4] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button" onClick={onClose}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}