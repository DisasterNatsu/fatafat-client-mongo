import {
  ArrowLeftSquare,
  BarChart3,
  BookA,
  Clover,
  IndianRupee,
  Lock,
} from "lucide-react";

export const NavLinks: NavDataType[] = [
  {
    heading: "Tips",
    link: "/tips",
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
  {
    heading: "About Us",
    link: "/about",
    icon: BookA,
  },
  {
    heading: "Privacy",
    link: "/privacy",
    icon: Lock,
  },
];
