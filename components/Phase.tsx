"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Phase = () => {
  return (
    <section className="w-full py-20" id="experiences">
      <h1 className="heading">
        Product <span className="text-purple">Development Phase</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planning and Researching:"
          icon={<AceternityIcon order="Phase 1" />}
          description="This phase needed vigorous research to find niche in existing market, 
          therefore our experts try to create applications that meet the needs of people at fullest
           capacity."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Designing/Prototyping:"
          icon={<AceternityIcon order="Phase 2" />}
          description="Our skilled developers along with graphic designers demonstrate their 
          creativity in designing the layout of app, customizing it in a manner that make it simple 
          to interact yet stylish to look at."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Development:"
          icon={<AceternityIcon order="Phase 3" />}
          description="Translating the UI and UX into written pieces of code requires a lot effort and 
        time but here at Raccoon Tech we are vigilant in terms of assessing vital components and 
        functionalities and frequent testing is done to flourish development phase."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Testing:"
          icon={<AceternityIcon order="Phase 4" />}
          description="A real-time check by ASO experts is crucial to verify whether our 
        desired application fulfill the purpose or not. A thorough inspection is carried out for 
        rooting –out bugs and maximizing its functionalities."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Deployment:"
          icon={<AceternityIcon order="Phase 5" />}
          description="Once team Raccoon give green signal, application is ready to launch on various 
        platforms including google playstore and IOS. Upon mutually agreed day we upload our app to 
        reach its end user."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Launching & Enhancement:"
          icon={<AceternityIcon order="Phase 6" />}
          description="We never abandon our app once it is launched, a constant and consistent check 
          is needed to satisfy our users and answer the queries related to functionalities of our 
          product."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center 
      justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative 
      lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2
          className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 
        relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
        group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl"
        >
          {title}
        </h2>
        <h2
          className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 
        relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
        group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] 
      focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
      focus:ring-offset-slate-50"
      >
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center justify-center 
        rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl
        text-2xl font-bold"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Phase;
