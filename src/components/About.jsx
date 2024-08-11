import React from "react";

const About = () => {
  const paragraphs = [
    {
      id: 1,
      para: `Hello, my name is Amanulla Iqbal Mulla. I am a passionate web developer with 11 months of experience at Publicis Sapient. I have expertise in web technologies such as HTML5, CSS3, and JavaScript (ES6).`,
    },
    {
      id: 2,
      para: `Currently, I am deepening my skills through a 9+ month apprenticeship in MERN Stack Development at Geekster, which has enhanced my understanding of full-stack development.`,
    },
    {
      id: 3,
      para: `I am proficient in Java, Data Structures and Algorithms, and SQL. My commitment to continuous learning drives me to seek challenging opportunities.`,
    },
    {
      id: 4,
      para: `I am eager to contribute my technical skills to a forward-thinking team and continue growing as a developer.`,
    },
  ];
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        {paragraphs.map((para) => (
          <p key={para.id} className="text-xl mt-8">
            {para.para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
