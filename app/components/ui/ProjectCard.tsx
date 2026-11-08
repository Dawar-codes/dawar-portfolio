import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3dCard";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink, TbBuilding, TbSparkles } from "react-icons/tb";

import ImageSlider from "./ImageSlider";
import type { Project } from "@/app/data/data";

/** Styled stand-in thumbnail for projects without a screenshot. */
const PlaceholderThumb = ({ title }: { title: string }) => (
  <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#183D3D] via-[#0b1f22] to-[#040D12] border border-[#5C8374]/30 flex items-center justify-center gap-5 px-6">
    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
    {/* Score ring */}
    <div className="relative w-20 h-20 shrink-0">
      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
        <circle cx="18" cy="18" r="15.5" fill="none" stroke="#5C8374" strokeOpacity="0.25" strokeWidth="3" />
        <circle
          cx="18"
          cy="18"
          r="15.5"
          fill="none"
          stroke="#7fb8a5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="97.4"
          strokeDashoffset="14.6"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold text-white leading-none">85</span>
        <span className="text-[9px] text-text">ATS</span>
      </div>
    </div>
    {/* Fake score bars */}
    <div className="flex-1 space-y-2">
      {[
        ["Keywords", "w-4/5"],
        ["Impact", "w-3/5"],
        ["Format", "w-11/12"],
      ].map(([label, w]) => (
        <div key={label}>
          <div className="text-[10px] text-text mb-0.5">{label}</div>
          <div className="h-1.5 rounded-full bg-[#5C8374]/25">
            <div className={`h-full rounded-full bg-gradient-to-r from-accent to-[#7fb8a5] ${w}`} />
          </div>
        </div>
      ))}
      <div className="flex items-center gap-1 text-[10px] text-emerald-300 pt-0.5">
        <TbSparkles /> {title}
      </div>
    </div>
  </div>
);

const ProjectCard: React.FC<Project> = ({
  title,
  hashtags,
  src,
  slides,
  live,
  github,
  company,
  description,
}) => {
  const thumbnail = slides?.length ? (
    <ImageSlider slides={slides} />
  ) : src ? (
    <Image
      src={src}
      height={900}
      width={900}
      className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
      alt={`${title} screenshot`}
    />
  ) : (
    <PlaceholderThumb title={title} />
  );

  const linkClass =
    "flex items-center gap-1.5 rounded-lg border border-[#5C8374]/40 bg-bg/60 px-3 py-1.5 text-xs md:text-sm text-text hover:text-white hover:border-accent hover:bg-surface/60 transition";

  return (
    <CardContainer
      className="inter-var w-full h-full"
      containerClassName="h-full"
    >
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-surface/30 border-[#5C8374]/30 w-full h-full rounded-xl p-6 border flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <CardItem translateZ="50" className="text-xl font-bold text-accent">
            {title}
          </CardItem>
          {company && (
            <CardItem
              translateZ="40"
              className="shrink-0 flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-300/10 px-2 py-0.5 text-[10px] md:text-xs text-amber-200"
              title={`Built at ${company} — source code is private`}
            >
              <TbBuilding /> {company}
            </CardItem>
          )}
        </div>
        <CardItem
          as="p"
          translateZ="60"
          className="text-xs max-w-sm mt-2 text-[#93B1A6] tracking-wide leading-relaxed italic"
        >
          {hashtags}
        </CardItem>

        {/* Slider handles its own clicks; single images link to the live site */}
        <CardItem translateZ="100" className="w-full mt-4">
          {!slides?.length && live ? (
            <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
              {thumbnail}
            </a>
          ) : (
            thumbnail
          )}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-5 text-neutral-300 flex-1"
        >
          {description}
        </CardItem>

        <CardItem translateZ="50" className="mt-5 flex flex-wrap items-center gap-2">
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <TbExternalLink /> Live
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaGithub /> GitHub
            </a>
          )}
          {company && !github && (
            <span className="text-[11px] text-text/60 italic">
              Company project · source is private
            </span>
          )}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
