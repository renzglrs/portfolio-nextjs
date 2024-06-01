import { FaGithub, FaLinkedin, FaCodepen, FaInstagram } from "react-icons/fa";

interface ContactList {
  label: string;
  link: string;
  imgUrl?: React.ReactNode;
}

export const contactList: ContactList[] = [
    {
        label: "Github",
        link: "https://github.com/renzglrs",
        imgUrl: <FaGithub />,
    },
    {
        label: "Linkedin",
        link: "https://www.linkedin.com/in/renzcarloglorioso/",
        imgUrl: <FaLinkedin />,
    },
    {
        label: "Codepen",
        link: "https://www.codepen.io/",
        imgUrl: <FaCodepen />,
    },
    {
        label: "Instagram",
        link: "https://www.instagram.com/",
        imgUrl: <FaInstagram />,
    },
];