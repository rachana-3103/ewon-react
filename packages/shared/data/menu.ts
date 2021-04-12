import {
    BarChart2,
    Calendar,
    MessageSquare,
    Users,
    FileText,
    Mail,
    LogIn,
    UserPlus,
    UserCheck,
    ShieldOff,
    User,
    File,
    PieChart,
    Package,
    Layers,
    Box,
    Archive,
} from "react-feather";

const menus = [
    {
        id: 1,
        label: "Dashboard",
        url: "/",
        Icon: PieChart,
        submenu: [
            {
                id: 11,
                label: "Sales Monitoring",
                url: "/",
                Icon: BarChart2,
            },
            {
                id: 12,
                label: "Website Analytics",
                url: "/dashboard-two",
                Icon: BarChart2,
            },
            {
                id: 13,
                label: "Cryptocurrency",
                url: "/dashboard-three",
                Icon: BarChart2,
            },
            {
                id: 14,
                label: "Helpdesk Management",
                url: "/dashboard-four",
                Icon: BarChart2,
            },
        ],
    },
    {
        id: 2,
        label: "Apps",
        url: "/",
        Icon: Package,
        submenu: [
            {
                id: 21,
                label: "Calendar",
                url: "/",
                Icon: Calendar,
            },
            {
                id: 22,
                label: "Chat",
                url: "/",
                Icon: MessageSquare,
            },
            {
                id: 23,
                label: "Contacts",
                url: "/",
                Icon: Users,
            },
            {
                id: 25,
                label: "File Manager",
                url: "/",
                Icon: FileText,
            },
            {
                id: 26,
                label: "Mail",
                url: "/",
                Icon: Mail,
            },
        ],
    },
    {
        id: 3,
        label: "Pages",
        url: "/",
        Icon: Layers,
        megamenu: [
            {
                id: 31,
                title: "Authentication",
                submenu: [
                    {
                        id: 311,
                        label: "Sign In",
                        url: "/signin",
                        Icon: LogIn,
                    },
                    {
                        id: 312,
                        label: "Sign Up",
                        url: "/signup",
                        Icon: UserPlus,
                    },
                    {
                        id: 313,
                        label: "Verify Account",
                        url: "/verify",
                        Icon: UserCheck,
                    },
                    {
                        id: 314,
                        label: "Forgot Password",
                        url: "/",
                        Icon: ShieldOff,
                    },
                ],
            },
            {
                id: 32,
                title: "Error Pages",
                submenu: [
                    {
                        id: 321,
                        label: "404 Page Not Found",
                        url: "/",
                        Icon: File,
                    },
                    {
                        id: 322,
                        label: "500 Internal Server",
                        url: "/",
                        Icon: File,
                    },
                    {
                        id: 323,
                        label: "503 Service Unavailable",
                        url: "/",
                        Icon: File,
                    },
                    {
                        id: 324,
                        label: "505 Forbidden",
                        url: "/",
                        Icon: File,
                    },
                ],
            },
            {
                id: 33,
                title: "User Pages",
                submenu: [
                    {
                        id: 331,
                        label: "View Profile",
                        url: "/",
                        Icon: User,
                    },
                    {
                        id: 332,
                        label: "Connections",
                        url: "/",
                        Icon: Users,
                    },
                    {
                        id: 333,
                        label: "Groups",
                        url: "/",
                        Icon: Users,
                    },
                    {
                        id: 334,
                        label: "Events",
                        url: "/",
                        Icon: Calendar,
                    },
                ],
            },
            {
                id: 34,
                title: "Other Pages",
                submenu: [
                    {
                        id: 341,
                        label: "Timeline",
                        url: "/",
                        Icon: FileText,
                    },
                    {
                        id: 342,
                        label: "Pricing",
                        url: "/",
                        Icon: FileText,
                    },
                    {
                        id: 343,
                        label: "Help Center",
                        url: "/",
                        Icon: FileText,
                    },
                    {
                        id: 344,
                        label: "Invoice",
                        url: "/",
                        Icon: FileText,
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        label: "Components",
        url: "/",
        Icon: Box,
    },
    {
        id: 5,
        label: "Collections",
        url: "/",
        Icon: Archive,
    },
];

export default menus;
