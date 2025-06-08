import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Know your Dr",
    path: "/about",
    newTab: false,
  },

  {
    id: 5,
    title: "Treatment",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Gastrointestinal Cancers",
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "Thoracic/Chest cancers",
        path: "/contact",
        newTab: false,
      },
      {
        id: 53,
        title: "Gynaecological cancer",
        path: "/blog",
        newTab: false,
      },
      {
        id: 54,
        title: "Head & Neck Cancer",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 55,
        title: "Breast Cancer",
        path: "/blog-details",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Experties ",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "HIPEC Surgery",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Laparoscopic Cancer Surgery",
        path: "/contact",
        newTab: false,
      },
      {
        id: 63,
        title: "Video Assisted Thoracoscopic Surgery",
        path: "/blog",
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact us",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
