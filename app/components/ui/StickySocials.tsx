import { socials } from "@/app/data/data";
import Link from "next/link";


const StickySocials = () => {
  return (
    <div className="hidden md:fixed top-1/2 left-4 transform -translate-y-1/2 md:flex md:flex-col md:gap-4 z-50">
      {socials.map((social, idx) => (
        <Link
          key={idx}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-white transition-all duration-300"
        >
          {/* Icon */}
          <div className="p-2 bg-[#183D3D]/50 rounded-full hover:bg-surface transition-all duration-300">
            <social.icon className="w-5 h-5" />
          </div>

          {/* Name (hidden by default, slides out on hover) */}
          <span className="ml-2 text-sm bg-[#183D3D]/50 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-[-100%] transition-all duration-300">
            {social.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default StickySocials;