import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { FaUserGraduate } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <LibraryBooksOutlinedIcon />,
        link: "/dashboard"
    },
    {
        title: "Dashboard",
        icon: <LibraryBooksOutlinedIcon />,
        link: "/dashboard"
    },
    {
        title: "My Courses",
        icon: <FaUserGraduate />,
        link: "/My Courses"
    },
    {
        title: "Quizzes",
        icon: <FaChalkboardTeacher />,
        link: "/Quizzes"
    },
    {
        title: "Order",
        icon: <FaLaptopCode />,
        link: "/Order"
    },
    {
        title: "Wishlist",
        icon: <FavoriteBorderIcon />,
        link: "/Wishlist"
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/Settings"
    },
    {
        title: "Logout",
        icon: <ExitToAppIcon />,
        link: "/Logout"
    },

]