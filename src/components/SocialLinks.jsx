import React from "react";
import { FaLinkedin, FaGithub, FaCloudDownloadAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkdIn <FaLinkedin className="text-4xl" />
        </>
      ),
      href: "https://www.linkedin.com/in/amanulla-mulla-000678232/",
      style: "rounded-t-r-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub className="text-4xl" />
        </>
      ),
      href: "https://github.com/Amanulla2022",
    },
    {
      id: 3,
      child: (
        <>
          Mail to me <MdMail className="text-4xl" />
        </>
      ),
      href: "mailto:amanmulla167@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Download Resume <FaCloudDownloadAlt className="text-4xl" />
        </>
      ),
      href: "/Amanulla_resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              link.style
            }
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              <>{link.child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
