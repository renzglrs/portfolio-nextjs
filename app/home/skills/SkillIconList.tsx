import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiShadcnui, SiPostman, SiPhp, SiMysql } from "react-icons/si";

interface SkillIcon {
  label: string;
  href: string;
  style?: string;
  icon?: React.ReactNode;
}
export const SkillIconList: SkillIcon[] = [
    {
        label: "HTML5",
        href: "/",
        style: "text-orange-600 ",
        // style: "hover:opacity-50",
        icon: <FaHtml5 />
    },
    {
        label: "CSS3",
        href: "/",
        style: "text-blue-500 ",
        // style: "hover:opacity-50",
        icon: <FaCss3 />
    },
    {
        label: "Javascript",
        href: "/",
        style: "text-yellow-300 ",
        icon: <IoLogoJavascript />

    },
    {
        label: "ReactJS",
        href: "/",
        style: "text-cyan-400 ",
        icon: <FaReact />
    },
    {
        label: "NextJS",
        href: "/",
        style: "",
        icon: <RiNextjsFill />

    },
    {
        label: "NodeJS",
        href: "/",
        style: "text-green-400 ",
        icon: <FaNodeJs />
    },
    {
        label: "ExpressJS",
        href: "/",
        style: "text-gray-400 ",
        icon: <SiExpress />
    },
    {
        label: "Tailwind",
        href: "/",
        style: "text-teal-400 ",
        icon: <RiTailwindCssFill />
    },
    {
        label: "Mongodb",
        href: "/",
        style: "text-green-600 ",
        icon: <SiMongodb />
    },
    {
        label: "Shadcnui",
        href: "/",
        style: "text-gray-200 ",
        icon: <SiShadcnui />
    },
    {
        label: "Postman",
        href: "/",
        style: "text-orange-400 ",
        icon: <SiPostman />
    },
    {
        label: "PHP",
        href: "/",
        style: "text-indigo-500 ",
        icon: <SiPhp />
    },
    {
        label: "MySQL",
        href: "/",
        style: "text-sky-800",
        icon: <SiMysql />
    },
    {
        label: "Laravel",
        href: "/",
        style: "text-red-600",
        icon: <FaLaravel />
    },
]
