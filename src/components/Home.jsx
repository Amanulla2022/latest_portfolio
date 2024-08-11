import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import my_pic from "../assets/my_pic.jpeg";

const Home = () => {
  const [text, setText] = useState("Front End Developer");

  useEffect(() => {
    const texts = [
      "Front End Developer",
      "Web Developer",
      "MERN Stack Developer",
    ];

    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row text-white gap-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            I'm a <span className="bg-blue-400 p-1 rounded-lg">{text}</span>
          </h2>
          <p>
            I'm Amanulla Iqbal Mulla, a {text} with 11 months of experience at
            Publicis Sapient. I'm currently honing my full-stack skills in a
            MERN Stack apprenticeship and actively seeking job opportunities.
          </p>
          <div className="mt-4">
            <button className="flex items-center text-blue-400 border border-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-black">
              Portfolio
              <span className="ml-2">
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src={my_pic}
            alt="my profile pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
