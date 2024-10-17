import React, { useState, useMemo } from "react";
import AddonCard from "../../../molecules/cards/AddonCard";
import CategoryFilter from "../../../molecules/CategoryFilter";
import { useNavigate, useParams } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import getCookie from "../../../atom/utils/getCookies";
import setCookie from "../../../atom/utils/setCookies";
import { useCreateOrderMutation } from "../../../redux/apiSlices/ecom/checkoutApiSlice";
import { toast } from "sonner";
import { addOrder } from "../../../redux/slices/ecom/orderSlice";

const ProductAddOns = ({
  closeModal,
  addons,
  productId: selectedProductId,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [quantities, setQuantities] = useState({});
  const { getValues } = useFormContext();
  const navigate = useNavigate();

  const [createOrder, { isLoading, isError }] = useCreateOrderMutation();
  const categories = useMemo(
    () => ["All", ...new Set(addons.map((p) => p.category))],
    [addons]
  );

  const filteredProducts = useMemo(
    () =>
      activeCategory === "All"
        ? addons
        : addons.filter((p) => p.category === activeCategory),
    [activeCategory, addons]
  );

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prev) => ({ ...prev, [productId]: newQuantity }));
  };

  const total = useMemo(
    () =>
      Object.entries(quantities).reduce(
        (curr, [productId, quantity]) => {
          const product = addons?.find(
            (p) => p.addOn_id === parseInt(productId)
          );
          return {
            price: curr?.price + (product ? product.price * quantity : 0),
            quantity: quantity + curr?.quantity,
          };
        },
        {
          price: 0,
          quantity: 0,
        }
      ),
    [quantities, addons]
  );

  const convertData = (order) => {
    const { delivery_details, location } = order;
    const shipping = delivery_details?.shipping ?? {};
    const baseObject = {
      mainItem: {
        productDetails: [
          {
            _id: delivery_details?.product_id,
            productId: delivery_details?.product_id,
            prices: 750,
            imageLink: [],
            title: "",
          },
        ],
        order_id: `ORD${Math.floor(Math.random() * 1000) + 1}`,
        deliveryAddresses: [],
        is_veg: delivery_details?.is_veg,
        shipping: shipping,
        message_on_product: delivery_details?.is_veg,
        is_message: delivery_details?.is_veg,
        is_image: delivery_details?.is_veg,
        images: [],
        special_request: "",
        order_status: order?.order_status,
        payment_status: order?.payment_status,
        location: location,
        id: delivery_details?.product_id,
        name: "",
        price: 0,
        quantity: 1,
        image: "",
      },
      addons: [
        {
          id: "66e57411174d26151ff3f9bd",
          name: "Greeting Card As Per Occasion",
          price: 99,
          quantity: 1,
          image:
            "https://fnp.com/images/pr/l/v20190122233454/red-sensation_1.jpg",
        },
        {
          id: "66e57411174d26151ff3f9c0",
          name: "Candle 1",
          price: 49,
          quantity: 1,
          image:
            "https://fnp.com/images/pr/l/v20190122233454/red-sensation_1.jpg",
        },
        {
          id: "66e57411174d26151ff3f9be",
          name: "Magic Relighting Candle",
          price: 49,
          quantity: 2,
          image:
            "https://fnp.com/images/pr/l/v20190122233454/red-sensation_1.jpg",
        },
      ],
      deliveryDetails: {
        method: shipping?.method ?? "",
        date: shipping?.delivery_date,
        timeSlot: shipping?.time,
        fee: shipping?.shipping_amount,
      },
      occasion: null,
      messageCard: "",
      messageOnCake: "",
    };
    return baseObject;
  };

  // console.log(getValues(), quantities);
  const handleSubmit = async () => {
    const isLogin = getCookie("_id") ? true : false;
    const addonsArr = Object.keys(quantities)?.map((item) => {
      const addON_id = Array.isArray(addons)
        ? addons.find((el) => el.addOn_id == item)
        : [];
      return {
        addOn_id: addON_id?._id,
        count: quantities[item],
      };
    });
    const formData = getValues();

    const newOrder = {
      user_id: getCookie("_id"),
      order_status: "PENDING",
      payment_status: "PENDING",
      location: {
        latitude: 18.996559,
        longitude: 72.821319,
      },
      pincode: 12345,
      delivery_details: {
        product_id: selectedProductId,
        delivery_address: null,
        message_on_product: formData?.msgOnCake ?? "",
        imgaes_on_product: formData?.imageOnCake ?? "",
        is_message: formData?.msgOnCake ? "true" : "false",
        is_image: formData?.imageOnCake ? "true" : "false",
        is_veg: formData?.egg == "on" ? "false" : true,
        special_request: "",
        delivary_date: formData?.day,
        shipping: {
          method: formData?.delivery?.title,
          time: formData?.slot?.time,
          shipping_amount: formData?.delivery?.price,
          delivary_date: formData?.day,
        },
        addOn: addonsArr ?? [],
      },
    };

    const convertedData = convertData(newOrder);

    // console.log('convertedData: ', convertedData);
    if (!isLogin) {
      dispatch(addOrder(newOrder));
      navigate("/");
    } else {
      try {
        await createOrder(newOrder);
        toast.success("Order created successfully");
        navigate("/");
      } catch (error) {}
    }
  };

  return (
    <section className=" h-[110vh] md:h-[90vh] md:w-[80vw] overflow-hidden ">
      <div className="flex items-center mb-4">
        <svg
          onClick={closeModal}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>

        <h1 className="text-2xl font-bold text-center ml-2">
          Make it extra special
        </h1>
      </div>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="mt-4 md:mt-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 overflow-y-auto h-[62vh] ">
        {filteredProducts.map((product) => (
          <AddonCard
            key={product.addOn_id}
            product={product}
            quantity={quantities[product.addOn_id] || 0}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>

      <div className=" bg-white rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>₹ 49</span>
        </div>
        <div className="flex justify-between items-center font-bold">
          <span>TOTAL</span>
          <span>₹ {total?.price ?? 0 + 49}</span>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-orange-500 text-white py-3 rounded-lg mt-4 font-bold"
        >
          CONTINUE WITH{total?.quantity > 0 ? ` ${total?.quantity}` : "OUT"}{" "}
          ADDON
        </button>
      </div>
    </section>
  );
};

export default ProductAddOns;
