import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiShadcnui, SiPostman, SiPhp, SiMysql } from "react-icons/si";

interface SkillIcon {
  label: string;
  href: string;
  color?: string;
  icon?: React.ReactNode;
}
export const SkillIcons: SkillIcon[] = [
    {
        label: "HTML5",
        href: "/",
        color: "hover:opacity-50",
        icon: <FaHtml5 />
    },
    {
        label: "CSS3",
        href: "/",
        color: "hover:opacity-50",
        icon: <FaCss3 />
    },
    {
        label: "Javascript",
        href: "/",
        color: "hover:opacity-50",
        icon: <IoLogoJavascript />

    },
    {
        label: "ReactJS",
        href: "/",
        color: "hover:opacity-50",
        icon: <FaReact />
    },
    {
        label: "NodeJS",
        href: "/",
        color: "hover:opacity-50",
        icon: <FaNodeJs />
    },
    {
        label: "NextJS",
        href: "/",
        color: "hover:opacity-50",
        icon: <RiNextjsFill />

    },
    {
        label: "ExpressJS",
        href: "/",
        color: "hover:opacity-50",
        icon: <SiExpress />
    },
    {
        label: "Tailwind",
        href: "/",
        color: "hover:opacity-50",
        icon: <RiTailwindCssFill />
    },
    {
        label: "Mongodb",
        href: "/",
        color: "hover:opacity-50",
        icon: <SiMongodb />
    },
    {
        label: "Shadcnui",
        href: "/",
        color: "hover:opacity-50",
        icon: <SiShadcnui />
    },
    {
        label: "Postman",
        href: "/",
        color: "hover:opacity-50",
        icon: <SiPostman />
    },
    {
        label: "PHP",
        href: "/",
        color: "hover:opacity-50",
        icon: <SiPhp />
    },
    {
        label: "MySQL",
        href: "/",
        color: "hover:opacity-50",
        icon: <SiMysql />
    },
    {
        label: "Laravel",
        href: "/",
        color: "hover:opacity-50",
        icon: <FaLaravel />
    },
]
