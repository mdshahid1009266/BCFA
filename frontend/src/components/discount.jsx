import React, { useState, useRef } from "react";
import 'tailwindcss/tailwind.css'; 

const DiscountCalculator = () => {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const discountInputRef = useRef(null);
  const calculateButtonRef = useRef(null);

  const calculateDiscount = (e) => {
    e.preventDefault();
    const priceValue = parseFloat(price);
    const discountValue = parseFloat(discount);

    if (!isNaN(priceValue) && !isNaN(discountValue)) {
      const discountAmount = (priceValue * discountValue) / 100;
      setDiscountedPrice(priceValue - discountAmount);
    } else {
      setDiscountedPrice(null);
    }
  };

  const handlePriceKeyDown = (e) => {
    if (e.key === 'Enter') {
      discountInputRef.current.focus();
    }
  };

  const handleDiscountKeyDown = (e) => {
    if (e.key === 'Enter') {
      calculateButtonRef.current.click();
    }
  };

  return (
    <div className="flex flex-col justify-center">
      {discountedPrice !== null && price && discount !== 0 ? (
        <h2 className="md:h-8">
          After giving {discount}% discount, Price: ${discountedPrice.toFixed(2)}
        </h2>
      ) : (
        <h2 className="md:h-8">
          Price: ${price ? price : ''}
        </h2>
      )}

      <div className="flex flex-col md:flex-row gap-2">
        <div className="min-w-[180px]">
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            onKeyDown={handlePriceKeyDown}
            placeholder="Enter price"
            className="block w-full md:my-2 pc bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="min-w-[180px]">
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            onKeyDown={handleDiscountKeyDown}
            placeholder="Enter discount percentage"
            className="block w-full md:my-2 pc bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ref={discountInputRef}
          />
        </div>
        <button
          onClick={calculateDiscount}
          className="actionbtn pc my-2 rounded-md"
          ref={calculateButtonRef}
        >
          Calculate Discount
        </button>
      </div>
    </div>
  );
};

export default DiscountCalculator;
