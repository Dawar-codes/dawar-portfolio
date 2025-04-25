import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Footer = () => {

  return (
    <footer className="text-text pt-10 pb-10 px-6 border-t border-[#183D3D]/40">
      {/* Content container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">

        {/* Name + Quote */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Muhammad Dawar
          </h3>
          <p className="text-lg opacity-50 mt-4">
            Full-stack Web Developer | React, TypeScript, Next.js, Node.js
          </p>
        </div>

        {/* Spacer or center quote column (optional) */}
        <div />

        {/* Social links with icons */}
        <div>
          <p className="text-lg font-medium">Let&apos;s stay connected:</p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-4 mt-3 text-sm md:text-base">
            <a
              href="https://github.com/Dawar-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-2 transition"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammaddawar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-2 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:dawar.malik29@gmail.com"
              className="hover:text-white flex items-center gap-2 transition"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top button */}
      <div className="mt-10 text-center">
        <a
          href="#"
          className="text-[#93B1A6] hover:text-white text-base opacity-70 hover:opacity-100 transition"
        >
          ↑ Back to Top
        </a>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center">
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} Dawar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
