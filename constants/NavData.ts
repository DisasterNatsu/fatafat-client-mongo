import {
  ArrowLeftSquare,
  BarChart3,
  Clover,
  IndianRupee,
  BadgeIndianRupee,
} from "lucide-react";

export const NavLinks: NavDataType[] = [
  {
    heading: "Tips",
    link: "/tips",
    icon: BadgeIndianRupee,
  },
  {
    heading: "Patti Tips",
    link: "https://kolkataff.mini.site/",
    icon: IndianRupee,
  },
  {
    heading: "Old Results",
    link: "/prev-res",
    icon: ArrowLeftSquare,
  },
  {
    heading: "Lucky Number",
    link: "/lucky-number",
    icon: Clover,
  },
  {
    heading: "Patti Chart",
    link: "/patti-chart",
    icon: BarChart3,
  },
];
