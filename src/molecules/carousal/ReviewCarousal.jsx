import React from "react";
import ProductCard from "../cards/ProductCard";
import ReviewCard from "../cards/ReviewCard";

const reviews = [
  {
    initial: "R",
    name: "rssfee...",
    rating: 0,
    comment: '"All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) "',
    date: "30/08/2024, 1:11 PM",
    deliveredAt: "bangalore",
    occasion: "birthday",
  },
  {
    initial: "R",
    name: "rssfee...",
    rating: 5,
    comment: '"All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) "',
    date: "30/08/2024, 1:11 PM",
    deliveredAt: "bangalore",
    occasion: "birthday",
  },
  {
    initial: "R",
    name: "rssfee...",
    rating: 5,
    comment: '"All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) "',
    date: "30/08/2024, 1:11 PM",
    deliveredAt: "bangalore",
    occasion: "birthday",
  },
  {
    initial: "R",
    name: "rssfee...",
    rating: 5,
    comment: '"All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) "',
    date: "30/08/2024, 1:11 PM",
    deliveredAt: "bangalore",
    occasion: "birthday",
  },
  {
    initial: "R",
    name: "rssfee...",
    rating: 5,
    comment: '"All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) "',
    date: "30/08/2024, 1:11 PM",
    deliveredAt: "bangalore",
    occasion: "birthday",
  },
  {
    initial: "R",
    name: "rssfee...",
    rating: 5,
    comment: '"All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) "',
    date: "30/08/2024, 1:11 PM",
    deliveredAt: "bangalore",
    occasion: "birthday",
  },
  {
    initial: "R",
    name: "rssfee...",
    rating: 5,
    comment: '"All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) "',
    date: "30/08/2024, 1:11 PM",
    deliveredAt: "bangalore",
    occasion: "birthday",
  },
  {
    initial: "R",
    name: "rssfee...",
    rating: 5,
    comment: '"All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) "',
    date: "30/08/2024, 1:11 PM",
    deliveredAt: "bangalore",
    occasion: "birthday",
  },
  {
    initial: "R",
    name: "rssfee...",
    rating: 5,
    comment: '"All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) "',
    date: "30/08/2024, 1:11 PM",
    deliveredAt: "bangalore",
    occasion: "birthday",
  },
  {
    initial: "R",
    name: "rssfee...",
    rating: 5,
    comment: '"All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) "',
    date: "30/08/2024, 1:11 PM",
    deliveredAt: "bangalore",
    occasion: "birthday",
  },
  {
    initial: "R",
    name: "rssfee...",
    rating: 5,
    comment: '"All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) All good :-) "',
    date: "30/08/2024, 1:11 PM",
    deliveredAt: "bangalore",
    occasion: "birthday",
  },
  // Add more review objects here
];

const ReviewCarousel = ({
  title,
  className = "",
  cardClassName = "",
  reviews = []
}) => {
  return (
    <div id="productReview" className={`w-full  ${className}`}>
      <h2 className="text-lg font-semibold my-3 text-gray-700 whitespace-nowrap truncate  md:text-left">
        {title}
      </h2>
      <div className="flex gap-1 overflow-x-auto pb-4 scrollbar-hide w-full">
        {reviews.map((review, index) => (
          <ReviewCard  key={index} className={cardClassName} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
