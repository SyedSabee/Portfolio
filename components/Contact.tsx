import React from "react";
import MagicButton from "./ui/MagicButton";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Contact <span className="text-purple">Us</span>
        </h1>
        <a href="mailto:hr@raccoontechinc.com">
          <MagicButton
            title="Contact Us"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div>
        <div className="relative text-right w-full h-[400px] mt-10">
          <div className="overflow-hidden bg-none w-full h-full">
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=raccoon%20tech&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      <div
        className="mt-8 relative"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0% , rgba(12,14,35,1) 100%",
        }}
      >
        <div className="container mx-auto py-8">
          <div className="text-center">
            <h2 className="text-white text-3xl font-bold mb-6">
              Raccoon <span className="text-purple">Tech</span>
            </h2>
            <h3 className="text-white text-lg font-semibold mb-6">
              first floor, The Bliss Plaza, F, Plot A2, Sector DHA Phase 1,
              Islamabad, 46000
            </h3>
            <div className="flex justify-center space-x-4 mb-6">
              <p className="text-white text-base font-semibold">
                +012 345 67890
              </p>
              <p className="text-white text-base font-semibold border-l-2 border-white pl-4">
                hr@raccoontechinc.com
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white transition duration-300">
                <FaYoutube />
              </a>
              <a href="#" className="text-white transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-white transition duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
