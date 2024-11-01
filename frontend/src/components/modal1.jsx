

export default function Modal({ open, onClose, children }) {
    const icon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>

    )
    return (
        // backdrop
        <div
            onClick={onClose}
            className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}
      `}
        >
            {/* modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                >
                    {icon}
                </button>
                {children}
            </div>
        </div>
    )
}