import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiShadcnui, SiPostman, SiPhp, SiMysql } from "react-icons/si";





interface SkillIcon {
  label: string;
  href: string;
  icon: React.ReactNode;
}
export const SkillIcons: SkillIcon[] = [
    {
        label: "HTML5",
        href: "/",
        icon: <FaHtml5 />
    },
    {
        label: "CSS3",
        href: "/",
        icon: <FaCss3 />
    },
    {
        label: "Javascript",
        href: "/",
        icon: <IoLogoJavascript />

    },
    {
        label: "ReactJS",
        href: "/",
        icon: <FaReact />
    },
    {
        label: "NodeJS",
        href: "/",
        icon: <FaNodeJs />
    },
    {
        label: "NextJS",
        href: "/",
        icon: <RiNextjsFill />

    },
    {
        label: "ExpressJS",
        href: "/",
        icon: <SiExpress />
    },
    {
        label: "Tailwind",
        href: "/",
        icon: <RiTailwindCssFill />
    },
    {
        label: "Mongodb",
        href: "/",
        icon: <SiMongodb />
    },
    {
        label: "Shadcnui",
        href: "/",
        icon: <SiShadcnui />
    },
    {
        label: "Postman",
        href: "/",
        icon: <SiPostman />
    },
    {
        label: "PHP",
        href: "/",
        icon: <SiPhp />
    },
    {
        label: "MySQL",
        href: "/",
        icon: <SiMysql />
    },
    {
        label: "Laravel",
        href: "/",
        icon: <FaLaravel />
    },
]
