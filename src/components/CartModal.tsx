"use client";

import Image from "next/image";

const CartModal = () => {
  const cardItems = true;

  return (
    <div className="absolute p-4 w-max rounded-md shadow-2xl border-gray-100 border-y-2 bg-white top-12 right-0 gap-6 z-20 flex flex-col">
      {!cardItems ? (
        <div className="style">Card is Empty</div>
      ) : (
        <>
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
          {/* //LIST OF ITEMS */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src=""
                alt=""
                width={72}
                height={64}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty .2 </span>
                  <span className="text-blue-500">Remove </span>
                </div>
              </div>
            </div>
          </div>
          {/* //BOTTOM */}
          <div className="">
            <div className='flex items-center justify-between font-semibold'>
                  <span className="">Subtotal</span>
                  <span className=" ">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
                  Shipping and taxes calculated at checkout.
            </p>
            <div className='flex justify-between text-sm'>
                  <button className='rounded-md py-3 px-4 ring-1 ring-gray-500'>View Cart</button>
                  <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
            </div>
          </div>

        </>
      )}
    </div>
  );
};

export default CartModal;
