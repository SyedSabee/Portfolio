import React from "react";
import { StaticCards } from "./ui/InfiniteMovingCard";
import { testimonials } from "@/data";

const COOMessage = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        COO <span className="text-purple">Message:</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <StaticCards items={testimonials} />
      </div>
    </div>
  );
};

export default COOMessage;
