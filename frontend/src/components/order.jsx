import React, { useState } from 'react';

export default ({ order, setOrder }) => {


    const addOrder = (e) => {
        e.preventDefault();
        if (confirm("are you sure to add order")) {
            if (order < 4) setOrder(order + 1);
            else setOrder(1)
        }
    };

    const removeOrder = (e) => {
        e.preventDefault();
        if (confirm("are you sure to remove order")) {
            if (order > 0) {
                setOrder(order - 1);
            }
        }
    };

    return (
        <div className="ordersContainer">
            <div className="order flex gap-2 items-center h-8">
                <span>Order :- </span>
                {Array.from({ length: order }).map((_, index) => (
                    <div key={index} className="order-box orderItem flexc border-2 border-black w-8 h-8">
                        {index + 1}
                    </div>
                ))}
            </div>
            <div className="orderbtns flex gap-2 flex-wrap">
                <button className="addOrder actionbtn pc my-2 rounded-md" onClick={addOrder}>Add Order</button>
                <button className="removeOrder actionbtn pc my-2 rounded-md" onClick={removeOrder}>Remove Order</button>
            </div>
        </div>
    );
};
