import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3dCard";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  hashtags: string;
  src: string;
  url?: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  hashtags,
  src,
  url,
  description,
}) => {
  return (
    <CardContainer className="inter-var w-[360px] h-[455px]">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-surface/30 border-[#5C8374]/30 w-full h-auto rounded-xl p-6 border ">
        <CardItem translateZ="50" className="text-xl font-bold text-accent">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-xs max-w-sm mt-2 text-[#93B1A6] tracking-wide leading-relaxed italic"
        >
          {hashtags}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          
          <Link
          href={url || ""} 
          target="_blank"
          rel="noopener noreferrer">
            <Image
            src={src}
            height={900}
            width={900}
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /></Link>
          
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
