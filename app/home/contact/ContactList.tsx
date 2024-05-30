import { FaGithub, FaLinkedin, FaCodepen, FaInstagram } from "react-icons/fa";

interface ContactList {
  label: string;
  link: string;
  imgUrl?: React.ReactNode;
}

export const contactList: ContactList[] = [
    {
        label: "Github",
        link: "#",
        imgUrl: <FaGithub />,
    },
    {
        label: "Linkedin",
        link: "#",
        imgUrl: <FaLinkedin />,
    },
    {
        label: "Codepen",
        link: "#",
        imgUrl: <FaCodepen />,
    },
    {
        label: "Instagram",
        link: "#",
        imgUrl: <FaInstagram />,
    },
];