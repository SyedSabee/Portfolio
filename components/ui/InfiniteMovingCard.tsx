"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const StaticCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
  }[];
  className?: string;
}) => {
  return (
    <div className={cn("relative z-20 max-w-7xl overflow-hidden", className)}>
      <ul className={cn("flex min-w-full shrink-0 py-4 w-max flex-nowrap")}>
        {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0% , rgba(12,14,35,1) 100%",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-lg leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1"></span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
