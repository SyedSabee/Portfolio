import React from "react";

const CEOMessage = () => {
  return (
    <div className="testimonial py-10" id="review">
      <div className="container mx-auto max-w-3xl">
        <div className="testimonial-icon mb-12 text-center">
          <i className="fa fa-quote-left text-6xl text-gray-300"></i>
        </div>
        <div className="testimonial-item">
          <div className="relative mb-4 z-10">
            <img
              src="/testimonial-1.jpg"
              alt="CEO"
              className="mx-auto w-32 p-2.5 border-4 border-dotted border-white rounded-full"
            />
          </div>
          <div
            className=" relative -mt-16 py-16 px-8 text-center rounded-full"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0% , rgba(12,14,35,1) 100%",
            }}
          >
            <p className="italic text-lg text-white">
              Limitations live only in our minds. But if we use our
              imaginations, our possibilities become limitless.
            </p>
            <h3 className="text-lg font-semibold text-blue-500 mt-4">CEO</h3>
            <h4 className="text-sm text-white">Muhammad Irfan Shafi</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOMessage;
