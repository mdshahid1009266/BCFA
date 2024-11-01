import { useRef } from "react";

export default ({customer,setCustomer}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({
            ...customer,
            [name]: value,
        });
    };
    const refs = {
        company: useRef(null),
        department: useRef(null),
        contactNumber: useRef(null),
        firstName: useRef(null),
        lastName: useRef(null),
        plz: useRef(null),
        city: useRef(null),
        streetName: useRef(null),
        houseNumber: useRef(null),
        doorbellName: useRef(null),
        floor: useRef(null),
        roomNumber: useRef(null),
        email: useRef(null),
    };
    const handleKeyDown = (e, fieldName) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const nextField = Object.keys(refs)[Object.keys(refs).indexOf(fieldName) + 1];
            if (nextField) {
                refs[nextField].current.focus();
            }
        }
    };
    return (
        <div id="addInputes">
            <div className="addInputesContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                        ref={refs.company}
                        type="text"
                        name="company"
                        value={customer.company}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'company')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Department</label>
                    <input
                        ref={refs.department}
                        type="text"
                        name="department"
                        value={customer.department}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'department')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                    <input
                        ref={refs.contactNumber}
                        type="text"
                        name="contactNumber"
                        value={customer.contactNumber}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'contactNumber')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        ref={refs.firstName}
                        type="text"
                        name="firstName"
                        value={customer.firstName}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'firstName')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        ref={refs.lastName}
                        type="text"
                        name="lastName"
                        value={customer.lastName}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'lastName')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">PLZ</label>
                    <input
                        ref={refs.plz}
                        type="text"
                        name="plz"
                        value={customer.plz}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'plz')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                        ref={refs.city}
                        type="text"
                        name="city"
                        value={customer.city}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'city')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Street Name</label>
                    <input
                        ref={refs.streetName}
                        type="text"
                        name="streetName"
                        value={customer.streetName}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'streetName')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">House Number</label>
                    <input
                        ref={refs.houseNumber}
                        type="text"
                        name="houseNumber"
                        value={customer.houseNumber}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'houseNumber')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700">Doorbell Name</label>
                    <input
                        ref={refs.doorbellName}
                        type="text"
                        name="doorbellName"
                        value={customer.doorbellName}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'doorbellName')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Floor</label>
                    <input
                        ref={refs.floor}
                        type="text"
                        name="floor"
                        value={customer.floor}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'floor')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Room Number</label>
                    <input
                        ref={refs.roomNumber}
                        type="text"
                        name="roomNumber"
                        value={customer.roomNumber}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'roomNumber')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        ref={refs.email}
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                        onKeyDown={(e) => handleKeyDown(e, 'email')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
            </div>
        </div>
    )
}