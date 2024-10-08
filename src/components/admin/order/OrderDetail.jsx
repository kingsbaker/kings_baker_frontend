import React, { useState } from "react";
import HeaderLayout from "../../../molecules/header/HeaderLayout";
import { twMerge } from "tailwind-merge";

const OrderDetailsCard = ({ orderData }) => {
  console.log('orderData: ', orderData);
  const order = {
    orderNumber: "5624270001",
    status: "Accepted",
    total: 598,
    timeDifference: "1 hrs 20 min",
    allocationTime: "30-09-2024 09:27:00",
    acceptanceTime: "30-09-2024 10:47:00",
    deliveryDate: "30-09-2024",
    deliveryMode: "Premium Delivery",
    deliveryTime: "10:00:00 - 14:00:00 hrs",
    items: [
      { id: "EXP87471", quantity: 1 },
      { id: "Add on: EXP3819", quantity: 1 },
    ],
    orderItem: [
      {
        name: "Crunchy Butterscotch Cake",
        description: "Half Kg Eggless, Cream, 6 inches",
        price: 275,
        quantity: 1,
        id: "EXP87471",
        image:
          "https://hulk.fnp.com/images/pr/x/v20240905144123/perfect-picture-personalised-frame_1.jpg",
      },
      {
        name: "Magic Relighting Candle",
        description: "Add-on item",
        price: 10,
        quantity: 1,
        id: "Add on: EXP3819",
        image:
          "https://hulk.fnp.com/images/pr/x/v20240905144123/perfect-picture-personalised-frame_1.jpg",
      },
    ],
    recipient: {
      name: "Avinash Kumar",
      address:
        "66 Mahalxmi enclave Jansath road Muzaffarnagar, Muzaffarnagar, India, 251001",
      phone: "(M) 9012919791",
    },
    sender: {
      name: "Priya",
    },
    personalizedImage:
      "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    message:
      "On this special day, I hope that you get all that your heart desires. Happiness, peace of mind, prosperity and good health. May you get all these together with special gifts! Happy Birthday",
    specialInstructions: "Kindly process with personalised cushion",
  };
  const [isSelected, setIsSelected] = useState(false);

  return (
    <HeaderLayout
      id={3}
      logoSrc="https://i.ibb.co/NYGqQxs/Screenshot-20240915-192128-Drive.jpg"
      logoAlt="King Baker Logo"
      title="KING BAKER"
    >
      <div className={`bg-white rounded-lg shadow-lg p-6 mb-4 `}>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {order.orderNumber}
            </h2>
            <span className="text-sm font-medium text-green-600">
              {order.status}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold text-gray-800">
              ₹{order.total}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                  clipRule="evenodd"
                />
              </svg>
              Time Details
            </h3>
            <p className="text-sm text-gray-600">
              Time Difference: {order.timeDifference}
            </p>
            <p className="text-sm text-gray-600">
              Allocation: {order.allocationTime}
            </p>
            <p className="text-sm text-gray-600">
              Acceptance: {order.acceptanceTime}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 mr-2"
              >
                <path d="M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 0 0 2 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 0 0 6.5 3ZM2 12v2.5A1.5 1.5 0 0 0 3.5 16h.041a3 3 0 0 1 5.918 0h.791a.75.75 0 0 0 .75-.75V12H2Z" />
                <path d="M6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM13.25 5a.75.75 0 0 0-.75.75v8.514a3.001 3.001 0 0 1 4.893 1.44c.37-.275.61-.719.595-1.227a24.905 24.905 0 0 0-1.784-8.549A1.486 1.486 0 0 0 14.823 5H13.25ZM14.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              </svg>
              Delivery Details
            </h3>
            <p className="text-sm text-gray-600">Date: {order.deliveryDate}</p>
            <p className="text-sm text-gray-600">Mode: {order.deliveryMode}</p>
            <p className="text-sm text-gray-600">Time: {order.deliveryTime}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Order Items</h3>

          <div className="divide-y">
            {order.orderItem.map((item, index) => (
              <div
                key={index}
                className={twMerge(
                  "flex items-center mb-1.5 py-1.5 px-3",
                  index === 0 && "rounded-lg border border-gray-800  "
                )}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h4 className="font-medium text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800">₹{item.price}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 mr-2"
              >
                <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
              </svg>
              Recipient Details
            </h3>
            <p className="text-sm text-gray-800">{order.recipient.name}</p>
            <p className="text-sm text-gray-600">{order.recipient.address}</p>
            <p className="text-sm text-gray-600">{order.recipient.phone}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 size-5"
              >
                <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
              </svg>
              Sender Details
            </h3>
            <p className="text-sm text-gray-800">{order.sender.name}</p>
          </div>
        </div>

        {order.personalizedImage && (
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Personalized Image
            </h3>
            <img
              src={order.personalizedImage}
              alt="Personalized"
              className=" h-48 w-fit rounded-lg"
            />
          </div>
        )}
        {/* {order.orderItem && (
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M9.25 3H3.5A1.5 1.5 0 0 0 2 4.5v4.75h3.365A2.75 2.75 0 0 1 9.25 5.362V3ZM2 10.75v4.75A1.5 1.5 0 0 0 3.5 17h5.75v-4.876A4.75 4.75 0 0 1 5 14.75a.75.75 0 0 1 0-1.5 3.251 3.251 0 0 0 3.163-2.5H2ZM10.75 17h5.75a1.5 1.5 0 0 0 1.5-1.5v-4.75h-6.163A3.251 3.251 0 0 0 15 13.25a.75.75 0 0 1 0 1.5 4.75 4.75 0 0 1-4.25-2.626V17ZM18 9.25V4.5A1.5 1.5 0 0 0 16.5 3h-5.75v2.362a2.75 2.75 0 0 1 3.885 3.888H18Zm-4.496-2.755a1.25 1.25 0 0 0-1.768 0c-.36.359-.526.999-.559 1.697-.01.228-.006.443.004.626.183.01.398.014.626.003.698-.033 1.338-.2 1.697-.559a1.25 1.25 0 0 0 0-1.767Zm-5.24 0a1.25 1.25 0 0 0-1.768 1.767c.36.36 1 .526 1.697.56.228.01.443.006.626-.004.01-.183.015-.398.004-.626-.033-.698-.2-1.338-.56-1.697Z"
                  clipRule="evenodd"
                />
              </svg>
              Addons
            </h3>

            
          </div>
        )} */}

        {order.message && (
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a2.5 2.5 0 0 0-4-3 2.5 2.5 0 0 0-4 3H3.25C2.56 6 2 6.56 2 7.25v.5C2 8.44 2.56 9 3.25 9h6V6h1.5v3h6C17.44 9 18 8.44 18 7.75v-.5C18 6.56 17.44 6 16.75 6H14Zm-1-1.5a1 1 0 0 1-1 1h-1v-1a1 1 0 1 1 2 0Zm-6 0a1 1 0 0 0 1 1h1v-1a1 1 0 0 0-2 0Z"
                  clipRule="evenodd"
                />
                <path d="M9.25 10.5H3v4.75A2.75 2.75 0 0 0 5.75 18h3.5v-7.5ZM10.75 18v-7.5H17v4.75A2.75 2.75 0 0 1 14.25 18h-3.5Z" />
              </svg>
              Message on Card
            </h3>
            <p className="text-sm text-gray-600 italic">"{order.message}"</p>
          </div>
        )}

        {order.specialInstructions && (
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">
              Special Instructions
            </h3>
            <p className="text-sm text-gray-800">{order.specialInstructions}</p>
          </div>
        )}

        <div className="flex justify-end space-x-2 mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Print Order
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Branding Challan
          </button>
        </div>
      </div>
    </HeaderLayout>
  );
};
export default OrderDetailsCard;
