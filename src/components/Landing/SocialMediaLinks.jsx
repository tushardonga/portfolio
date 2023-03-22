import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="m-12 w-full flex items-center">
      <a
        href="https://www.linkedin.com/in/tushar-donga-1091b416a/"
        className="group"
      >
        <FaLinkedin
          className="text-4xl mx-4 animate-bounce text-secondary"
          aria-label="LinkedIn"
        />
      </a>
      <a href="https://github.com/tushardonga">
        <FaGithub
          className="text-4xl mx-4 animate-bounce text-secondary"
          aria-label="GitHub"
        />
      </a>
      <a href="https://twitter.com/0786tushar">
        <FaTwitter
          className="text-4xl mx-4 animate-bounce text-secondary"
          aria-label="Twitter"
        />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
