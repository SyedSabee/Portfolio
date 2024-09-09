import React from "react";
import { StaticCards } from "./ui/InfiniteMovingCard";
import { differentiate } from "@/data";

const Message = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        What <span className="text-purple">differentiate us?</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <StaticCards items={differentiate} />
      </div>
    </div>
  );
};

export default Message;
