import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMediaLinks = () => {
  const iconClass = "text-3xl tab:text-4xl mx-4 animate-bounce text-secondary";
  return (
    <div className="m-8 laptop:m-12 w-full hidden md:flex items-center">
      <a
        href="https://www.linkedin.com/in/tushar-donga-1091b416a/"
        className="group"
      >
        <FaLinkedin className={iconClass} aria-label="LinkedIn" />
      </a>
      <a href="https://github.com/tushardonga">
        <FaGithub className={iconClass} aria-label="GitHub" />
      </a>
      <a href="https://twitter.com/0786tushar">
        <FaTwitter className={iconClass} aria-label="Twitter" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
