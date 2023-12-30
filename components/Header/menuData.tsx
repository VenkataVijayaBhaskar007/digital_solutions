import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "#Home",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "#About",
  },
  {
    id: 2.3,
    title: "Team",
    newTab: false,
    path: "/team",
  },

  {
    id: 3,
    title: "Projects",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Digital Marketing Services",
        newTab: false,
        path: "https://digitalmarketingservices.atomsgroup.net/",
      },
      {
        id: 34,
        title: "Software Solutions",
        newTab: false,
        path: "https://softwareservices.atomsgroup.net/",
      },
      {
        id: 35,
        title: "Visual Media",
        newTab: false,
        path: "https://visualmedia.atomsgroup.net/",
      },
     
      {
        id: 35.1,
        title: "",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "",
        newTab: false,
        path: "/error",
      },
    ],
  },

];

export default menuData;
