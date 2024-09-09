import { Teams } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Team = () => {
  return (
    <div className="py-20" id="team">
      <h1 className="heading">
        Expert <span className="text-purple">Team Members</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {Teams.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col md:flex-row md:gap-4 lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-52 md:w-72 w-screen sm:w-screen"
              />
              <div className="lg:ms-5">
                <h1 className="text-start lg:text-lg text-xl md:text-3xl font-bold text-purple">
                  {card.title}
                </h1>
                <p className="text-start lg:text-sm text-sm md:text-xl mt-3 font-bold">
                  {card.desig}
                </p>
                <p className="text-start lg:text-lg md:text-xl text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Team;
